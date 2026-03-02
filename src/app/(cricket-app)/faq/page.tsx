'use client'

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../components/section-heading";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        q: "Are beginners welcome?",
        a: "Absolutely! We welcome children of all abilities. Our Little Legends programme is specifically designed for complete beginners aged 5–8, and our Rising Stars programme welcomes beginners aged 9–12. Every child starts somewhere, and our coaches are experienced in introducing cricket from scratch.",
      },
      {
        q: "How do I book a free trial session?",
        a: "Simply head to our Contact page and fill in the enquiry form, or call us at (416) 555-0123. We'll arrange a trial session at the next available date so your child can experience a session before committing. There's absolutely no pressure to sign up.",
      },
      {
        q: "What age groups do you cater for?",
        a: "We coach children from age 5 through to 16. Our programmes are split into three age groups: Little Legends (5–8), Rising Stars (9–12), and Elite Academy (13–16). We also offer private coaching for all ages.",
      },
      {
        q: "How do I know which programme is right for my child?",
        a: "Age is the primary guide, but skill level matters too. If you're unsure, book a free trial and our coaches will assess your child during the session and recommend the best fit. We're always happy to chat — just give us a call.",
      },
    ],
  },
  {
    title: "Practical Questions",
    faqs: [
      {
        q: "What equipment does my child need?",
        a: "Nothing! We provide all cricket equipment including bats, balls, stumps, and protective gear. Your child just needs comfortable sportswear (tracksuit bottoms or shorts) and trainers/running shoes. We recommend bringing a water bottle too.",
      },
      {
        q: "What happens if it rains?",
        a: "We have a wet weather policy. If sessions need to be cancelled due to rain or unsafe conditions, we'll notify parents by 7:30 AM via email and our WhatsApp group. Cancelled sessions are always made up at a later date — you never lose out.",
      },
      {
        q: "Where do sessions take place?",
        a: "Our main training ground is Sunnybrook Park, Toronto. We also use facilities at High Park for special events. For private coaching, we can arrange sessions at various locations across the GTA to suit your convenience.",
      },
      {
        q: "Can I stay and watch the sessions?",
        a: "Parents are very welcome to stay and watch! We have a designated viewing area. We just ask that parents don't coach from the sidelines, as this can be confusing for the children. Our coaches are always happy to chat after the session about your child's progress.",
      },
      {
        q: "Is there parking available?",
        a: "Yes, Sunnybrook Park has free parking within walking distance of our training area. We'll send detailed directions and a map when you register.",
      },
    ],
  },
  {
    title: "Safety & Policies",
    faqs: [
      {
        q: "Are the coaches qualified and background-checked?",
        a: "Yes, every one of our coaches is Cricket Canada certified and has undergone a comprehensive background check. All coaches are also First Aid certified and trained in child safeguarding protocols. Our Safeguarding Lead is James Okafor.",
      },
      {
        q: "What is your safeguarding policy?",
        a: "We take child protection extremely seriously. We follow Cricket Canada's safeguarding framework, all coaches are DBS-checked, and we have a dedicated Safeguarding Lead. Our full policy is available upon request. If you have any concerns, contact our Safeguarding Lead at safeguarding@cricketoronto.ca.",
      },
      {
        q: "Do you photograph children during sessions?",
        a: "We may take photos for our website and social media, but only with explicit parental consent. A photography consent form is included in the registration process. If you prefer your child not to be photographed, we absolutely respect that.",
      },
      {
        q: "What is your cancellation and refund policy?",
        a: "If you need to cancel, we offer a full refund if you notify us more than 14 days before the term starts. Within 14 days, we offer a 50% refund or the option to transfer to the next term. If your child misses sessions during the term, we can arrange make-up sessions where possible.",
      },
    ],
  },
  {
    title: "Costs & Payment",
    faqs: [
      {
        q: "How much do sessions cost?",
        a: "Little Legends (ages 5–8): $180/term. Rising Stars (ages 9–12): $220/term. Elite Academy (ages 13–16): $280/term. Private coaching: $75/session or $650 for 10. All terms are 10 weeks. Sibling discounts are available — ask us for details!",
      },
      {
        q: "How do I pay?",
        a: "We accept e-Transfer, credit card, and debit payments. Payment is due before the start of term. We can also arrange a payment plan if needed — just let us know and we'll work something out.",
      },
      {
        q: "Are there any sibling discounts?",
        a: "Yes! We offer a 10% discount on the second child and 15% on the third or more. The discount applies to term bookings and camps. Contact us to arrange multi-child registration.",
      },
    ],
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary/20 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-muted-foreground" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <SectionHeading title="Frequently Asked Questions" description="Everything parents ask us — answered. Can&apos;t find what you need? Just get in touch." />

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.35rem" }}>
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}>
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mt-3 mb-8" style={{ fontSize: "1rem" }}>
            We&apos;re always happy to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;