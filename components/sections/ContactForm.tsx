"use client";

import { useState } from "react";
import { sendEmailAction } from "@/app/actions/send-email";
import { AnimateSection } from "@/components/ui/AnimateSection";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", details: "", honeypot: "" });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const [activeField, setActiveField] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);
    try {
      const result = await sendEmailAction(formData);
      setFeedback(result);
      if (result.success) {
        setFormData({ name: "", email: "", details: "", honeypot: "" });
      }
    } catch {
      setFeedback({ success: false, message: "An unexpected error occurred." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-900 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimateSection className="max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start a project collaboration.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-md leading-relaxed text-slate-300">
            Tell me about your product requirements and target timeline. I will outline a recommended system architecture and provide a response within two business days.
          </p>
        </AnimateSection>
        
        <AnimateSection variant="scaleUp" className="mt-12 text-left bg-white text-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl max-w-xl mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {feedback && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-4 rounded-lg text-sm font-semibold ${feedback.success ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}
              >
                {feedback.message}
              </motion.div>
            )}
            
            {/* Honeypot field - visually hidden to prevent spam */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setActiveField("name")}
                onBlur={() => setActiveField(null)}
                className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:bg-white focus:outline-none"
                placeholder="Your name"
                required
              />
              {!shouldReduceMotion && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: activeField === "name" ? 1 : 0,
                    opacity: activeField === "name" ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-slate-900 w-full origin-left"
                />
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setActiveField("email")}
                onBlur={() => setActiveField(null)}
                className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:bg-white focus:outline-none"
                placeholder="you@company.com"
                required
              />
              {!shouldReduceMotion && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: activeField === "email" ? 1 : 0,
                    opacity: activeField === "email" ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-slate-900 w-full origin-left"
                />
              )}
            </div>

            {/* Details Textarea */}
            <div className="relative">
              <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-500">Project Details</label>
              <textarea
                id="details"
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                onFocus={() => setActiveField("details")}
                onBlur={() => setActiveField(null)}
                className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:bg-white focus:outline-none"
                placeholder="Describe what you want to build"
                required
              ></textarea>
              {!shouldReduceMotion && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: activeField === "details" ? 1 : 0,
                    opacity: activeField === "details" ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-slate-900 w-full origin-left"
                />
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
              <motion.button
                type="submit"
                disabled={isSending}
                className="relative overflow-hidden flex-1 inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800 transition-colors disabled:opacity-50 cursor-pointer group/btn"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2 relative z-10">
                  {feedback?.success && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-4 w-4 text-emerald-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                  )}
                  <span>
                    {isSending ? "Sending..." : feedback?.success ? "Message Sent" : "Send Message"}
                  </span>
                  {!isSending && !feedback?.success && !shouldReduceMotion && (
                    <span className="inline-block transform transition-transform duration-200 group-hover/btn:translate-x-1">
                      →
                    </span>
                  )}
                </div>
              </motion.button>
              
              <a
                href="https://wa.me/6285179726816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors gap-2"
                id="form_whatsapp_link"
              >
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </form>
        </AnimateSection>
      </div>
    </section>
  );
}
