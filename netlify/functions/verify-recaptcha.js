const fetch = require('node-fetch');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const token = data["recaptcha-token"];

  const secret = process.env.RECAPTCHA_SECRET_KEY; // Trzymaj klucz sekretu w .env

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

  const response = await fetch(verificationUrl, { method: 'POST' });
  const result = await response.json();

  if (result.success && result.score > 0.5) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: result.score > 0.7, message: "", score: result.score })
    };
  } else {
    return {
      statusCode: 403,
      body: JSON.stringify({ success: false, message: "Nieprawidłowy token reCAPTCHA", score: result.score })
    };
  }
};