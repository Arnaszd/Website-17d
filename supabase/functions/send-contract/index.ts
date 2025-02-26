/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve(async (req) => {
  try {
    const { record } = await req.json();
    const { to_email, subject, data } = record;

    // Retrieve your SendGrid API key from environment variables.
    const sendgridAPIKey = Deno.env.get("SENDGRID_API_KEY");
    if (!sendgridAPIKey) {
      throw new Error("SendGrid API key is not set.");
    }

    // Construct the email payload.
    const payload = {
      personalizations: [
        {
          to: [{ email: to_email }],
          subject: subject,
        },
      ],
      from: {
        email: "your-email@example.com", // Replace with your verified sender email.
        name: "Your Name or Company",
      },
      content: [
        {
          type: "text/plain",
          value: `Hi ${data.name},\n\nPlease fill out the contract form using the following link:\n${data.form_link}\n\nThank you!`,
        },
      ],
    };

    // Send the email via SendGrid.
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sendgridAPIKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: "Email failed to send.", details: errorText }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
