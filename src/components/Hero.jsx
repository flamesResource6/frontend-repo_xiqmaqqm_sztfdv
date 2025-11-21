import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh]">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live sports infrastructure
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
              Real-time scores, results and widgets for modern sports apps
            </h1>
            <p className="mt-5 text-lg text-slate-200/80">
              Plug-and-play APIs and embeddable components for football, basketball and more. Built for speed, reliability and stunning UX.
            </p>
          </motion.div>
          <motion.div className="mt-8 flex flex-wrap items-center gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white">
              Explore features
            </a>
          </motion.div>

          <motion.div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {[
              ['50ms', 'Latency'],
              ['99.99%', 'Uptime'],
              ['24+', 'Sports'],
              ['100k+/s', 'Events']
            ].map(([k,v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">{k}</div>
                <div className="text-xs text-white/70">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
