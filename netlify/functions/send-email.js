import nodemailer from 'nodemailer';

export async function handler(event) {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, and message are required.' }),
      };
    }

    const toEmail = process.env.TO_EMAIL || 'singhkunal1642@gmail.com';
    const emailSubject = `🚀 New Portfolio Message from ${name} (${email})`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #06b6d4; margin-bottom: 16px; border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">
          New Message from kunal.dev
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 80px;">From:</td>
            <td style="padding: 8px 0; color: #1e293b;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
        <div style="background-color: #f8fafc; border-left: 4px solid #06b6d4; padding: 16px; border-radius: 4px; margin-top: 16px;">
          <p style="margin: 0; color: #334155; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent from Kunal Singh Portfolio Contact Form
        </p>
      </div>
    `;

    // ─── 1. Brevo (Sendinblue) API ───
    if (process.env.BREVO_API_KEY) {
      const senderEmail = process.env.SENDER_EMAIL || process.env.BREVO_SENDER || 'singhkunal1642@gmail.com';

      const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: `${name} (via Portfolio)`, email: senderEmail },
          to: [{ email: toEmail, name: 'Kunal Singh' }],
          replyTo: { email: email, name: name },
          subject: emailSubject,
          htmlContent,
          textContent: `From: ${name} (${email})\n\nMessage:\n${message}`,
        }),
      });

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json().catch(() => ({}));
        throw new Error(errorData.message || `Brevo API error: ${brevoResponse.status}`);
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, provider: 'brevo' }),
      };
    }

    // ─── 2. Nodemailer (Gmail / Custom SMTP) ───
    const smtpUser = process.env.EMAIL_USER || process.env.SMTP_USER;
    const smtpPass = process.env.EMAIL_PASS || process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const transportConfig = process.env.SMTP_HOST
        ? {
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: { user: smtpUser, pass: smtpPass },
          }
        : {
            service: 'gmail',
            auth: { user: smtpUser, pass: smtpPass },
          };

      const transporter = nodemailer.createTransport(transportConfig);

      await transporter.sendMail({
        from: `"${name} (via Portfolio)" <${smtpUser}>`,
        to: toEmail,
        replyTo: `"${name}" <${email}>`,
        subject: emailSubject,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
        html: htmlContent,
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, provider: 'nodemailer' }),
      };
    }

    // ─── No credentials configured ───
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error:
          'Email service credentials not found. Please set BREVO_API_KEY (for Brevo) or EMAIL_USER & EMAIL_PASS (for Nodemailer) in Netlify Environment Variables.',
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: err.message || 'Internal server error while sending email.',
      }),
    };
  }
}
