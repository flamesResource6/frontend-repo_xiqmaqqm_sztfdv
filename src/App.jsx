import Header from './components/Header'
import Hero from './components/Hero'
import LiveTicker from './components/LiveTicker'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <LiveTicker />
      <Features />
      <Pricing />
      <CTA />
      <footer className="py-10 text-center text-white/60 text-sm">© {new Date().getFullYear()} SportLive. All rights reserved.</footer>
    </div>
  )
}

export default App
