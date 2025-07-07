"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    discussion: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
        body: JSON.stringify(formData),
      });

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
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.message || "Něco se pokazilo. Zkuste to prosím znovu.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Něco se pokazilo. Zkuste to prosím znovu.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto text-white">
      {submitStatus && (
        <div
          className={`my-6 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-200"
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
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-200"
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
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-200"
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
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-200"
            placeholder="Popište, s čím vám mohu pomoci..."
          />
        </div>

        <div className="flex items-start space-x-3">
          <label htmlFor="gdpr" className="text-sm text-gray-300">
            Odesláním zprávy souhlasíte s následnou naší komunikací.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-400 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Odesílám..." : "Odeslat zprávu..."}
        </button>
      </form>
    </div>
  );
}
