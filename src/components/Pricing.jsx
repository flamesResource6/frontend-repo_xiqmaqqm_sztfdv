export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-300/80">Start free. Upgrade as you grow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', features: ['10k events/month', 'Community support', 'Basic widgets']
          },{
            name: 'Pro', price: '$99', features: ['1M events/month', 'Priority support', 'Advanced widgets', 'Webhooks']
          },{
            name: 'Enterprise', price: 'Custom', features: ['Unlimited events', 'SLA & SSO', 'Dedicated support', 'Custom feeds']
          }].map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <div className="text-sm text-white/70">{t.name}</div>
              <div className="mt-2 text-4xl font-semibold">{t.price}<span className="text-base text-white/60 font-normal">/mo</span></div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
