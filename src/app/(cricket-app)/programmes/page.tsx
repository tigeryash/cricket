'use client'

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Users, Calendar } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";

const programmes = [
  {
    name: "Little Legends",
    ages: "Ages 5–8",
    level: "Beginners",
    color: "bg-emerald-500",
    colorText: "text-emerald-600",
    colorBg: "bg-emerald-50",
    duration: "1 hour sessions",
    frequency: "Saturdays, 9:00 – 10:00 AM",
    location: "Sunnybrook Park, Toronto",
    price: "$180/term (10 weeks)",
    description: "A fun, engaging introduction to cricket for our youngest players. Through games, mini drills, and team activities, kids develop hand-eye coordination, learn basic batting and bowling, and fall in love with the sport.",
    includes: ["All equipment provided", "Cricket Canada certified coach", "Max 12 children per group", "Fun badges and rewards", "End of term mini-tournament", "Progress report for parents"],
    prereqs: "No experience needed! Just enthusiasm and running shoes.",
  },
  {
    name: "Rising Stars",
    ages: "Ages 9–12",
    level: "Beginner to Intermediate",
    color: "bg-[#d4a017]",
    colorText: "text-[#b8890a]",
    colorBg: "bg-amber-50",
    duration: "1.5 hour sessions",
    frequency: "Saturdays, 10:30 AM – 12:00 PM",
    location: "Sunnybrook Park, Toronto",
    price: "$220/term (10 weeks)",
    description: "A comprehensive programme building core cricket skills. Players develop proper batting technique, bowling accuracy, and fielding fundamentals while learning match play, strategy, and sportsmanship.",
    includes: ["All equipment provided", "Two qualified coaches per group", "Max 16 players per group", "Video analysis sessions", "Friendly matches against other groups", "Individual progress tracking"],
    prereqs: "Open to all levels. Previous cricket experience helpful but not required.",
  },
  {
    name: "Elite Academy",
    ages: "Ages 13–16",
    level: "Intermediate to Advanced",
    color: "bg-primary",
    colorText: "text-primary",
    colorBg: "bg-green-50",
    duration: "2 hour sessions",
    frequency: "Saturdays, 12:30 – 2:30 PM",
    location: "Sunnybrook Park, Toronto",
    price: "$280/term (10 weeks)",
    description: "Intensive coaching for players serious about improving their game. Focus on advanced technique, tactical awareness, fitness, and mental toughness. Ideal for players targeting school, club, or provincial selection.",
    includes: ["Specialized equipment available", "Three coaches per session", "Max 14 players per group", "Strength & conditioning element", "Match simulation and strategy", "Personal development plan"],
    prereqs: "Minimum 1 year of cricket experience or coach assessment.",
  },
  {
    name: "Private Coaching",
    ages: "All ages",
    level: "All levels",
    color: "bg-purple-600",
    colorText: "text-purple-600",
    colorBg: "bg-purple-50",
    duration: "1 hour sessions",
    frequency: "By appointment — weekdays & weekends",
    location: "Various locations across the GTA",
    price: "$75/session or $650 for 10 sessions",
    description: "One-on-one coaching tailored entirely to your child's needs. Perfect for players who want accelerated development, specific skill work, or preparation for trials and selections.",
    includes: ["Fully personalized coaching plan", "Video analysis included", "Flexible scheduling", "Any location in the GTA", "Equipment provided", "Monthly progress report"],
    prereqs: "None — suitable for complete beginners through to advanced players.",
  },
];

const ProgrammesPage = () => {
  return (
    <div>
      {/* Hero */}
      <SectionHeading title="Our Programmes" description="From first-time players to aspiring professionals — we have a programme for every young cricketer." />

      {/* Programmes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {programmes.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`h-2 ${prog.color}`} />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem" }}>{prog.name}</h3>
                      <span className={`${prog.colorBg} ${prog.colorText} px-3 py-0.5 rounded-full`} style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                        {prog.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground" style={{ fontSize: "0.95rem" }}>{prog.ages}</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl px-5 py-3 text-center shrink-0">
                    <div className="text-primary" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem" }}>{prog.price}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {prog.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <Clock className="w-4 h-4 text-primary shrink-0" /> {prog.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <Calendar className="w-4 h-4 text-primary shrink-0" /> {prog.frequency}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <MapPin className="w-4 h-4 text-primary shrink-0" /> {prog.location}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 mb-6">
                  <h4 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem" }}>What&apos;s Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <strong>Prerequisites:</strong> {prog.prereqs}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shrink-0"
                    style={{ fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Register Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}>
            Not Sure Which Programme Is Right?
          </h2>
          <p className="text-muted-foreground mt-3 mb-6" style={{ fontSize: "1rem" }}>
            No problem! Book a free trial and our coaches will help find the perfect fit for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
            >
              Book a Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
              style={{ fontWeight: 600 }}
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgrammesPage;
