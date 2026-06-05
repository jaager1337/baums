const nodemailer = require('nodemailer');

function escape(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { first_name, last_name, email, phone, interest, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 587,
    secure: false,
    auth: {
      user: 'info@baumstein.eu',
      pass: process.env.ZOHO_PASS,
    },
  });

  const name = `${first_name || ''} ${last_name || ''}`.trim() || 'Unknown';

  await transporter.sendMail({
    from: '"Baumstein Website" <info@baumstein.eu>',
    to: 'info@baumstein.eu',
    replyTo: email,
    subject: `New enquiry — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      `Interested in: ${interest || '—'}`,
      '',
      message,
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
      <p><strong>Phone:</strong> ${escape(phone || '—')}</p>
      <p><strong>Interested in:</strong> ${escape(interest || '—')}</p>
      <br>
      <p>${escape(message).replace(/\n/g, '<br>')}</p>
    `,
  });

  return res.status(200).json({ ok: true });
};
