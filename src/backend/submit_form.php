<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$host = "localhost";
$username = "root";
$password = "";
$database = "17diamonds_db";

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get user's IP address
    $ip_address = $_SERVER['REMOTE_ADDR'];
    $today = date('Y-m-d');

    // Check submission count for today
    $check_stmt = $conn->prepare("
        SELECT submission_count 
        FROM form_submissions_log 
        WHERE ip_address = :ip_address 
        AND submission_date = :today
    ");
    
    $check_stmt->execute([
        ':ip_address' => $ip_address,
        ':today' => $today
    ]);
    
    $result = $check_stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($result && $result['submission_count'] >= 3) {
        http_response_code(429); // Too Many Requests
        echo json_encode([
            "success" => false, 
            "message" => "Daily submission limit (3) reached. Please try again tomorrow."
        ]);
        exit;
    }

    // Begin transaction
    $conn->beginTransaction();

    // Update or insert submission log
    $log_stmt = $conn->prepare("
        INSERT INTO form_submissions_log (ip_address, submission_date, submission_count)
        VALUES (:ip_address, :today, 1)
        ON DUPLICATE KEY UPDATE submission_count = submission_count + 1
    ");
    
    $log_stmt->execute([
        ':ip_address' => $ip_address,
        ':today' => $today
    ]);

    // Insert form data
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $conn->prepare("
        INSERT INTO form_submissions (name, email, song_name, song_link, notes) 
        VALUES (:name, :email, :song_name, :song_link, :notes)
    ");
    
    $stmt->execute([
        ':name' => $data['name'],
        ':email' => $data['email'],
        ':song_name' => $data['songName'],
        ':song_link' => $data['songLink'],
        ':notes' => $data['notes']
    ]);

    // Commit transaction
    $conn->commit();

    echo json_encode([
        "success" => true, 
        "message" => "Form submitted successfully"
    ]);

} catch(PDOException $e) {
    // Rollback transaction on error
    if ($conn->inTransaction()) {
        $conn->rollBack();
    }
    
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Error submitting form: " . $e->getMessage()
    ]);
}
?>