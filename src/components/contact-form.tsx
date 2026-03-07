'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'

interface FormState {
  parentName: string
  email: string
  phone: string
  childName: string
  childAge: string
  programme: string
  message: string
}

interface ContactFormProps {
  formHeading?: string | null
  formSubheading?: string | null
}

const emptyForm: FormState = {
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childAge: '',
  programme: '',
  message: '',
}

/**
 * ContactForm — submits to the Payload REST API (POST /api/enquiries)
 * No auth required (see Enquiries collection access rules).
 */
export function ContactForm({ formHeading, formSubheading }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: form.parentName,
          email: form.email,
          phone: form.phone || undefined,
          childName: form.childName,
          childAge: Number(form.childAge),
          programme: form.programme || undefined,
          message: form.message || undefined,
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch (err) {
      setError('Sorry, something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem' }}>Thank You!</h3>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
          We&apos;ve received your enquiry and will get back to you within 24 hours. We can&apos;t wait to welcome your child to Cricket Toronto!
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(emptyForm) }}
          className="mt-6 text-primary hover:underline"
          style={{ fontWeight: 600, fontSize: '0.9rem' }}
        >
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem' }}>
        {formHeading ?? 'Book a Free Trial or Enquire'}
      </h2>
      <p className="text-muted-foreground mb-6" style={{ fontSize: '0.9rem' }}>
        {formSubheading ?? 'Fill in the form below and we&apos;ll get back to you within 24 hours.'}
      </p>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl" style={{ fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Parent/Guardian Name *</label>
            <input
              type="text" name="parentName" value={form.parentName} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Email Address *</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Phone Number</label>
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="(416) 555-0123"
            />
          </div>
          <div>
            <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Child&apos;s Name *</label>
            <input
              type="text" name="childName" value={form.childName} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Child's first name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Child&apos;s Age *</label>
            <input
              type="number" name="childAge" value={form.childAge} onChange={handleChange} required min="4" max="18"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Age"
            />
          </div>
          <div>
            <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Interested In</label>
            <select
              name="programme" value={form.programme} onChange={handleChange}
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
          <label className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500 }}>Message</label>
          <textarea
            name="message" value={form.message} onChange={handleChange} rows={4}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            placeholder="Tell us about your child's experience level, any questions, or anything else we should know..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
        >
          <Send className="w-4 h-4" />
          {loading ? 'Sending...' : 'Send Enquiry'}
        </button>

        <p className="text-muted-foreground" style={{ fontSize: '0.8rem' }}>
          By submitting this form, you agree to our Privacy Policy. We&apos;ll only use your information to respond to your enquiry.
        </p>
      </form>
    </div>
  )
}
