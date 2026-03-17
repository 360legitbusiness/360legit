import {
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiFileText,
  FiActivity,
  FiZap,
  FiBriefcase,
  FiAward
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import DocumentListPopup from '../../components/DocumentListPopup'
import { companyName } from '../../data/siteData'
import heroImage from '../../assets/services/labour-law-hero.png'
import { useState } from 'react'

function LabourLawPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false)

  return (
    <>
      <SEO
        title="Labour Law, PF, ESI & Payroll Compliance"
        description={`Comprehensive labour law and payroll management by ${companyName}. From PF and ESI registration to monthly statutory filings.`}
        keywords="labour law consultant delhi, pf registration online, esi compliance services, payroll processing delhi"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 rounded-l-[150px] -z-10" />

        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[10px] font-extrabold uppercase tracking-widest text-blue-600 mb-6">
                  <FiUsers /> Workforce Protection
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Streamlined <span className="text-blue-600 italic">Workforce</span> Compliance.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Managing human resources requires more than just payroll logic. We ensure your business is 100% compliant with PF, ESI, and evolving Labour Laws.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-blue-600 hover:bg-[#1B3942] px-10 py-5">
                    Consult Labour Expert
                  </Link>
                  <button 
                    onClick={() => setIsDocsOpen(true)}
                    className="button-secondary bg-white border border-slate-200 px-10 py-5 flex items-center gap-2 group"
                  >
                    <FiFileText className="text-blue-600 group-hover:scale-110 transition-transform" />
                    Required Documents
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="p-4 bg-white rounded-[3rem] shadow-3xl">
                  <img
                    src={heroImage}
                    alt="Workforce and HR management"
                    className="w-full aspect-[4/5] object-cover rounded-[2.5rem]"
                  />
                </div>
                {/* Floating Info Card */}
                <div className="absolute -bottom-10 -left-10 bg-[#1B3942] p-8 rounded-3xl shadow-2xl text-white hidden md:block max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <FiShield />
                    </div>
                    <p className="font-bold text-lg">Zero Litigation</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Our proactive audit approach ensures your payroll and statutory contributions are always dispute-free.
                  </p>
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
              eyebrow="Key Services"
              title="Social Security & Workforce Law"
              description="Comprehensive statutory support for teams of any size, from small startups to large-scale manufacturers."
              centered
            />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: FiAward,
                title: 'PF Registration & Compliance',
                desc: 'Handling new EPF registrations, monthly contribution filings, and claim processing support.'
              },
              {
                icon: FiActivity,
                title: 'ESI Management',
                desc: 'Complete ESI lifecycle management including registration, insurance card generation, and filings.'
              },
              {
                icon: FiFileText,
                title: 'Statutory Payroll',
                desc: 'Automated payroll processing with built-in logic for PF, ESI, Professional Tax, and TDS calculations.'
              },
              {
                icon: FiZap,
                title: 'BOCW & LWF',
                desc: 'Specialized compliance for construction workers (BOCW) and Labour Welfare Fund (LWF) contributions.'
              },
              {
                icon: FiBriefcase,
                title: 'Labour Law Audits',
                desc: 'Periodic audits of registers, forms, and display boards to ensure readiness for labour inspections.'
              },
              {
                icon: FiShield,
                title: 'Closure & Transfer',
                desc: 'Handling trust closures, PF transfers, and settlement procedures for outgoing employees.'
              },
            ].map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-2">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-white transition-all duration-500">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B3942] group-hover:text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-blue-100 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="section-space bg-[#1B3942] text-white">
        <div className="section-shell text-center">
          <Reveal>
            <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">The Human Factor</span>
            <p className="font-serif text-3xl md:text-5xl font-medium italic text-white leading-tight max-w-4xl mx-auto my-10">
              "Compliance in labour law is the highest form of respect for the workforce that builds your company."
            </p>
            <div className="inline-flex items-center gap-8 py-4 px-8 rounded-full bg-white/5 border border-white/10">
              <div className="text-left">
                <p className="text-[10px] font-black uppercase text-blue-400">Trusted By</p>
                <p className="text-sm font-bold">50+ Managed Payrolls</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <Link to="/contact" className="text-xs font-black uppercase tracking-widest text-white hover:text-blue-400 transition-all">
                Join our payroll desk <FiArrowRight className="inline ml-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Part */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-50 p-10 md:p-20 flex flex-col items-center text-center">
              <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
              </div>
              <div className="relative z-10 max-w-4xl">
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#1B3942] mb-8 leading-tight">Empower your HR with <span className="text-blue-600 block">Statutory Certainty.</span></h2>
                <p className="text-lg text-slate-600 mb-10 font-medium">Get a customized payroll and compliance audit for your team today.</p>
                <Link to="/contact" className="button-primary bg-blue-600 hover:bg-[#1B3942] px-12 py-5 shadow-2xl shadow-blue-200">
                  Request a Payroll Audit
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DocumentListPopup 
        serviceSlug="labour-law-compliance"
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </>
  )
}

export default LabourLawPage
