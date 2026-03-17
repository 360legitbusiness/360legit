import { 
  FiBriefcase, 
  FiCheckCircle, 
  FiArrowRight, 
  FiZap, 
  FiShield, 
  FiMap,
  FiFileText,
  FiUsers,
  FiCompass
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import DocumentListPopup from '../../components/DocumentListPopup'
import { companyName } from '../../data/siteData'
import heroImage from '../../assets/services/business-registration-hero.png'
import { useState } from 'react'

const registrationTypes = [
  {
    title: 'Private Limited Company',
    description: 'The gold standard for startups and scalable businesses. Offers limited liability and easy fundraising capabilities.',
    benefits: ['Limited Liability Protection', 'Separate Legal Entity', 'Investor Friendly', 'Perpetual Succession'],
    icon: FiBriefcase,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'LLP Registration',
    description: 'Combines the flexibility of a partnership with the limited liability of a company. Ideal for service-oriented firms.',
    benefits: ['No Minimum Capital', 'Lower Compliance Cost', 'No Dividend Distribution Tax', 'Simple Governance'],
    icon: FiUsers,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Partnership & MSME',
    description: 'Quick setup for traditional businesses. We handle partnership deeds and Udyam registrations for small enterprises.',
    benefits: ['Easiest Setup', 'MSME Benefits Access', 'Subsidy Eligibility', 'Lower Startup Costs'],
    icon: FiZap,
    color: 'bg-emerald-50 text-emerald-600'
  }
]

function BusinessRegistrationPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false)

  return (
    <>
      <SEO
        title="Business Registration & Company Incorporation"
        description={`Fast and compliant business registration services by ${companyName}. Incorporate your Pvt Ltd, LLP, or Partnership firm with ease.`}
        keywords="pvt ltd company registration, llp registration india, startup registration delhi, msme udyam registration"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-extrabold uppercase tracking-widest text-orange-400 mb-8">
                  <FiCompass /> Builder's Launchpad
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                  Your Vision, <span className="text-orange-400 italic">Legally</span> Formed.
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-10">
                  Lay the strongest legal foundation for your enterprise. We accelerate the incorporation process while ensuring your ownership structure is investor-ready.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-10 py-5 bg-orange-600 text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-[#1B3942] transition-all shadow-2xl shadow-orange-900/40">
                    Register Your Company
                  </Link>
                  <button 
                    onClick={() => setIsDocsOpen(true)}
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2 group"
                  >
                    <FiFileText className="text-orange-400 group-hover:scale-110 transition-transform" />
                    Required Documents
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative group">
                <div className="aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
                  <img 
                    src={heroImage} 
                    alt="Team discussing business structure" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-12 -left-12 bg-white text-[#1B3942] p-8 rounded-[2.5rem] shadow-2xl hidden md:block border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mb-2">Success Rate</p>
                  <p className="text-4xl font-extrabold tracking-tighter">100%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Incorporation Verified</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Registration Types Grid */}
      <section id="types" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Formation Choices"
              title="The Right Structure for Your Goal"
              description="Each entity type offers unique advantages. We help you choose the one that aligns with your capital needs and liability profile."
              centered
            />
          </Reveal>

          <div className="grid gap-10 mt-16 md:grid-cols-3">
            {registrationTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Reveal key={type.title} delay={index * 100}>
                  <div className="group h-full bg-white rounded-[3rem] border border-slate-100 p-10 transition-all hover:bg-[#1B3942] hover:-translate-y-3 hover:shadow-2xl">
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${type.color} group-hover:bg-white transition-all duration-500`}>
                      <Icon size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3942] group-hover:text-white mb-6 tracking-tight">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-500 group-hover:text-slate-300 mb-10 leading-relaxed font-medium">
                      {type.description}
                    </p>
                    <div className="space-y-4">
                      {type.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1B3942] group-hover:text-orange-400 transition-colors">
                          <FiCheckCircle size={14} /> {benefit}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-12 block text-center py-4 bg-slate-50 text-[#1B3942] font-black uppercase tracking-widest text-[10px] rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all">
                      Check Availability
                    </Link>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-space bg-[#FDFCFB]">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="p-12 md:p-16 rounded-[4rem] bg-white border border-slate-100 shadow-xl">
                  <h2 className="font-serif text-4xl font-bold text-[#1B3942] mb-10">4-Step Acceleration</h2>
                  <div className="space-y-12">
                    {[
                      { step: '01', title: 'Consultation', desc: 'Analyzing your business model and choosing the ideal entity.' },
                      { step: '02', title: 'Documentation', desc: 'Preparation of MOA, AOA, and Digital Signature Certificates.' },
                      { step: '03', title: 'Application', desc: 'Filing with MCA/ROC and tracking the SPICE+ forms.' },
                      { step: '04', title: 'Handover', desc: 'Secure delivery of COI, PAN, TAN, and master data.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-8 relative">
                        {idx < 3 && <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-100" />}
                        <div className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-black shrink-0 shadow-lg shadow-orange-100 text-lg">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1B3942] mb-2">{item.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="max-w-lg">
                <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs">Fast & Reliable</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3942] mt-6 mb-8 leading-tight">
                  Start Your <span className="text-orange-600 italic">Legacy</span> Today.
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                  We don't just provide certificate of incorporation; we provide a growth partner who understands the backend needs of a scaling company.
                </p>
                <Link to="/contact" className="button-primary inline-flex items-center gap-3 px-12 py-5 shadow-orange-200 shadow-2xl">
                  Book Registration Call <FiArrowRight />
                </Link>
                
                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-16">
                  <div>
                    <h4 className="text-4xl font-black text-[#1B3942] mb-2">7 Days</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Average Incorporation Time</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-[#1B3942] mb-2">Zero</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Hidden Complexity Fees</p>
                  </div>
                </div>
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
              <div className="flex justify-center gap-2 mb-10">
                <FiShield className="text-orange-500 text-3xl" />
              </div>
              <p className="font-serif text-3xl md:text-5xl font-medium italic text-[#1B3942] leading-tight mb-10">
                "Incorporation is the birth of an idea. We ensure it's delivered with the legal robustness it deserves."
              </p>
              <div className="inline-block py-3 px-6 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                Direct Specialist Advisory
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DocumentListPopup 
        serviceSlug="business-registration"
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </>
  )
}

export default BusinessRegistrationPage
