'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

interface FAQ {
  q: string
  a: string
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary/20 transition-colors">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 text-muted-foreground" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
