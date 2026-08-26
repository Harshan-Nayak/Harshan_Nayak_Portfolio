"use client";

import React, { useState } from "react";
import { usePortfolioStore } from "../ConvexClientProvider";

export default function Contact() {
  const store = usePortfolioStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Agentic AI / Full Stack Opportunity");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    try {
      // 1. Try sending directly to live Convex database via HTTP API / Client if configured
      const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
      if (convexUrl && typeof window !== "undefined") {
        try {
          await fetch(`${convexUrl}/api/mutation`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              path: "contacts:submit",
              args: {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim() || undefined,
                subject: subject.trim(),
                message: message.trim(),
              },
            }),
          });
        } catch (convexErr) {
          console.log("Live Convex sync note:", convexErr);
        }
      }

      // 2. Also update local reactive store
      if (store) {
        store.submitContact({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          subject: subject.trim(),
          message: message.trim(),
        });
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 bg-white">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="bg-white border-2 border-black rounded-[32px] p-8 md:p-12 text-center mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black rounded-full text-xs font-bold text-black mb-4 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-black leading-tight">
            Let&#39;s Build Something <span className="text-black">Amazing</span>
          </h2>
          <p className="mt-3 text-black max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Have a project or opportunity in mind? Reach out and let&#39;s discuss how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Direct Contact Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Email Card */}
            <a
              href="mailto:harshan2390@gmail.com"
              className="flex items-center gap-4 bg-white border-2 border-black rounded-3xl p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-white border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-black">Email Me</p>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">harshan2390@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/917989628048?text=Hi%20Harshan%2C%20I&#39;d%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border-2 border-black rounded-3xl p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-white border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.705-.705-2.812-2.45-2.897-2.564-.085-.114-.689-.915-.689-1.745s.434-1.238.587-1.408c.153-.17.334-.213.447-.213.112 0 .225.001.323.006.104.005.244-.04.382.291.144.344.49 1.192.533 1.28.043.088.072.19.014.305-.058.115-.088.188-.175.291-.087.103-.183.23-.261.309-.09.09-.184.188-.079.369.105.181.468.772 1.004 1.249.691.614 1.274.805 1.455.895.181.09.288.077.394-.044.106-.121.454-.528.576-.708.121-.18.244-.15.408-.09.164.06 1.042.492 1.22.582.179.09.297.135.341.21.044.075.044.436-.1.841zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.982-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-black">WhatsApp Direct</p>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">+91 7989628048</p>
              </div>
            </a>

            {/* Location & Social */}
            <div className="bg-white border-2 border-black rounded-3xl p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-sm font-bold text-black mb-2">Location &amp; Work Mode</p>
              <p className="text-xs text-zinc-700">Noida, Uttar Pradesh (On-site @ HCLSoftware)</p>
              <p className="text-xs text-zinc-700 mt-1">Open to Agentic AI &amp; Full Stack roles</p>

              <div className="flex gap-2 mt-4 pt-4 border-t border-zinc-200">
                <a
                  href="https://github.com/Harshan-Nayak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center rounded-full bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/harshan-nayak-020754285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center rounded-full border-2 border-black text-black text-xs font-bold hover:bg-black hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white border-2 border-black rounded-[32px] p-7 md:p-9 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-black mb-2">Message Transmitted!</h3>
                <p className="text-sm text-zinc-700 mb-6">
                  Thank you for reaching out. Harshan will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border-2 border-black font-bold text-xs hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-black mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-white text-black text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-white text-black text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-black mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-white text-black text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-black mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-white text-black text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold text-black mb-1.5">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the project or role scope..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-white text-black text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-black text-white font-bold text-sm hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
