import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end("Método não permitido");
    }

    const { firstname, lastname, email, phone, service, message } = req.body;

    if (!firstname || !email || !message) {
        return res.status(400).json({ error: "Campos obrigatórios ausentes." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Contato do Portfólio" <${process.env.EMAIL_USER}>`, // seu email autorizado
            replyTo: email, // email do cliente, para responder diretamente
            to: process.env.EMAIL_TO,
            subject: `Novo contato de ${firstname} ${lastname}`,
            html: `
    <h2>Nova mensagem recebida pelo formulário:</h2>
    <p><strong>Nome:</strong> ${firstname} ${lastname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contato:</strong> ${phone}</p>
    <p><strong>Serviço desejado:</strong> ${service}</p>
    <p><strong>Mensagem:</strong><br/>${message}</p>
  `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return res.status(500).json({ error: "Erro ao enviar e-mail." });
    }

    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)
}
