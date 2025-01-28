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

    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $conn->prepare("INSERT INTO form_submissions (name, email, song_name, song_link, notes) 
                           VALUES (:name, :email, :song_name, :song_link, :notes )");
    
    $stmt->execute([
        ':name' => $data['name'],
        ':email' => $data['email'],
        ':song_name' => $data['songName'],
        ':song_link' => $data['songLink'],
        ':notes' => $data['notes']
    ]);

    echo json_encode(["success" => true, "message" => "Form submitted successfully"]);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>