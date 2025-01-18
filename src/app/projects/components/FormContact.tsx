"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const FormContact = () => {
  const [formStatus, setFormStatus] = useState(""); // Renommé en formStatus pour la gestion locale
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
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

    setFormStatus("Vérification des données...");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("Message envoyé avec succès !");
        form.reset();
      } else {
        const result = await response.json();
        setFormStatus(result.message || "Erreur inconnue.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setFormStatus("Erreur de soumission. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-between text-slate-900 bg-slate-100 mt-12">
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
            className="relative w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin absolute left-1/2 text-3xl" />
                <span className="opacity-0">Envoi en cours...</span>
              </>
            ) : (
              "Envoyer"
            )}
          </button>
        </form>
        {formStatus && (
          <p
            className={`mt-4 text-center ${
              formStatus === "Message envoyé avec succès!"
                ? "text-green-600"
                : formStatus === "Erreur de soumission. Veuillez réessayer."
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {formStatus}
          </p>
        )}
      </div>

      <div className="flex justify-between p-4">
        <p className="text-sm">&copy; Thibault Fregier | 2025</p>
      </div>
    </section>
  );
};

export default FormContact;
