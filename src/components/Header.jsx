import { Menu, Trophy, Activity, Building2 } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-900 shadow-lg shadow-emerald-500/30">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="text-white font-semibold tracking-tight">SportLive</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
            <a href="#live" className="hover:text-white transition">Live</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition">View Plans</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 px-3 py-2 text-sm font-semibold shadow-lg shadow-emerald-500/30">Start Free</a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  )
}
