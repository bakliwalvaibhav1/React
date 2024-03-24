import "dotenv/config";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const req = await request.json();

  const { name, email, subject, message } = req;

  // Basic server-side validation flag
  let missingFields = false;
  if (!name || !email || !subject || !message) missingFields = true;

  if (missingFields) {
    return NextResponse.json({ error: "All fields are required", missingFields }, { status: 400 });
  }

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "smtp",
    // host: process.env.SMTP_HOST, // Change this to your mail server's hostname
    host: "smtp.hostinger.in", // Change this to your mail server's hostname
    port: 465, // Change this to your mail server's port
    secure: true, // Use true for TLS
    auth: {
      user: "support@vaibhavbakliwal.com", // Change this to your email address
      pass: process.env.REACT_APP_EMAIL_PASS, // Change this to your email password
    },
  });

  // Define email options
  const mailOptions = {
    from: {
      name: "My Website",
      address: "support@vaibhavbakliwal.com",
    }, // Sender address
    to: "bakliwal.vaibhav9@gmail.com", // Receiver address
    subject: `${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    // Respond with an error
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
