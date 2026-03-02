'use client'

import Link from 'next/link'
import { ImageWithFallback } from "./components/figma/image-with-fallback";
import {
  Shield, Trophy, Users, Star, ChevronRight, Calendar,
  MapPin, Clock, ArrowRight, CheckCircle2, Quote
} from "lucide-react";
import { motion } from "motion/react";

const HERO_IMG = "https://images.unsplash.com/photo-1717138751812-e29947bc1647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29hY2hpbmclMjBjaGlsZHJlbiUyMHRyYWluaW5nfGVufDF8fHx8MTc3MjQ2OTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const ACTION_IMG = "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0c21hbiUyMGFjdGlvbiUyMHNob3R8ZW58MXx8fHwxNzcyNDQzNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const KIDS_IMG = "https://images.unsplash.com/photo-1765894518300-c77d5a9d38a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMHNwb3J0cyUyMG91dGRvb3JzfGVufDF8fHx8MTc3MjQ2OTU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const FIELD_IMG = "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkJTIwZ3Jhc3N8ZW58MXx8fHwxNzcyNDY5NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const stats = [
  { number: "500+", label: "Young Players Trained" },
  { number: "8", label: "Years Coaching" },
  { number: "12", label: "Certified Coaches" },
  { number: "98%", label: "Parent Satisfaction" },
];

const features = [
  { icon: Shield, title: "Safe Environment", desc: "DBS-checked coaches. Child protection policy in place. Your child's safety is our #1 priority." },
  { icon: Trophy, title: "Skill Development", desc: "Progressive coaching from basics to advanced techniques. Every child improves at their own pace." },
  { icon: Users, title: "Build Confidence", desc: "Teamwork, leadership, and social skills — cricket teaches more than just sport." },
  { icon: Star, title: "Qualified Coaches", desc: "Cricket Canada certified coaches with professional playing experience." },
];

const testimonials = [
  {
    name: "Sarah M.",
    child: "Mother of Aiden, age 8",
    quote: "My son was shy and reluctant to try new sports. After just one term with Cricket Toronto, he's confident, active, and can't wait for Saturday mornings. The coaches are amazing with kids.",
  },
  {
    name: "Raj P.",
    child: "Father of Priya, age 11",
    quote: "The level of professionalism is outstanding. The coaches genuinely care about each child's development. Priya's technique has improved dramatically and she's made lifelong friends.",
  },
  {
    name: "Michelle T.",
    child: "Mother of twins, age 9",
    quote: "Finding a sport both my kids love was a challenge — until we found Cricket Toronto. The sessions are well-organized, fun, and the communication with parents is excellent.",
  },
];

const programmes = [
  { name: "Little Legends", ages: "Ages 5–8", level: "Beginners", color: "bg-emerald-500" },
  { name: "Rising Stars", ages: "Ages 9–12", level: "Intermediate", color: "bg-[#d4a017]" },
  { name: "Elite Academy", ages: "Ages 13–16", level: "Advanced", color: "bg-primary" },
];

  export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO_IMG} alt="Cricket coaching" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2818]/90 via-[#0f2818]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-[#d4a017]/20 text-[#d4a017] px-4 py-1.5 rounded-full mb-6" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
              <Star className="w-4 h-4 fill-current" /> Toronto&apos;s #1 Youth Cricket Academy
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
              Where Young Cricketers <span className="text-[#d4a017]">Discover Their Potential</span>
            </h1>
            <p className="text-white/80 mb-8 max-w-lg" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              Professional, fun, and safe cricket coaching for children ages 5–16. Trusted by over 500 families across the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a017] text-[#0f2818] px-8 py-4 rounded-full hover:bg-[#e0b020] transition-all hover:scale-105"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem" }}
              >
                Book a Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/20 transition-all"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                View Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#d4a017]" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2rem" }}>{stat.number}</div>
                <div className="text-white/70" style={{ fontSize: "0.85rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Why Parents Choose Us
            </span>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              More Than Just Cricket
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
              We build confidence, teamwork, and a lifelong love of sport — in a safe environment you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.1rem" }}>{f.title}</h3>
                <p className="text-muted-foreground mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Preview */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Our Programmes
              </span>
              <h2 className="mt-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Find the Right Fit for Your Child
              </h2>
            </div>
            <Link href="/programmes" className="text-primary flex items-center gap-1 hover:gap-2 transition-all" style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              View all programmes <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className={`h-2 ${prog.color}`} />
                <div className="p-6">
                  <span className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>{prog.ages} &bull; {prog.level}</span>
                  <h3 className="mt-1 mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.35rem" }}>{prog.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {["Professional coaching", "Equipment provided", "Small group sizes", "Weekly progress updates"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.875rem" }}>
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programmes"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                    style={{ fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback src={ACTION_IMG} alt="Cricket action" className="rounded-2xl w-full h-[400px] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-[#d4a017] text-[#0f2818] p-6 rounded-2xl shadow-xl hidden md:block">
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2rem" }}>8+</div>
                <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>Years of<br />Excellence</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                About Us
              </span>
              <h2 className="mt-4 mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Building Tomorrow&apos;s Champions Today
              </h2>
              <p className="text-muted-foreground mb-6" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Cricket Toronto was founded in 2018 with a simple mission: to make cricket accessible, fun, and rewarding for every young person in the Greater Toronto Area. Our Cricket Canada-certified coaches bring professional playing experience and a passion for developing the next generation of cricketers.
              </p>
              <p className="text-muted-foreground mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Whether your child is picking up a bat for the first time or looking to compete at a higher level, we have a programme tailored to their needs.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                style={{ fontWeight: 600 }}
              >
                Meet Our Coaches <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={FIELD_IMG} alt="Cricket field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full mb-4" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
            <Calendar className="w-4 h-4" /> Upcoming Event
          </span>
          <h2 className="text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
            Spring Cricket Camp 2026
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 mb-8">
            <span className="flex items-center gap-2" style={{ fontSize: "0.95rem" }}><Calendar className="w-4 h-4" /> April 12–16, 2026</span>
            <span className="flex items-center gap-2" style={{ fontSize: "0.95rem" }}><Clock className="w-4 h-4" /> 9:00 AM – 3:00 PM</span>
            <span className="flex items-center gap-2" style={{ fontSize: "0.95rem" }}><MapPin className="w-4 h-4" /> Sunnybrook Park, Toronto</span>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            A week of intensive cricket coaching for ages 6–16. Master batting, bowling, and fielding with our top coaches. All equipment provided. Limited spots available!
          </p>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-[#d4a017] text-[#0f2818] px-8 py-4 rounded-full hover:bg-[#e0b020] transition-all hover:scale-105"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem" }}
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary bg-primary/10 px-4 py-1 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Testimonials
            </span>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              What Parents Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <Quote className="w-8 h-8 text-[#d4a017]/30 mb-3" />
                <p className="text-foreground/80 mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary" style={{ fontWeight: 700, fontSize: "0.85rem" }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                    <div className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>{t.child}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-[#d4a017] fill-[#d4a017]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ImageWithFallback src={KIDS_IMG} alt="Happy children playing" className="rounded-2xl w-full h-[300px] object-cover mb-10" />
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
            Ready to Get Your Child Started?
          </h2>
          <p className="text-muted-foreground mt-3 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Book a free trial session and see why hundreds of families trust Cricket Toronto to develop their child&apos;s love of cricket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem" }}
            >
              Book a Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:4165550123"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
              style={{ fontWeight: 600, fontSize: "1rem" }}
            >
              Call (416) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
