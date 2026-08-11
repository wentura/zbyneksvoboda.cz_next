// * Klientská komponenta kvůli formulářovému stavu.
"use client";

import { useEffect, useRef, useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  website: "",
  problemType: "",
  whyNow: "",
  budget: "",
  discussion: "",
  company: "",
};

export default function ContactForm({ form }) {
  const [formData, setFormData] = useState(emptyForm);

  const formStartRef = useRef(null);
  useEffect(() => {
    if (!formStartRef.current) {
      formStartRef.current = Date.now();
    }
  }, []);

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
        body: JSON.stringify({
          ...formData,
          formStartedAt: formStartRef.current,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: form.successMessage,
        });
        setFormData(emptyForm);
        formStartRef.current = Date.now();
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message: errorData.message || form.errorGeneric,
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: form.errorGeneric,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectClassName =
    "w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-200";

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
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">{form.honeypotLabel}</label>
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
              {form.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={selectClassName}
              placeholder={form.namePlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              {form.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={selectClassName}
              placeholder={form.emailPlaceholder}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div>
            <label
              htmlFor="problemType"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              {form.problemTypeLabel}
            </label>
            <select
              id="problemType"
              name="problemType"
              value={formData.problemType}
              onChange={handleInputChange}
              required
              className={selectClassName}
            >
              {(form.problemTypeOptions || []).map((option) => (
                <option key={option.value || "empty"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              {form.budgetLabel}
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={selectClassName}
            >
              {(form.budgetOptions || []).map((option) => (
                <option key={option.value || "empty"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-left">
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-200 mb-2 text-left"
            >
              {form.websiteLabel}
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className={selectClassName}
              placeholder={form.websitePlaceholder}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="discussion"
            className="block text-sm font-medium text-gray-200 mb-2 text-left"
          >
            {form.messageLabel}
          </label>
          <textarea
            id="discussion"
            name="discussion"
            value={formData.discussion}
            onChange={handleInputChange}
            required
            rows={4}
            className={selectClassName}
            placeholder={form.messagePlaceholder}
          />
        </div>

        <div>
          <label
            htmlFor="whyNow"
            className="block text-sm font-medium text-gray-200 mb-2 text-left"
          >
            {form.whyNowLabel}
          </label>
          <textarea
            id="whyNow"
            name="whyNow"
            value={formData.whyNow}
            onChange={handleInputChange}
            required
            rows={3}
            className={selectClassName}
            placeholder={form.whyNowPlaceholder}
          />
        </div>

        <div className="flex items-start space-x-3">
          <label htmlFor="gdpr" className="text-sm text-gray-400 text-left">
            {form.gdprNote}
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="ctaBtnSecondaryDark w-full"
        >
          {isSubmitting ? form.submitSending : form.submitIdle}
        </button>
      </form>
    </div>
  );
}
