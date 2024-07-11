// app/api/sendEmail/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  const { question } = await req.json();

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "Info.impactielts@gmail.com",
      pass: "zjvf qtbd uaaj qtvj",
    },
  });

  // Email options
  const mailOptions = {
    from: 'Info.impactielts@gmail.com',
    to: 'sebe2k04@gmail.com',
    subject: "Need a Doubt - Faq",
    text: `question: ${question}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      {
        status: 500,
      }
    );
  }
}
