'use client'

/**
 * NewsletterForm — extracted as a client component so the Footer
 * can remain a server component while still handling the form submit.
 */
export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: wire up to your email provider or a Payload hook
    const form = e.currentTarget
    const input = form.querySelector('input[type="email"]') as HTMLInputElement
    if (input) {
      alert(`Thanks for subscribing, ${input.value}!`)
      input.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Your email"
        required
        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
        style={{ fontSize: '0.875rem' }}
      />
      <button
        type="submit"
        className="bg-gold text-footer-bg px-4 py-2.5 rounded-lg hover:bg-gold-light transition-colors shrink-0"
        style={{ fontWeight: 700, fontSize: '0.875rem' }}
      >
        Join
      </button>
    </form>
  )
}
