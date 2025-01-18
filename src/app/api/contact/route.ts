import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("Requête reçue");
    const { name, email, message } = await req.json();
    console.log("Données reçues :", { name, email, message });

    if (!name || !email || !message) {
      console.log("Validation échouée : champs manquants");
      return NextResponse.json(
        { message: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    console.log("Configuration de Nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Envoi de l'e-mail...");
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("E-mail envoyé avec succès !");
    return NextResponse.json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur dans l'API :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'e-mail." },
      { status: 500 }
    );
  }
}