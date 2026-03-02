'use client'

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/events", label: "Events" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.125rem" }}>CT</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-primary" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem" }}>Cricket Toronto</span>
              <span className="block text-muted-foreground" style={{ fontSize: "0.7rem", lineHeight: 1 }}>Youth Cricket Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              <Phone className="w-4 h-4" />
              Book a Trial
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-gray-50"
                }`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-white px-5 py-3 rounded-full mt-3"
              style={{ fontWeight: 600 }}
            >
              Book a Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
