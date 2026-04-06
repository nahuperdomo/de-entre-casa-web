import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { nombre, telefono, tipoEvento, cantidadInvitados, fecha, mensaje } =
      parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"De Entre Casa Gourmet Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nueva consulta de ${nombre} - ${tipoEvento}`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Nombre:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${nombre}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Teléfono:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${telefono}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Tipo de evento:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tipoEvento}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Invitados:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${cantidadInvitados}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Fecha:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fecha}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Mensaje:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${mensaje || "—"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
