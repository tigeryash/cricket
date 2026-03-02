
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0f2818] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.125rem" }}>CT</span>
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem" }}>Cricket Toronto</span>
            </div>
            <p className="text-white/60 mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              Building confident young cricketers across the GTA since 2018. Professional coaching in a safe, fun environment.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Quick Links</h4>
            <div className="space-y-3">
              {["About", "Programmes", "Events", "FAQ", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-white/60 hover:text-[#d4a017] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Contact Us</h4>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Serving Toronto & the GTA" },
                { icon: Phone, text: "(416) 555-0123" },
                { icon: Mail, text: "info@cricketoronto.ca" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/60" style={{ fontSize: "0.875rem" }}>
                  <Icon className="w-4 h-4 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>Stay Updated</h4>
            <p className="text-white/60 mb-4" style={{ fontSize: "0.875rem" }}>
              Get the latest news on programmes, events, and cricket tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a017]"
                style={{ fontSize: "0.875rem" }}
              />
              <button className="bg-[#d4a017] text-[#0f2818] px-4 py-2.5 rounded-lg hover:bg-[#e0b020] transition-colors" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40" style={{ fontSize: "0.8rem" }}>
            &copy; 2026 Cricket Toronto. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/60" style={{ fontSize: "0.8rem" }}>Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/60" style={{ fontSize: "0.8rem" }}>Terms & Conditions</a>
            <a href="#" className="text-white/40 hover:text-white/60" style={{ fontSize: "0.8rem" }}>Safeguarding</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
