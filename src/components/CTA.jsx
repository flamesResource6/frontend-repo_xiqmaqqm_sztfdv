import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function CTA() {
  const [email, setEmail] = useState('')
  const [favorite, setFavorite] = useState('')
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, favorite_team: favorite, source: 'hero-cta' })
      })
      const data = await res.json()
      if (res.ok) setStatus('Success! Check your inbox for a welcome email.')
      else setStatus(data?.detail || 'Something went wrong')
      setEmail('')
      setFavorite('')
    } catch (e) {
      setStatus('Network error – please try again')
    }
  }

  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-8 text-white backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-semibold">Get early access</div>
              <p className="mt-2 text-white/70">Join the waitlist for beta access, launch updates and sample data feeds.</p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Work email" className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50" />
              <input value={favorite} onChange={e=>setFavorite(e.target.value)} type="text" placeholder="Favorite team (optional)" className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50" />
              <button className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30">Join</button>
            </form>
          </div>
          {status && <div className="mt-4 text-sm text-white/80">{status}</div>}
        </div>
      </div>
    </section>
  )
}
