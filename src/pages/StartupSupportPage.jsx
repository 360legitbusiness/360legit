import {
  FiArrowRight,
  FiCheckCircle,
  FiCompass,
  FiLayers,
  FiShield,
  FiTrendingUp,
  FiZap,
  FiActivity,
  FiTarget,
  FiCpu
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { startupSupportSteps, companyName } from '../data/siteData'

const supportCards = [
  {
    icon: FiCompass,
    title: 'Formation Guidance',
    text: 'Choosing between Pvt Ltd, LLP, or Partnership based on your funding and liability needs.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: FiLayers,
    title: 'Structure & Ownership',
    text: 'Crafting the ideal cap table and equity structure for founders and early investors.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: FiShield,
    title: 'Compliance Blueprint',
    text: 'Setting up automated systems for GST, ROC, and statutory filings from day one.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: FiTrendingUp,
    title: 'Tax Strategy',
    text: 'Leveraging startup-specific tax exemptions and planning for long-term profitability.',
    color: 'bg-purple-50 text-purple-600'
  },
]

function StartupSupportPage() {
  return (
    <>
      <SEO
        title="Startup Launchpad & Compliance Support"
        description="Comprehensive startup support services from registration to compliance automation. We help founders focus on build, not just filings."
        keywords="startup launchpad, company registration india, startup tax plans, founder compliance support"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/30 rounded-l-[100px] z-0 hidden lg:block" />

        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-6">
                  <FiZap className="fill-orange-600" /> Startup Launchpad
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Focus on <span className="text-orange-600 italic">Building</span>. We'll handle the <span className="underline decoration-orange-200 decoration-4 underline-offset-8">Compliance</span>.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Don't let regulatory hurdles slow down your innovation. We provide a full-stack financial and legal foundation for fast-moving startups.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary px-8 py-4 text-sm uppercase tracking-widest font-bold">
                    Start Your Formation
                  </Link>
                  <Link to="/contact" className="button-secondary bg-white border border-slate-200 px-8 py-4 text-sm uppercase tracking-widest font-bold">
                    View Roadmap
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
                    alt="Startup team working"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <FiActivity />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Growth Ready</p>
                      <p className="text-xl font-bold text-[#1B3942]">Scale-Up Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Founder-First Approach"
              title="Execution Support for Every Milestone"
              description="A structured engagement model that identifies risk and simplifies every critical startup step."
              centered
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {supportCards.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="group relative h-full bg-white rounded-3xl border border-slate-100 p-8 transition-all hover:bg-[#1B3942] hover:-translate-y-2 hover:shadow-2xl">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} group-hover:bg-white transition-colors duration-500`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B3942] group-hover:text-white mb-4 tracking-tight transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-300 transition-colors">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="section-space bg-[#1B3942] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px]" />
        </div>

        <div className="section-shell relative z-10">
          <Reveal>
            <div className="max-w-3xl mb-20 text-center mx-auto">
              <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-xs">The Vision</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 leading-tight">
                A Practical Roadmap for <span className="text-orange-400 italic">Compliant Growth</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {startupSupportSteps.map((step, index) => (
                <Reveal key={step} delay={index * 100}>
                  <div className="group flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
                      {index + 1}
                    </div>
                    <p className="text-lg text-slate-200 group-hover:text-white leading-relaxed font-medium transition-colors">
                      {step}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="bg-white/95 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-3xl text-[#1B3942]">
                <h3 className="font-serif text-3xl font-bold mb-8">Ready to Build?</h3>
                <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                  Join hundreds of founders who trust {companyName} to handle their backend while they scale their vision. We're more than just consultants; we're your outsourced compliance office.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: FiTarget, text: 'Investor-ready entity structure' },
                    { icon: FiCpu, text: 'Automated accounting integration' },
                    { icon: FiShield, text: '100% statutory safety net' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-slate-800">
                      <div className="h-8 w-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                        <benefit.icon size={16} />
                      </div>
                      {benefit.text}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="button-primary w-full mt-10 py-5 text-center shadow-orange-200 shadow-xl">
                  Schedule Your Free Setup Session
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-white">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-2xl">★</span>
                ))}
              </div>
              <p className="font-serif text-3xl md:text-5xl font-medium italic text-[#1B3942] leading-tight mb-8">
                "They didn't just register our company; they designed our financial future. A must-have partner for any serious founder."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-left">
                  <p className="font-extrabold text-[#1B3942] uppercase tracking-widest text-xs">Aman Verma</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase">Co-Founder, TechFlow Solutions</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default StartupSupportPage

