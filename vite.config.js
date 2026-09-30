import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'dev-send-email-api',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const { name, email, message } = JSON.parse(body || '{}');
                const apiKey = env.BREVO_API_KEY;

                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'BREVO_API_KEY not found in .env' }));
                  return;
                }

                const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey,
                  },
                  body: JSON.stringify({
                    sender: {
                      name: `${name} (via Portfolio)`,
                      email: env.SENDER_EMAIL || 'singhkunal1642@gmail.com',
                    },
                    to: [
                      {
                        email: env.TO_EMAIL || 'singhkunal1642@gmail.com',
                        name: 'Kunal Singh',
                      },
                    ],
                    replyTo: { email, name },
                    subject: `🚀 New Portfolio Message from ${name} (${email})`,
                    htmlContent: `
                      <div style="font-family: Arial, sans-serif; padding: 20px;">
                        <h2>New Message from kunal.dev</h2>
                        <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
                        <p><strong>Message:</strong></p>
                        <blockquote style="background: #f1f5f9; padding: 12px; border-left: 4px solid #06b6d4;">${message}</blockquote>
                      </div>
                    `,
                  }),
                });

                const data = await brevoRes.json().catch(() => ({}));
                res.statusCode = brevoRes.status;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        },
      },
    ],
  };
});
