// app/api/sendEmail/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone } = await req.json();

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
    to: 'enquiries.impactenglish@gmail.com',
    subject: "New Consultation Request",
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}`,
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
