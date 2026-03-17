import { 
  FiChevronRight, 
  FiCheckCircle, 
  FiArrowRight, 
  FiShield, 
  FiGlobe, 
  FiBox,
  FiFileText,
  FiSearch,
  FiActivity,
  FiTrendingUp
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import { companyName } from '../../data/siteData'

function BusinessSupportPage() {
  return (
    <>
      <SEO
        title="Business Support & IEC Consultancy"
        description={`Scale your operations with ${companyName}. From IEC registration and export consultancy to specialized financial advisory.`}
        keywords="iec registration delhi, export import consultancy, financial advisory india, trade license help"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-200 rounded-l-[100px] -z-10" />
        
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-widest mb-6">
                  <FiGlobe className="text-orange-400" /> Export & Growth
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Scale Your <span className="text-orange-600 italic">Operations</span> Across Borders.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Business growth doesn't happen in a vacuum. We provide the specialized support your company needs to expand globally and manage capital strategically.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-[#1B3942] hover:bg-orange-600 px-10 py-5">
                    Start Scaling
                  </Link>
                  <Link to="/contact" className="button-secondary bg-white border border-slate-200 px-10 py-5">
                    Explore Advisory
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="bg-white p-4 rounded-[4rem] shadow-3xl border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
                    alt="International business strategy" 
                    className="w-full aspect-[4/5] object-cover rounded-[3rem]"
                  />
                </div>
                {/* Floating Metric */}
                <div className="absolute -top-10 -right-10 bg-orange-600 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
                  <FiTrendingUp size={30} className="mb-2" />
                  <p className="text-2xl font-black">150+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200">Expansion Projects</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specialist Services Selection */}
      <section id="services" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Growth Advisory"
              title="Specialized Support for Established Firms"
              description="Critical services designed for companies looking to move beyond regional boundaries and optimize their capital allocation."
              centered
            />
          </Reveal>

          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                icon: FiBox, 
                title: 'IEC Registration', 
                desc: 'Quick procurement of Import Export Code from DGFT for global trade and banking compliance.' 
              },
              { 
                icon: FiGlobe, 
                title: 'Export Consultancy', 
                desc: 'Guidance on export documentation, incentives, and cross-border regulatory compliance.' 
              },
              { 
                icon: FiActivity, 
                title: 'Financial Advisory', 
                desc: 'Strategic insights for capital structuring, fundraising preparation, and operational efficiency.' 
              },
              { 
                icon: FiShield, 
                title: 'Trade Licensing', 
                desc: 'Assistance with municipal, health, and fire department licenses for physical business establishments.' 
              },
              { 
                icon: FiSearch, 
                title: 'Due Diligence', 
                desc: 'Comprehensive financial and legal checks before mergers, acquisitions, or significant investments.' 
              },
              { 
                icon: FiFileText, 
                title: 'MIS Architecture', 
                desc: 'Designing the data flows that give your leadership team decision-making clarity.' 
              }
            ].map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <div className="group h-full bg-white rounded-3xl border border-slate-100 p-10 transition-all hover:bg-[#1B3942] hover:shadow-2xl hover:-translate-y-2">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B3942] group-hover:text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#1B3942] group-hover:text-orange-400 transition-colors">
                    Learn More <FiArrowRight />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/CTA Part */}
      <section className="section-space pt-0">
        <div className="section-shell">
          <Reveal>
            <div className="bg-[#1B3942] rounded-[4rem] text-white p-12 md:p-24 flex flex-col items-center text-center">
              <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-xs">A Strategic Partnership</span>
              <p className="font-serif text-3xl md:text-5xl font-medium italic mt-8 mb-12 leading-tight max-w-4xl">
                "Expansion is risky without structured advisory. We provide the map for your company's next horizon."
              </p>
              <Link to="/contact" className="button-primary bg-orange-600 hover:bg-white hover:text-orange-600 px-12 py-5 shadow-2xl shadow-orange-900/40">
                Book a Strategy Session
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default BusinessSupportPage
