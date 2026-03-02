'use client'

import Link from "next/link";
import { ImageWithFallback } from "../components/figma/image-with-fallback";
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

const FIELD_IMG = "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkJTIwZ3Jhc3N8ZW58MXx8fHwxNzcyNDY5NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const EQUIP_IMG = "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwYmFsbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI0Njk1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const events = [
  {
    featured: true,
    name: "Spring Cricket Camp 2026",
    date: "April 12–16, 2026",
    time: "9:00 AM – 3:00 PM daily",
    location: "Sunnybrook Park, 1132 Leslie St, Toronto",
    ages: "Ages 6–16",
    level: "All levels welcome",
    price: "$375 for the full week",
    deadline: "April 5, 2026",
    image: FIELD_IMG,
    description: "Our flagship spring camp is the perfect way to kick off the cricket season! A full week of immersive coaching covering batting, bowling, fielding, and match play. Led by our full coaching team, with players grouped by age and ability for the best learning experience.",
    expectations: [
      "Professional coaching from 4 certified coaches",
      "Daily sessions on batting, bowling, and fielding",
      "Friendly mini-matches every afternoon",
      "All equipment provided",
      "Lunch and snacks included",
      "Certificate and prizes on final day",
      "Early drop-off from 8:30 AM available",
    ],
  },
  {
    featured: false,
    name: "Family Cricket Day",
    date: "May 24, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "High Park, Toronto",
    ages: "All ages — families welcome!",
    level: "Fun for everyone",
    price: "Free",
    deadline: "May 20, 2026",
    image: EQUIP_IMG,
    description: "Bring the whole family for a day of cricket fun! Parents vs kids matches, coaching tasters for beginners, and a BBQ. A great chance to see what Cricket Toronto is all about in a relaxed, fun setting.",
    expectations: [
      "Parent vs kids matches",
      "Free coaching taster sessions",
      "BBQ and refreshments",
      "Cricket games and activities for all ages",
      "Meet our coaching team",
      "Special offers on term bookings",
    ],
  },
  {
    featured: false,
    name: "Summer Intensive Camp",
    date: "July 7–18, 2026 (two weeks)",
    time: "9:00 AM – 4:00 PM daily",
    location: "Sunnybrook Park, Toronto",
    ages: "Ages 10–16",
    level: "Intermediate to Advanced",
    price: "$695 for two weeks / $395 per week",
    deadline: "June 28, 2026",
    image: null,
    description: "Our most comprehensive camp, designed for players who want to take their game to the next level. Two weeks of intensive coaching, fitness training, match play, and video analysis. Previous cricket experience required.",
    expectations: [
      "Advanced technique coaching",
      "Fitness and agility training",
      "Video analysis of batting and bowling",
      "Daily competitive match play",
      "Mental performance workshop",
      "All equipment and lunch included",
    ],
  },
];

const EventsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-36 h-36 border-2 border-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Events & Camps
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Special events, holiday camps, and more. Don&apos;t miss out — spots fill fast!
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all ${event.featured ? "border-[#d4a017] ring-2 ring-[#d4a017]/20" : "border-gray-100"}`}
            >
              {event.featured && (
                <div className="bg-[#d4a017] text-[#0f2818] text-center py-2" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Featured Event — Register Now!
                </div>
              )}

              {event.image && (
                <ImageWithFallback src={event.image} alt={event.name} className="w-full h-48 md:h-64 object-cover" />
              )}

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem" }}>{event.name}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                        <Calendar className="w-4 h-4 text-primary" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                        <Clock className="w-4 h-4 text-primary" /> {event.time}
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-xl px-5 py-3 text-center shrink-0">
                    <div className="text-primary" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem" }}>{event.price}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <MapPin className="w-4 h-4 text-primary shrink-0" /> {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <Users className="w-4 h-4 text-primary shrink-0" /> {event.ages}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {event.level}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {event.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-5 mb-6">
                  <h4 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem" }}>What to Expect</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.expectations.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-amber-600" style={{ fontSize: "0.85rem" }}>
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Registration deadline: <strong>{event.deadline}</strong>
                  </div>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors shrink-0 ${
                      event.featured
                        ? "bg-[#d4a017] text-[#0f2818] hover:bg-[#e0b020]"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
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
    </div>
  );
}

export default EventsPage;
