import { 
  FiHeart, 
  FiCheckCircle, 
  FiArrowRight, 
  FiBriefcase, 
  FiFileText, 
  FiGlobe,
  FiZap,
  FiShield,
  FiUsers
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import DocumentListPopup from '../../components/DocumentListPopup'
import { companyName } from '../../data/siteData'
import { useState } from 'react'

const ngoTypes = [
  {
    title: 'Trust Registration',
    description: 'Perfect for charitable activities with a fixed set of trustees and assets. We ensure your trust deed is robust and compliant.',
    features: ['Public & Private Trusts', 'Deed Drafting', 'Registration Support', 'PAN/TAN Issuance'],
    icon: FiBriefcase,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Society Registration',
    description: 'Ideal for member-based organizations like sports clubs, education societies, and cultural associations.',
    features: ['MOA & Rules Drafting', 'Governing Body Setup', 'Annual List Filing', 'Bye-laws Advisory'],
    icon: FiUsers,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Section 8 Company',
    description: 'The most prestigious non-profit structure, offering limited liability and global recognition for charitable goals.',
    features: ['License from MCA', 'Limited Liability', 'Easy FDI/Grants', 'Professional Credibility'],
    icon: FiShield,
    color: 'bg-emerald-50 text-emerald-600'
  }
]

function NGOPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false)

  return (
    <>
      <SEO
        title="NGO & Non-Profit Registration Services"
        description={`Specialized NGO registration and compliance by ${companyName}. From Trust and Society registration to Section 8 company formation.`}
        keywords="ngo registration delhi, section 8 company registration, trust registration india, charitable society registration"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50/50 via-white to-emerald-50/30 -z-10" />
        
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-[10px] font-extrabold uppercase tracking-widest text-red-600 mb-6">
                  <FiHeart className="fill-red-600" /> Purpose Driven
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Structure Your <span className="text-red-500 italic">Impact</span>.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Transforming social vision into a legally recognized entity. We provide specialized advisory for non-profits to ensure your charitable goals are backed by statutory stability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-[#1B3942] hover:bg-red-600 px-10 py-5">
                    Consult NGO Expert
                  </Link>
                  <button 
                    onClick={() => setIsDocsOpen(true)}
                    className="button-secondary bg-white border border-slate-200 px-10 py-5 flex items-center gap-2 group"
                  >
                    <FiFileText className="text-red-600 group-hover:scale-110 transition-transform" />
                    Required Documents
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="bg-white p-4 rounded-[4rem] shadow-3xl border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                    alt="NGO volunteers and social impact" 
                    className="w-full aspect-square object-cover rounded-[3rem]"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-12 -right-12 bg-red-600 text-white p-10 rounded-full shadow-2xl hidden md:flex flex-col items-center justify-center text-center w-48 h-48">
                  <FiGlobe size={32} className="mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest">Global Standard</p>
                  <p className="text-xl font-bold">12A/80G Ready</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NGO Types Grid */}
      <section id="types" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Non-Profit Structures"
              title="Founding for Philanthropy"
              description="Choose the right legal framework for your charitable mission based on governance and scale requirements."
              centered
            />
          </Reveal>

          <div className="grid gap-10 mt-16 lg:grid-cols-3">
            {ngoTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Reveal key={type.title} delay={index * 100}>
                  <div className="group h-full bg-white rounded-[4rem] border border-slate-100 p-12 transition-all hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(239,68,68,0.1)]">
                    <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] ${type.color} group-hover:bg-[#1B3942] group-hover:text-white transition-all duration-500 shadow-sm`}>
                      <Icon size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3942] mb-6 tracking-tight">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-10 leading-relaxed font-medium">
                      {type.description}
                    </p>
                    <div className="space-y-4">
                      {type.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1B3942] group-hover:text-red-500 transition-colors">
                          <FiCheckCircle size={14} className="text-red-500" /> {feat}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-12 block text-center py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] rounded-[1.5rem] hover:bg-red-600 transition-all shadow-xl shadow-slate-200">
                      Get Procedure
                    </Link>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* NGO Compliance Focus */}
      <section className="section-space bg-[#1B3942] text-white">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="max-w-lg">
                <span className="text-red-400 font-bold uppercase tracking-[0.2em] text-xs">Exemptions & Benefits</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mt-6 mb-10 leading-tight">
                  Maximize Your <span className="text-red-400 italic">Funding Potental</span>.
                </h2>
                <div className="space-y-6">
                  {[
                    { title: '12A & 80G Registration', desc: 'Critical for tax exemptions and providing tax benefits to your donors.' },
                    { title: 'CSR Funding Advisory', desc: 'Empanelling your NGO for Corporate Social Responsibility funds from large firms.' },
                    { title: 'FCRA Compliance', desc: 'Mandatory advisory for receiving foreign contributions and grants.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-white transition-all">
                      <h4 className="font-bold mb-3 text-white group-hover:text-[#1B3942] transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-400 group-hover:text-slate-600 leading-relaxed font-medium transition-colors">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-white p-12 md:p-20 rounded-[4rem] text-[#1B3942] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <FiZap className="text-red-500/20" size={100} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-8">The Social Audit Checklist</h3>
                <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium">
                  Financial transparency is the backbone of trust in the non-profit sector. We help you maintain perfect books and statutory reports to attract high-impact donors.
                </p>
                <Link to="/contact" className="button-primary bg-red-600 hover:bg-[#1B3942] py-5 text-center text-white shadow-2xl shadow-red-100">
                  Request NGO Audit
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <DocumentListPopup 
        serviceSlug="ngo-non-profit-services"
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </>
  )
}

export default NGOPage
