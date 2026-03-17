import { 
  FiShield, 
  FiCheckCircle, 
  FiArrowRight, 
  FiZap, 
  FiFileText, 
  FiLock,
  FiCalendar,
  FiActivity,
  FiAward
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import { companyName } from '../../data/siteData'

const compliancePackages = [
  {
    title: 'ROC Compliance',
    description: 'Ensure your company stays active and in good standing with the Registrar of Companies through systematic filings.',
    items: ['Form AOC-4 (Financials)', 'Form MGT-7 (Annual Return)', 'ADT-1 Auditor Appointment', 'Director KYCs'],
    icon: FiFileText,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Corporate Governance',
    description: 'Structured board meetings and statutory registers management for mid-to-large enterprises.',
    items: ['Board Resolutions Drafting', 'Minutes Book Maintenance', 'Statutory Register Updates', 'Share Transfer Procedures'],
    icon: FiLock,
    color: 'bg-purple-50 text-purple-600'
  }
]

function LegalCompliancePage() {
  return (
    <>
      <SEO
        title="Legal & Regulatory Compliance Management"
        description={`End-to-end ROC filing and corporate law compliance by ${companyName}. Stay audit-ready with our systematic statutory management.`}
        keywords="roc filing india, annual compliance company, director kyc delhi, statutory registers maintenance"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FDFCFB]">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-100 rounded-l-[100px] -z-10" />
        
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[10px] font-extrabold uppercase tracking-widest text-blue-600 mb-6">
                  <FiShield /> Statutory Safety Net
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Zero Penalties. <br /><span className="text-blue-600 italic">Total Compliance</span>.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Statutory deadlines are non-negotiable. Our automated tracking and expert review systems ensure your company never misses a filing or faces a regulatory hurdle.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-[#1B3942] hover:bg-blue-600 px-10 py-5">
                    Start Compliance Plan
                  </Link>
                  <Link to="/contact" className="button-secondary bg-white border border-slate-200 px-10 py-5">
                    View Filing Schedule
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Legal judge gavel and documents" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                      <FiCalendar />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tracking</p>
                      <p className="text-xl font-black text-[#1B3942]">45+ Deadlines</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compliance Grid */}
      <section id="compliance" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Filing Categories"
              title="End-to-End Corporate Governance"
              description="From annual ROC filings to specialized corporate law advisory, we provide a unified solution for all statutory needs."
              centered
            />
          </Reveal>

          <div className="grid gap-8 mt-16 md:grid-cols-2">
            {compliancePackages.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <Reveal key={pkg.title} delay={index * 100}>
                  <div className="group h-full bg-white rounded-[3.5rem] border border-slate-100 p-12 transition-all hover:bg-blue-600 hover:shadow-2xl">
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${pkg.color} group-hover:bg-white transition-all duration-500 shadow-sm`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1B3942] group-hover:text-white mb-6 tracking-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-lg text-slate-500 group-hover:text-blue-100 mb-10 leading-relaxed font-medium">
                      {pkg.description}
                    </p>
                    <div className="grid gap-4">
                      {pkg.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#1B3942] group-hover:text-white transition-colors">
                          <FiCheckCircle className="text-blue-600 group-hover:text-blue-200" size={16} /> {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 pt-10 border-t border-slate-100 group-hover:border-blue-400">
                      <Link to="/contact" className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 group-hover:text-white flex items-center gap-2">
                        Request Quote <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust & Methodology */}
      <section className="section-space bg-[#1B3942] text-white">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div>
                <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">Our Standard</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
                  Proactive vs <span className="text-blue-400 italic">Reactive</span> Compliance
                </h2>
                <div className="grid gap-6">
                  {[
                    { title: 'Pre-filing Reviews', desc: 'Every document is audited for accuracy before submission to the ROC portal.' },
                    { title: 'Automated Reminders', desc: 'Get alerts for AGM deadlines and director KYC due dates well in advance.' },
                    { title: 'Expert Representation', desc: 'Direct coordination with statutory authorities for complex queries.' }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                      <div className="h-10 w-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transiton-all">
                        <FiActivity size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{feat.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative p-12 md:p-16 rounded-[4rem] bg-white text-[#1B3942] shadow-3xl">
                <FiAward className="text-blue-600 text-6xl mb-10" />
                <h3 className="font-serif text-3xl font-bold mb-8">Maintain Your 'Active' Status Without Stress.</h3>
                <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium">
                  Regulatory lapses can lead to director disqualification and hefty penalties. We take that burden off your shoulders using a structured monthly compliance desk model.
                </p>
                <div className="flex flex-col gap-4">
                  <Link to="/contact" className="button-primary bg-blue-600 hover:bg-[#1B3942] py-5 text-center text-white shadow-xl shadow-blue-100">
                    Schedule Compliance Review
                  </Link>
                  <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Trusted by 200+ Corporate Clients
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-50 p-10 md:p-20 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3942] mb-8">Ready for a worry-free compliance experience?</h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  Join our compliance desk and get a dedicated manager to handle all your ROC and statutory obligations.
                </p>
                <Link to="/contact" className="button-primary bg-blue-600 hover:bg-[#1B3942] px-12 py-5 shadow-2xl shadow-blue-200">
                  Join the Compliance Desk
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default LegalCompliancePage
