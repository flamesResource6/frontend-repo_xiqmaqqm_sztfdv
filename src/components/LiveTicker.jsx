import { useEffect, useState } from 'react'
import { Activity } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function LiveTicker() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/matches`)
        const data = await res.json()
        if (active) setMatches(data)
      } catch (e) {
        console.error(e)
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchData()
    const id = setInterval(fetchData, 5000)
    return () => { active = false; clearInterval(id) }
  }, [])

  return (
    <section id="live" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-white">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <h2 className="text-xl font-semibold tracking-tight">Live now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(loading ? Array.from({length:6}).fill({}) : matches).map((m, i) => (
            <div key={m.id || i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur">
              {loading ? (
                <div className="h-24 animate-pulse bg-white/5 rounded-lg" />
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <div>{m.competition}</div>
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${m.status === 'LIVE' ? 'bg-emerald-400' : m.status === 'FT' ? 'bg-slate-400' : 'bg-yellow-300'}`} />
                      {m.status}{m.minute ? ` • ${m.minute}'` : ''}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-semibold">{m.home_team}</div>
                    <div className="text-lg font-bold">{m.home_score}</div>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="font-semibold">{m.away_team}</div>
                    <div className="text-lg font-bold">{m.away_score}</div>
                  </div>
                  <div className="mt-3 text-xs text-white/60">{m.stage} • {m.start_time}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
