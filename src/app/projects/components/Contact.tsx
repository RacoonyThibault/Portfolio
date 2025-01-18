"use client"

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget; // Référence au formulaire soumis
    if (!form) {
      console.error("Formulaire introuvable !");
      return;
    }
  
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    setStatus("loading");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setStatus("success");
        form.reset(); // Réinitialise le formulaire uniquement si `form` est défini
      } else {
        const result = await response.json();
        setStatus(result.message || "Erreur inconnue.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("Erreur de soumission. Veuillez réessayer.");
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-between text-slate-900 bg-slate-100">
      <div></div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">On reste en contact ?</h2>
        <p className="mt-4 p-4 text-center">
          Si vous souhaitez collaborer ou avez un projet en tête, n’hésitez pas
          à me contacter !
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Votre message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Envoyer
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center ${
              status === "success"
                ? "text-green-600"
                : status === "loading"
                ? "text-blue-600"
                : "text-red-600"
            }`}
          >
            {status === "loading"
              ? "Envoi en cours..."
              : status === "success"
              ? "Message envoyé avec succès !"
              : status}
          </p>
        )}
      </div>
      <div className="flex justify-between p-4">
        <p className="text-sm">&copy; Thibault Fregier | 2025</p>
        <div className="flex gap-2">
        <Link
      href="https://x.com/FregierThibault"
      aria-label="Lien vers mon profil Twitter"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-400 text-3xl"
    >
      <FaTwitter aria-hidden="true" />
    </Link>
    <Link
      href="https://www.linkedin.com/in/thibaultfregier/"
      aria-label="Lien vers mon profil LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:text-blue-600 text-3xl"
    >
      <FaLinkedin aria-hidden="true" />
    </Link>
    <Link
      href="https://github.com/RacoonyThibault/"
      aria-label="Lien vers mon profil GitHub"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-900 hover:text-gray-700 text-3xl"
    >
      <FaGithub aria-hidden="true" />
    </Link>
        </div>
      </div>
    </section>
  );
}