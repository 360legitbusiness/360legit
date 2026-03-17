import { 
  FiGlobe, 
  FiCheckCircle, 
  FiArrowRight, 
  FiShield, 
  FiLock, 
  FiZap,
  FiFileText,
  FiSearch,
  FiBriefcase
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import DocumentListPopup from '../../components/DocumentListPopup'
import { companyName } from '../../data/siteData'
import { useState } from 'react'

function IntellectualPropertyPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false)

  return (
    <>
      <SEO
        title="Trademark Registration & IP Protection"
        description={`Secure your brand and innovations with ${companyName}. Trademark filing, objection replies, and intellectual property advisory.`}
        keywords="trademark registration delhi, brand protection india, ip advisory services, trademark objection reply"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FDFCFB]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900 rounded-l-[100px] -z-10" />
        
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-widest mb-6">
                  <FiLock className="text-orange-400" /> Asset Protection
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Your Identity, <br /><span className="text-orange-600 italic">Protected</span> Forever.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  A brand is more than a logo; it's your business's most valuable asset. We provide end-to-end IP advisory to ensure your innovations and identity remain secure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-[#1B3942] hover:bg-orange-600 px-10 py-5">
                    Register Your TM
                  </Link>
                  <button 
                    onClick={() => setIsDocsOpen(true)}
                    className="button-secondary bg-white border border-slate-200 px-10 py-5 flex items-center gap-2 group"
                  >
                    <FiFileText className="text-orange-600 group-hover:scale-110 transition-transform" />
                    Required Documents
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop" 
                    alt="Brand identity and legal protection" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                {/* Floating Cert */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                      <FiShield />
                    </div>
                    <p className="font-bold text-lg text-[#1B3942]">TM Verified</p>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Over 500+ successful trademark filings across diverse industries.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="IP Strategy"
              title="Securing Your Competitive Advantage"
              description="Comprehensive intellectual property services designed for startups, brands, and creators."
              centered
            />
          </Reveal>

          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                icon: FiSearch, 
                title: 'Trademark Search', 
                desc: 'Comprehensive public search to ensure your brand name is unique and registrable before filing.' 
              },
              { 
                icon: FiFileText, 
                title: 'Trademark Filing', 
                desc: 'Handling the entire application process for wordmarks, logos, and slogans in appropriate classes.' 
              },
              { 
                icon: FiZap, 
                title: 'Objection Replies', 
                desc: 'Drafting legal responses to TMR objections and representing your case at the tribunal.' 
              },
              { 
                icon: FiBriefcase, 
                title: 'IP Advisory', 
                desc: 'Strategic consultation on copyright, brand licensing, and intellectual property monetization.' 
              },
              { 
                icon: FiShield, 
                title: 'IP Monitoring', 
                desc: 'Active tracking of the trademark journal to prevent brand imitation through formal oppositions.' 
              },
              { 
                icon: FiGlobe, 
                title: 'Brand Portfolio', 
                desc: 'Unified management of your brand assets across multiple jurisdictions and entity types.' 
              }
            ].map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <div className="group h-full bg-white rounded-3xl border border-slate-100 p-10 transition-all hover:bg-[#1B3942] hover:shadow-2xl hover:-translate-y-2">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B3942] group-hover:text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-space pt-0">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 md:p-24 text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8">Ready to Own Your <span className="text-orange-500 italic">Brand</span>?</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Join hundreds of founders who trust {companyName} to legally secure their identity. Start with a free trademark search today.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link to="/contact" className="px-12 py-5 bg-orange-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-orange-600 transition-all shadow-2xl shadow-orange-900/40">
                    Book IP Session
                  </Link>
                  <Link to="/contact" className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/10 transition-all">
                    Free TM Search
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DocumentListPopup 
        serviceSlug="intellectual-property"
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </>
  )
}

export default IntellectualPropertyPage
