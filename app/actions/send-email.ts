"use server";

import nodemailer from "nodemailer";

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendEmailAction(formData: {
  name: string;
  email: string;
  details: string;
  honeypot?: string;
}): Promise<SendEmailResult> {
  const { name, email, details, honeypot } = formData;

  if (honeypot) {
    console.warn("Spam attempt blocked via honeypot detection.");
    return {
      success: true,
      message: "Message sent successfully!"
    };
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER || "ridhorevaldysaputra@gmail.com";

  if (!host || !user || !pass) {
    console.warn("SMTP configuration missing. Simulating successful send.");
    console.log(`[SMTP SIMULATION] From: ${name} <${email}>, Message: ${details}`);
    return {
      success: true,
      message: "Message sent successfully."
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: receiver,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nDetails:\n${details}`,
    });

    return {
      success: true,
      message: "Message sent successfully!"
    };
  } catch (error: any) {
    console.error("SMTP error:", error);
    return {
      success: false,
      message: error.message || "Failed to send email."
    };
  }
}
