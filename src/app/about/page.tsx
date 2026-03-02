'use client'

import Link from "next/link";
import { ImageWithFallback } from "../components/figma/image-with-fallback";
import { ArrowRight, Award, Heart, Target, Shield } from "lucide-react";
import { motion } from "motion/react";

const COACH_IMG = "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb2FjaCUyMG1lbnRvcmluZyUyMHlvdXRofGVufDF8fHx8MTc3MjQ2OTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const TEAM_IMG = "https://images.unsplash.com/photo-1710301431051-ee6923af04aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNwb3J0cyUyMHRlYW0lMjBvdXRkb29yfGVufDF8fHx8MTc3MjQ2OTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const coaches = [
  {
    name: "James Okafor",
    title: "Head Coach & Founder",
    bio: "Former provincial player with 15+ years of coaching experience. Cricket Canada Level 3 certified. James founded Cricket Toronto with a vision of making cricket accessible to every child in the GTA.",
    certs: ["Cricket Canada Level 3", "First Aid Certified", "Safeguarding Lead"],
  },
  {
    name: "Ananya Sharma",
    title: "Senior Coach",
    bio: "Represented Ontario in women's cricket for 6 years. Specializes in batting technique and mental resilience. Ananya brings a warm, encouraging coaching style that kids love.",
    certs: ["Cricket Canada Level 2", "Sport Psychology Certificate", "First Aid Certified"],
  },
  {
    name: "David Chen",
    title: "Youth Development Coach",
    bio: "Former U-19 Canadian squad member. Expert in fast bowling and fielding drills. David is passionate about nurturing young talent and building their confidence on the pitch.",
    certs: ["Cricket Canada Level 2", "Strength & Conditioning", "First Aid Certified"],
  },
  {
    name: "Fatima Al-Rashid",
    title: "Junior Programme Lead",
    bio: "Early childhood education background combined with Cricket Canada coaching certification. Fatima designs our Little Legends curriculum and makes cricket fun for our youngest players.",
    certs: ["Cricket Canada Level 1", "ECE Diploma", "First Aid Certified"],
  },
];

const values = [
  { icon: Heart, title: "Fun First", desc: "We believe children learn best when they're having fun. Every session is designed to be engaging and enjoyable." },
  { icon: Target, title: "Individual Growth", desc: "Every child is different. We track progress and tailor coaching to each player's development stage." },
  { icon: Shield, title: "Safety Always", desc: "All coaches are DBS-checked and First Aid certified. We follow strict safeguarding protocols." },
  { icon: Award, title: "Excellence", desc: "We aim for the highest standards in everything we do — coaching, communication, and community." },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 left-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            About Cricket Toronto
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Meet the passionate team behind Toronto&apos;s most trusted youth cricket academy.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Our Mission
              </span>
              <h2 className="mt-4 mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Every Child Deserves the Chance to Play
              </h2>
              <p className="text-muted-foreground mb-4" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Cricket Toronto was born from a belief that cricket is for everyone. Founded in 2018 by James Okafor, we started with just 12 kids in a local park. Today, we coach over 500 young players across multiple venues in the Greater Toronto Area.
              </p>
              <p className="text-muted-foreground mb-4" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Our philosophy is simple: <strong>fun first, development always</strong>. We create an environment where every child — regardless of ability, background, or experience — feels welcome, safe, and excited to learn.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Beyond the technical skills, we teach resilience, teamwork, and sportsmanship. Many of our players go on to represent school and club teams, but our greatest measure of success is a child who can&apos;t wait to come back next week.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback src={TEAM_IMG} alt="Team" className="rounded-2xl w-full h-[450px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Our Values
            </span>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.1rem" }}>{v.title}</h3>
                <p className="text-muted-foreground mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Our Coaches
            </span>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Meet the Team
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              Every coach is Cricket Canada certified, DBS-checked, and passionate about developing young cricketers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, i) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 sm:h-auto bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem" }}>
                        {coach.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.15rem" }}>{coach.name}</h3>
                    <p className="text-primary mb-3" style={{ fontSize: "0.85rem", fontWeight: 600 }}>{coach.title}</p>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{coach.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {coach.certs.map((cert) => (
                        <span key={cert} className="bg-primary/10 text-primary px-3 py-1 rounded-full" style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.2rem" }}>Child Protection & Safeguarding</h3>
                <p className="text-muted-foreground mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                  The safety and wellbeing of every child is our absolute priority. All coaches undergo comprehensive background checks and are trained in child safeguarding. We follow Cricket Canada&apos;s safeguarding framework and have a dedicated Safeguarding Lead — James Okafor — who can be contacted directly at{" "}
                  <a href="mailto:safeguarding@cricketoronto.ca" className="text-primary hover:underline">safeguarding@cricketoronto.ca</a>.
                  Parental consent is obtained for all photography. Our full safeguarding policy is available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
            Ready to Join Our Cricket Family?
          </h2>
          <p className="text-muted-foreground mt-3 mb-8" style={{ fontSize: "1rem" }}>
            Book a free trial session and let your child experience the Cricket Toronto difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Book a Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;