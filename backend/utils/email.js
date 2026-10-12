import nodemailer from 'nodemailer';

function requiredEnv(name) {
  const value = process.env[name];
  if (!value || String(value).startsWith('your-')) {
    throw new Error(
      `Email is not configured: set a real value for ${name} in backend/.env (Gmail App Password required).`,
    );
  }
  return value;
}

/** Create a transporter only when sending mail — never during server startup. */
export function createTransporter() {
  return nodemailer.createTransport({
    host: requiredEnv('SMTP_HOST'),
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true') === 'true',
    auth: {
      user: requiredEnv('SMTP_USER'),
      pass: requiredEnv('SMTP_PASS'),
    },
  });
}

export async function sendMail(options) {
  const transporter = createTransporter();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  if (!from || String(from).startsWith('your-')) {
    throw new Error('Email is not configured: set MAIL_FROM or SMTP_USER in backend/.env.');
  }

  return transporter.sendMail({
    from,
    ...options,
  });
}
