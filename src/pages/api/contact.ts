import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  let body: { name?: string; email?: string; message?: string; service?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Ungültiger Request.' }), {
      status: 400,
      headers,
    });
  }

  const { name, email, message, service } = body;

  if (!name || !email || !message || !service) {
    return new Response(
      JSON.stringify({ success: false, error: 'Alle Felder sind erforderlich.' }),
      { status: 400, headers }
    );
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'MB-Solutions Kontakt <kontakt@mb-solutions.biz>',
      to: 'mbourkiah@mb-solutions.biz',
      replyTo: email,
      subject: `Neue Anfrage von ${name} – ${service}`,
      html: `
        <div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
          <div style="background:#7F77DD;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:white;margin:0;font-size:20px;font-weight:600;">Neue Kontaktanfrage</h1>
            <p style="color:rgba(255,255,255,0.75);margin:4px 0 0;font-size:14px;">MB-Solutions · Kontaktformular</p>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:32px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:10px 16px 10px 0;color:#6b7280;width:80px;vertical-align:top;">Name</td>
                <td style="padding:10px 0;font-weight:600;">${name}</td>
              </tr>
              <tr style="background:#f9fafb;">
                <td style="padding:10px 16px 10px 0;color:#6b7280;vertical-align:top;">E-Mail</td>
                <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#7F77DD;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 16px 10px 0;color:#6b7280;vertical-align:top;">Service</td>
                <td style="padding:10px 0;">${service}</td>
              </tr>
            </table>
            <div style="border-top:1px solid #e5e7eb;margin-top:20px;padding-top:20px;">
              <p style="color:#6b7280;font-size:13px;margin:0 0 10px;">Nachricht:</p>
              <p style="margin:0;line-height:1.7;white-space:pre-wrap;font-size:14px;">${message}</p>
            </div>
            <div style="margin-top:28px;">
              <a href="mailto:${email}"
                style="display:inline-block;background:#7F77DD;color:white;padding:10px 22px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                Direkt antworten
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      { status: 500, headers }
    );
  }
};
