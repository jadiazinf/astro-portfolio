import type { APIRoute } from "astro";
import { Resend } from "resend";
import { StatusCodes } from "http-status-codes";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Portafolio web <onboarding@resend.dev>",
      to: "jadiaz.inf@gmail.com",
      subject: body.subject,
      html: `
        <table style="width:100%; max-width:600px; margin:auto; font-family:Arial, sans-serif; border-collapse:collapse; border:1px solid #e0e0e0;">
          <tr style="background-color:#1e293b; color:#ffffff;">
            <td style="padding:20px;">
              <h2 style="margin:0;">Nuevo mensaje desde tu portafolio</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:20px;">
              <p><strong>Nombre:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="background-color:#f9f9f9; padding:15px; border-radius:5px;">${body.message}</p>
            </td>
          </tr>
          <tr style="background-color:#f1f5f9;">
            <td style="padding:15px; text-align:center; font-size:12px; color:#64748b;">
              Este correo fue enviado desde el formulario de contacto de tu portafolio como desarrollador.
            </td>
          </tr>
        </table>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: StatusCodes.OK,
    });
  } catch (error) {
    console.error("error sending email:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
