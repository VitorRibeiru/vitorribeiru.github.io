import nodemailer from 'nodemailer';

export async function POST(request) {
  const { firstname, lastname, email, phone, service, message } = await request.json();

  if (!firstname || !email || !message) {
    return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes.' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contato do Portfólio" <${process.env.EMAIL_USER}>`,
      replyTo: email,
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

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail.' }), { status: 500 });
  }
}
