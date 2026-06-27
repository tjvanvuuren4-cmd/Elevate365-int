import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const maxChars = 2500;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const remainingChars = maxChars - form.message.length;

  return (
    <main
      className="relative min-h-screen overflow-hidden py-24 px-4 sm:px-6 lg:px-8 text-white"
      style={{
        background: "linear-gradient(180deg,#24163d 0%,#1b132d 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-purple-400/20 bg-white/5 p-8 shadow-xl backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
                Contact Us
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl text-white">
                Let's discuss your business technology needs.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/75">
                Whether you need managed IT support, Microsoft 365 assistance,
                cybersecurity solutions or cloud services, our team is ready to
                help.
              </p>

              <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaborating on business technology support"
                  className="h-72 w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-6 py-5 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
                    Elevate365
                  </p>
                  <p className="mt-2 max-w-xl text-lg font-semibold">
                    Helping businesses stay secure, productive and connected
                    through modern technology solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky top-24 rounded-[2rem] border border-purple-400/20 bg-white/5 p-8 shadow-lg backdrop-blur-xl">
              <div className="mb-6 flex items-start gap-3 rounded-3xl bg-white/10 p-4 text-purple-200">
                <MapPin className="h-5 w-5 shrink-0 mt-1" />
                <p className="text-sm font-semibold leading-7">
                  Free IT Assessment
                  <br />
                  <span className="font-normal text-white/75">
                    Tell us about your business and one of our consultants will
                    recommend the right technology solution.
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Business Consultation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    Complete the form and we'll contact you to discuss your
                    technology requirements and recommend the best solution.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">
                    What we need
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white/70">
                    <li>Company Name</li>
                    <li>Contact Person</li>
                    <li>Business Email</li>
                    <li>IT Requirements</li>
                    <li>Preferred Contact Method</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">
                    Why contact us?
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white/70">
                    <li>Managed IT Services</li>
                    <li>Microsoft 365</li>
                    <li>IT Consulting</li>
                    <li>Cybersecurity Solutions</li>
                    <li>Cloud Services</li>
                    <li>Business Continuity Planning</li>
                    <li>Free IT Assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-purple-400/20 bg-white/5 p-8 shadow-lg backdrop-blur-xl">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
          >
            <input
              type="hidden"
              name="access_key"
              value="e29308a8-b32f-4325-bf07-859b02bed7ff"
            />

            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Send us a Message
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Complete the form and we'll respond as soon as possible.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-white">
                  Company Name *
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-purple-400/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-purple-300 focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Your company name"
                  />
                </label>

                <label className="block text-sm font-medium text-white">
                  Business Email *
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-purple-400/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-purple-300 focus:ring-2 focus:ring-purple-400/20"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-white">
                  Phone Number
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-purple-400/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-purple-300 focus:ring-2 focus:ring-purple-400/20"
                    placeholder="+2778 673 3552"
                  />
                </label>

                <label className="block text-sm font-medium text-white">
                  Service Required *
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-purple-400/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-purple-300 focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Managed IT, Microsoft 365, Cybersecurity..."
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-white">
                Tell us about your business, current IT environment or how we
                can assist you. *
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={maxChars}
                  rows={6}
                  className="mt-2 w-full rounded-3xl border border-purple-400/20 bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-purple-300 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="Tell us a bit about your IT needs or questions"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/60">
                  {remainingChars} characters remaining
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                    boxShadow: "0 18px 45px rgba(124,58,237,0.35)",
                  }}
                >
                  Request Free IT Assessment
                </button>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-purple-400/20 bg-white/5 p-6 shadow-sm">
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
                    Why Choose Elevate365?
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Speak with our technology specialists to discuss managed IT
                    services, cybersecurity, Microsoft 365, cloud solutions or
                    ongoing business support.
                  </p>
                </div>

                <div className="space-y-3 rounded-3xl bg-black/20 p-5">
                  <h3 className="text-base font-semibold text-white">
                    Quick Contact Details
                  </h3>
                  <p className="text-sm text-white/70">
                    Phone: +2778 673 3552
                  </p>
                  <p className="text-sm text-white/70">
                    Email: info@elevate365.co.za
                  </p>
                </div>

                <div className="space-y-3 rounded-3xl bg-black/20 p-5">
                  <h3 className="text-base font-semibold text-white">
                    What happens next?
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/70">
                    <li>We review your request within one business day.</li>
                    <li>A team member will contact you with guidance.</li>
                    <li>We discuss your business requirements.</li>
                    <li>
                      We recommend the best technology solution for your
                      business.
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </form>
        </section>
      </div>
    </main>
  );
}