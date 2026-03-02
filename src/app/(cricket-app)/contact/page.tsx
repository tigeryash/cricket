'use client'

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";

const TORONTO_IMG = "https://images.unsplash.com/photo-1729683412778-07eb71ae9aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzI0Njk1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    programme: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <SectionHeading img={TORONTO_IMG} title="Get in Touch" description="Ready to book a trial? Have a question? We&apos;d love to hear from you." />
     

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem" }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Location", value: "Serving Toronto & the GTA\nMain venue: Sunnybrook Park" },
                  { icon: Phone, label: "Phone", value: "(416) 555-0123" },
                  { icon: Mail, label: "Email", value: "info@cricketoronto.ca" },
                  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9 AM – 6 PM\nSat: 8 AM – 3 PM" },
                  { icon: Instagram, label: "Instagram", value: "@cricketoronto" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground" style={{ fontSize: "0.8rem", fontWeight: 500 }}>{label}</div>
                      <div className="whitespace-pre-line" style={{ fontSize: "0.95rem", fontWeight: 500 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#f8faf8] rounded-2xl">
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.05rem" }}>Prefer to Call?</h3>
                <p className="text-muted-foreground mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                  We&apos;re happy to chat! Call us at <a href="tel:4165550123" className="text-primary hover:underline" style={{ fontWeight: 600 }}>(416) 555-0123</a> during office hours, or leave a voicemail anytime and we&apos;ll call you back within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem" }}>Thank You!</h3>
                  <p className="text-muted-foreground mt-3 max-w-md mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                    We&apos;ve received your enquiry and will get back to you within 24 hours. We can&apos;t wait to welcome your child to Cricket Toronto!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ parentName: "", email: "", phone: "", childName: "", childAge: "", programme: "", message: "" }); }}
                    className="mt-6 text-primary hover:underline"
                    style={{ fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.35rem" }}>
                    Book a Free Trial or Enquire
                  </h2>
                  <p className="text-muted-foreground mb-6" style={{ fontSize: "0.9rem" }}>
                    Fill in the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Parent/Guardian Name *</label>
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="(416) 555-0123"
                        />
                      </div>
                      <div>
                        <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Child&apos;s Name *</label>
                        <input
                          type="text"
                          name="childName"
                          value={form.childName}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Child's first name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Child&apos;s Age *</label>
                        <input
                          type="number"
                          name="childAge"
                          value={form.childAge}
                          onChange={handleChange}
                          required
                          min="4"
                          max="18"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Age"
                        />
                      </div>
                      <div>
                        <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Interested In</label>
                        <select
                          name="programme"
                          value={form.programme}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        >
                          <option value="">Select a programme</option>
                          <option value="trial">Free Trial Session</option>
                          <option value="little-legends">Little Legends (5–8)</option>
                          <option value="rising-stars">Rising Stars (9–12)</option>
                          <option value="elite">Elite Academy (13–16)</option>
                          <option value="private">Private Coaching</option>
                          <option value="camp">Holiday Camp</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.85rem", fontWeight: 500 }}>Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your child's experience level, any questions, or anything else we should know..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.02]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                    >
                      <Send className="w-4 h-4" /> Send Enquiry
                    </button>
                    <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>
                      By submitting this form, you agree to our Privacy Policy. We&apos;ll only use your information to respond to your enquiry.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl overflow-hidden bg-gray-200 h-[300px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.1rem" }}>Sunnybrook Park, Toronto</p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: "0.9rem" }}>1132 Leslie St, North York, ON M3C 2J6</p>
              <a
                href="https://maps.google.com/?q=Sunnybrook+Park+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary hover:underline"
                style={{ fontWeight: 600, fontSize: "0.9rem" }}
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;