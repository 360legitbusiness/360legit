import { 
  FiBookOpen, 
  FiCpu, 
  FiPieChart, 
  FiActivity, 
  FiCheckCircle, 
  FiArrowRight, 
  FiZap,
  FiTrendingUp,
  FiLayers
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import { companyName } from '../../data/siteData'

function AccountingAutomationPage() {
  return (
    <>
      <SEO
        title="Accounting & Business Systems Automation"
        description={`Modern bookkeeping and financial reporting automation by ${companyName}. From cloud accounting setup to real-time MIS reports.`}
        keywords="accounting automation delhi, cloud bookkeeping india, mis report consultancy, financial systems setup"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-[-1] opacity-40">
          <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent" />
        </div>
        
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-extrabold uppercase tracking-widest text-blue-600 mb-6">
                  <FiCpu /> Future-Ready Finance
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Data-Driven <span className="text-blue-600 italic">Accounting</span> for Modern <span className="underline decoration-blue-200 decoration-4 underline-offset-8">Growth</span>.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Stop looking at your finances in the rearview mirror. We implement accounting systems that provide real-time visibility into your profitability and cash flow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-[#1B3942] hover:bg-blue-600 px-10 py-5">
                    Upgrade Your Systems
                  </Link>
                  <Link to="/contact" className="button-secondary bg-white border border-slate-200 px-10 py-5">
                    Explore Features
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="bg-[#1B3942] p-4 rounded-[4rem] shadow-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
                    alt="Financial data analytics" 
                    className="w-full aspect-square object-cover rounded-[3.5rem] mix-blend-lighten"
                  />
                </div>
                {/* Floating Metrics Overlay */}
                <div className="absolute -bottom-10 right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block max-w-[300px]">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 mb-6 tracking-widest">Real-time Visibility</h4>
                  <div className="space-y-6">
                    {[
                      { label: 'Automation Score', value: '92%', color: 'bg-emerald-500' },
                      { label: 'Reporting Accuracy', value: '100%', color: 'bg-blue-500' }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-[#1B3942]">{stat.label}</span>
                          <span className="text-xs font-black text-blue-600">{stat.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${stat.color} transition-all duration-1000`} style={{ width: stat.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Beyond Simple Bookkeeping"
              description="We combine accounting discipline with technology to provide a high-performance financial engine."
              centered
            />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { 
                icon: FiBookOpen, 
                title: 'Accounting Setup', 
                desc: 'Choosing and configuring the right accounting software (Zoho, Tally, QuickBooks) for your workflow.' 
              },
              { 
                icon: FiCpu, 
                title: 'Process Automation', 
                desc: 'Implementing OCR, automated bank feeds, and invoice workflows to reduce manual entry by 70%.' 
              },
              { 
                icon: FiPieChart, 
                title: 'MIS Reporting', 
                desc: 'Detailed monthly reports covering profitability, aging, cash burn, and budget vs actual analysis.' 
              },
              { 
                icon: FiActivity, 
                title: 'Virtual Controller', 
                desc: 'Strategic financial oversight and control to ensure data integrity and process compliance.' 
              },
              { 
                icon: FiZap, 
                title: 'Quick Turnaround', 
                desc: 'Close your books within the first week of every month for faster decision-making.' 
              },
              { 
                icon: FiTrendingUp, 
                title: 'Financial Health', 
                desc: 'Ratio analysis and benchmark tracking to monitor business stability and growth trends.' 
              },
            ].map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <div className="group h-full bg-white rounded-3xl border border-slate-100 p-8 transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3942] mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-space bg-slate-900 text-white relative">
        <div className="absolute right-0 bottom-0 opacity-10">
          <FiLayers size={400} />
        </div>
        
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="max-w-lg">
                <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">The 360 Approach</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mt-6 mb-10 leading-tight">
                  High-Integrity Data for <span className="text-blue-400 italic">High-Stakes</span> Decisions.
                </h2>
                <div className="space-y-8">
                  {[
                    { title: 'Standardized Chart of Accounts', desc: 'Customized to your specific industry for deep vertical reporting.' },
                    { title: 'Cloud-First Accessibility', desc: 'Secure, 24/7 access to your financial cockpit from anywhere in the world.' },
                    { title: 'Statutory Reconciliation', desc: 'Ensuring your books perfectly match your GST and IT filings.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="h-6 w-6 rounded-full border-2 border-blue-400 flex items-center justify-center shrink-0 mt-1">
                        <FiCheckCircle className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[4rem] flex flex-col items-center text-center">
                <div className="h-20 w-20 bg-blue-500 rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/30">
                  <FiCpu size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6">Ready to Digitize?</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                  Transitioning from legacy bookkeeping to modern automated accounting takes expertise. Let our systems team handle the migration for you.
                </p>
                <Link to="/contact" className="button-primary bg-blue-600 hover:bg-white hover:text-blue-600 px-12 py-5 shadow-2xl shadow-blue-500/20">
                  Get a Systems Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value Quote */}
      <section className="py-20 bg-white">
        <div className="section-shell text-center">
          <Reveal>
            <p className="font-serif text-3xl md:text-5xl font-medium italic text-[#1B3942] leading-tight max-w-4xl mx-auto mb-10">
              "Good accounting doesn't just record the past; it creates a map for the future."
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 hover:text-slate-900 transition-colors">
              Talk to Our Systems Specialist <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default AccountingAutomationPage
