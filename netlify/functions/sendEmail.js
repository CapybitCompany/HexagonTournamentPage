const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { courseTypeSelect, courseSubjectSelect, courseTimeSelect, name, telNumber, email, additional } = JSON.parse(event.body);
  console.log("Email:", process.env.MY_EMAIL_PASS);
  // Konfiguracja SMTP (przykład: Gmail — lepiej używać konta SMTP, np. Mailersend, Mailgun)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz Szkolenia" <${process.env.MY_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Szkolenie ${courseTypeSelect} - ${courseSubjectSelect} dla ${name}`,
      html: `
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tel:</strong> ${telNumber}</p>
        <p><strong>Wymiar godzinowy:</strong> ${courseTimeSelect}</p>
        <p><strong>Typ szkolenia:</strong> ${courseTypeSelect}</p>
        <p><strong>Wybrany temat:</strong> ${courseSubjectSelect}</p>
        <p><strong>Wiadomość:</strong><br>${additional}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Wiadomość została wysłana!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Błąd przy wysyłaniu wiadomości', error }),
    };
  }
};