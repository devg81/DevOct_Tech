import nodemailer from "nodemailer";

// Sends the intake submission to the studio inbox via SMTP (Resend/Nodemailer-compatible).
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendIntakeEmail(payload) {
  const { name, email, budget, message } = payload;

  return transporter.sendMail({
    from: process.env.MAIL_FROM || "no-reply@devoct.studio",
    to: process.env.MAIL_TO || "hello@devoct.studio",
    subject: `New intake — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\n${message}`,
  });
}
