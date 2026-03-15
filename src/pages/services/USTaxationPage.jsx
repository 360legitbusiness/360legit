import { 
  FiFileText, 
  FiPieChart, 
  FiShield, 
  FiTrendingUp, 
  FiCheckCircle, 
  FiArrowRight,
  FiZap,
  FiActivity,
  FiGlobe,
  FiBriefcase
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import { companyName } from '../../data/siteData'
import usTaxHero from '../../assets/services/us-taxation-hero.png'

const usTaxationItems = [
  {
    title: 'Individual tax preparation',
    description: 'Specialized US tax filing for US citizens and residents, ensuring compliance with Federal and State requirements.',
    features: ['Form 1040 Preparation', 'State Tax Returns', 'Foreign Earned Income Exclusion', 'FBAR & FATCA Reporting'],
    icon: FiPieChart,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Business tax preparation',
    description: 'End-to-end tax compliance for US-based business entities including LLCs, Corporations, and Partnerships.',
    features: ['Form 1065/1120/1120-S', 'Payroll Tax Compliance', 'Sales Tax Reporting', 'Tax Planning for Multi-nationals'],
    icon: FiBriefcase,
    color: 'bg-blue-50 text-blue-600'
  }
]

const specializedServices = [
  {
    title: 'Expat Tax Advisory',
    text: 'Tailored tax strategies for US expats living abroad to optimize tax liability and avoid double taxation.',
    icon: FiGlobe
  },
  {
    title: 'ITIN Application Support',
    text: 'Complete assistance in obtaining Individual Taxpayer Identification Numbers for non-resident aliens.',
    icon: FiFileText
  }
]



function USTaxationPage() {
  return (
    <>
      <SEO
        title="US Taxation Services"
        description={`Expert US tax planning, preparation, and compliance services by ${companyName}. From FBAR to corporate filings.`}
        keywords="US tax preparation, expat tax services, FBAR compliance, US corporate tax, IRS tax consultant"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1B3942] text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 rounded-l-[120px] -z-0" />
        
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-extrabold uppercase tracking-widest text-orange-400 mb-6 font-sans">
                  <FiGlobe className="fill-orange-400" /> Global Tax Solutions
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                  US Taxation <span className="text-orange-400 italic">Expertise</span> for a <span className="underline decoration-orange-400/30 decoration-4 underline-offset-8">Borderless</span> World.
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-10 font-medium font-sans">
                  Navigate the complexities of US Federal and State tax laws with our specialized advisory. We ensure full compliance with IRS regulations while maximizing your tax efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-10 py-5 bg-orange-500 text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                    Get US Tax Consultation
                  </Link>
                  <a href="#details" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                    Explore Services
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 p-3 bg-white/5 backdrop-blur-md">
                  <img 
                    src={usTaxHero} 
                    alt="US Tax forms and globe" 
                    className="w-full aspect-[4/5] object-cover rounded-[2.5rem] opacity-90"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl text-[#1B3942] hidden md:block max-w-[280px] border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                      <FiActivity />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600">Compliance</p>
                      <p className="text-lg font-bold">IRS Certified</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Our experts stay updated with the latest US tax reforms to provide accurate filing and strategic planning.
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
              eyebrow="Specialized Filing"
              title="Comprehensive US Tax Support"
              description="From individual expat returns to complex multi-state corporate filings, we provide high-precision US tax solutions."
              centered
            />
          </Reveal>

          <div className="grid gap-12 mt-16">
            {usTaxationItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className={`flex flex-col lg:flex-row gap-12 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 bg-white transition-all hover:shadow-[0_40px_80px_-20px_rgba(27,57,66,0.08)] ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} shadow-sm shadow-orange-100`}>
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
                          <Icon size={32} className="text-orange-500" />
                        </div>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">IRS Compliant Reporting</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Secondary Services Grid */}
      <section className="section-space bg-[#FDFCFB]">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs">Expat & International</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-[#1B3942] leading-tight">
                Global Mobility <span className="text-orange-600 italic">Support</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={index * 100}>
                  <article className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-orange-200 transition-all hover:shadow-xl shadow-slate-100">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#1B3942] group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium transition-colors">
                      {service.text}
                    </p>
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 hover:gap-3 transition-all">
                      Enquire Now <FiArrowRight />
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
            <div className="relative overflow-hidden rounded-[3rem] bg-[#1B3942] p-10 md:p-20 text-white shadow-3xl">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                  <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-8">
                    US Tax Season Approaches.<br /><span className="text-orange-400">Be Ready. Be Compliant.</span>
                  </h2>
                  <p className="text-slate-300 text-xl leading-relaxed font-medium font-sans">
                    Don't let IRS notices catch you off guard. Partner with our US tax specialists today.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <Link to="/contact" className="px-10 py-5 bg-orange-500 text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-orange-600 transition-all shadow-2xl text-center">
                    Get US Tax Support
                  </Link>
                  <p className="text-[10px] text-center uppercase tracking-widest text-slate-400 font-bold opacity-80">
                    Confidential • Expert-Led • Federal & State Coverage
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

export default USTaxationPage
