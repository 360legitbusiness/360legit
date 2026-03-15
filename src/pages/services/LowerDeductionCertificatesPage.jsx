import { 
  FiFileText, 
  FiBriefcase, 
  FiShield, 
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiActivity,
  FiTrendingUp
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import { companyName } from '../../data/siteData'
import ldcHero from '../../assets/services/ldc-hero.png'

const certificateItems = [
  {
    title: 'Lower Deduction Certificate (LDC)',
    description: 'Assistance in obtaining certificates under Section 197 of the Income Tax Act for payment of income without TDS or at a lower rate.',
    features: ['Form 13 Preparation', 'Justification Filing', 'Projections Management', 'Online Application Handling'],
    icon: FiTrendingUp,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Statutory Certificates',
    description: 'Expert support in obtaining various statutory certificates required for compliance, tenders, or business operations.',
    features: ['Capital Gains Certificate', 'Non-Deduction Certificates', 'NOC for Properties', 'Financial Soundness Certificate'],
    icon: FiShield,
    color: 'bg-blue-50 text-blue-600'
  }
]

const specializedSupport = [
  {
    title: 'TDS & TCS Advisory',
    text: 'Detailed guidance on TDS/TCS rates, exemptions, and lower deduction eligibility for domestic and international payments.',
    icon: FiActivity
  },
  {
    title: 'Documentation Audit',
    text: 'Thorough review of financial projections and supporting documents to maximize chances of certificate approval.',
    icon: FiFileText
  }
]

function LowerDeductionCertificatesPage() {
  return (
    <>
      <SEO
        title="Lower Deduction & Other Certificates (LDC)"
        description={`Obtain Lower Deduction Certificates (Section 197) and other statutory certificates with ${companyName}. Expertise in tax documentation.`}
        keywords="lower deduction certificate section 197, LDC income tax, non-deduction certificate, statutory business certificates"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-500/5 rounded-l-[120px] -z-0" />
        
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-extrabold uppercase tracking-widest text-blue-600 mb-6 font-sans">
                  <FiZap className="fill-blue-600" /> Regulatory Compliance
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Optimize Your <span className="text-orange-600 italic">Cash Flow</span> with LDC.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium font-sans">
                  Prevent excessive TDS deductions and improve your business liquidity. Our experts handle the entire application process for Section 197 Lower Deduction Certificates and other essential statutory documents.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary px-10 py-5">
                    Apply for Certificate
                  </Link>
                  <a href="#details" className="button-secondary bg-white border border-slate-200 px-10 py-5">
                    View Requirements
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white p-3 bg-white/50 backdrop-blur-sm shadow-blue-100">
                  <img 
                    src={ldcHero} 
                    alt="Official documents and signatures" 
                    className="w-full aspect-[4/5] object-cover rounded-[2.5rem]"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-10 -right-10 bg-[#1B3942] p-8 rounded-3xl shadow-2xl text-white hidden md:block max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <FiBriefcase />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Section 197</p>
                      <p className="text-lg font-bold">LDC Support</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Fast-track your application with accurate data projections and professional representation before tax authorities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Services Detail */}
      <section id="details" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Certification Expertise"
              title="End-to-End Documentation Handling"
              description="Whether it's for lower TDS on recurring income or specific transaction-based statutory needs, we provide complete compliance support."
              centered
            />
          </Reveal>

          <div className="grid gap-12 mt-16">
            {certificateItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className={`flex flex-col lg:flex-row gap-12 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 bg-white transition-all hover:shadow-[0_40px_80px_-20px_rgba(27,57,66,0.08)] ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} shadow-sm`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-[#1B3942] mb-6 tracking-tight">{item.title}</h3>
                      <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <FiCheckCircle className="text-orange-500 shrink-0" size={18} />
                            <span className="text-sm font-bold text-[#1B3942] uppercase tracking-tighter">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-1/2 h-80 lg:h-auto rounded-[2.5rem] bg-slate-50 border border-slate-100 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl mb-6">
                          <Icon size={32} className="text-blue-500" />
                        </div>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Statutory Compliance Approval</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tertiary Features */}
      <section className="section-space bg-[#1B3942] text-white">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-xs">Strategic Advisory</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Beyond Standard <span className="text-orange-400 italic">Documentation</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedSupport.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={index * 100}>
                  <article className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-orange-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed font-medium transition-colors">
                      {service.text}
                    </p>
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-white transition-colors">
                      Enquire Procedure <FiArrowRight />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-20 text-white shadow-3xl shadow-blue-200">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                  <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-8">
                    Improve Your Cash Liquidity.<br /><span className="text-orange-300">Apply for LDC Now.</span>
                  </h2>
                  <p className="text-blue-50 text-xl opacity-90 leading-relaxed font-sans">
                    Partner with the specialists who understand your financial goals. Get a personalized roadmap for statutory certificates today.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <Link to="/contact" className="px-10 py-5 bg-white text-blue-700 font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl text-center">
                    Speak to an Expert
                  </Link>
                  <p className="text-[10px] text-center uppercase tracking-widest text-blue-100 font-bold opacity-80">
                    Precision • Professionalism • Prompt Response
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default LowerDeductionCertificatesPage
