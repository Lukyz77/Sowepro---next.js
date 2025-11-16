import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { user_name, user_email, message } = await req.json();

    if (!user_name || !user_email || !message) {
      return new Response(
        JSON.stringify({ ok: false, message: "Chybí údaje ve formuláři." }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      authMethod: "LOGIN",
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Sowepro Web" <${process.env.SMTP_FROM}>`,
      to: process.env.SEND_TO,
      replyTo: user_email,
      subject: `Nová zpráva z webu – ${user_name}`,
      text: 
        `Jméno: ${user_name}
        E-mail: ${user_email}

        Zpráva:
        ${message}`,
      html: 
      `<h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${user_name}</p>
        <p><strong>E-mail:</strong> ${user_email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Chyba API:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Chyba serveru při odesílání emailu.",
      }),
      { status: 500 }
    );
  }
}
