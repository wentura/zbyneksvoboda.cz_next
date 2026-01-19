// * Klientská komponenta kvůli formulářovému stavu.
"use client";

// * Importy React hooků pro práci s formulářem.
import { useEffect, useRef, useState } from "react";

// * Export kontaktního formuláře s odesláním na API.
export default function ContactForm() {
  // * Stav formuláře včetně honeypotu.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    discussion: "",
    company: "", // honeypot
  });

  // * Timestamp pro detekci příliš rychlého odeslání.
  const formStartRef = useRef(null);
  useEffect(() => {
    // * Nastavit čas startu formuláře pouze jednou.
    if (!formStartRef.current) {
      formStartRef.current = Date.now();
    }
  }, []);

  // * Stav odesílání a výsledku.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // * Zpracování změn ve formuláři.
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // * Odeslání formuláře na API.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formStartedAt: formStartRef.current,
        }),
      });

      // * Úspěšná odpověď z API.
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Děkuji za zprávu! Budu Vás kontaktovat co nejdříve.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          discussion: "",
          company: "",
        });
        formStartRef.current = Date.now();
      } else {
        // * Zpracování chybové odpovědi.
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.message || "Něco se pokazilo. Zkuste to prosím znovu.",
        });
      }
    } catch (error) {
      // * Síťová nebo neočekávaná chyba.
      setSubmitStatus({
        type: "error",
        message: "Něco se pokazilo. Zkuste to prosím znovu.",
      });
    } finally {
      // * Reset stavu odesílání.
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto text-white">
      {/* * Zobrazení stavu odeslání */}
      {submitStatus && (
        <div
          className={`my-6 p-4 rounded-lg ${
            // * Barva boxu podle typu výsledku.
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* * Honeypot: skrytý pro uživatele, ale přítomný v DOM */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 text-left">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Jméno a příjmení *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-200"
              placeholder="Vaše jméno"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-200"
              placeholder="vas@email.cz"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-left">
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-200 mb-2 text-left"
            >
              Váš web (volitelné)
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-200"
              placeholder="vasweb.cz"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="discussion"
            className="block text-sm font-medium text-gray-200 mb-2 text-left"
          >
            S čím Vás můžu pomoci? *
          </label>
          <textarea
            id="discussion"
            name="discussion"
            value={formData.discussion}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-200"
            placeholder="Popište, s čím vám mohu pomoci..."
          />
        </div>

        <div className="flex items-start space-x-3">
          <label htmlFor="gdpr" className="text-sm text-gray-300">
            Odesláním zprávy souhlasíte s naší následnou komunikací.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          // * className="w-full bg-white text-modra2 py-3 px-6 font-bold hover:underline underline-offset-4 decoration-2 decoration-modra2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          className="heroBtn text-center mx-auto w-full"
        >
          {/* * Text tlačítka se mění při odesílání */}
          {isSubmitting ? "Odesílám..." : "Odeslat zprávu..."}
        </button>
      </form>
    </div>
  );
}
