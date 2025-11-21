import { Activity, Layers, Zap, ShieldCheck, Globe2, Cog } from 'lucide-react'

const features = [
  { icon: Activity, title: 'Real-time feeds', desc: 'Low-latency score updates across football, basketball and more.' },
  { icon: Layers, title: 'Plug-and-play widgets', desc: 'Embeddable components for live tickers, standings and fixtures.' },
  { icon: Zap, title: 'Blazing fast APIs', desc: 'Edge-cached, scalable endpoints with generous rate limits.' },
  { icon: ShieldCheck, title: 'Enterprise-grade', desc: 'SOC2-ready architecture, SSO and audit logging.' },
  { icon: Globe2, title: 'Global coverage', desc: '24+ sports, 120+ leagues, historical datasets.' },
  { icon: Cog, title: 'Flexible SDKs', desc: 'React, iOS, Android and server SDKs to ship faster.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Everything you need to go live</h2>
          <p className="mt-3 text-slate-300/80">From data ingestion to beautiful UI, built for performance and scale.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 text-white backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-white/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
