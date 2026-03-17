import { 
  FiLayers, 
  FiCheckCircle, 
  FiArrowRight, 
  FiZap, 
  FiShield, 
  FiSearch,
  FiFileText,
  FiCrosshair
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import DocumentListPopup from '../../components/DocumentListPopup'
import { companyName } from '../../data/siteData'
import heroImage from '../../assets/services/gst-hero.png'
import { useState } from 'react'

const gstServices = [
  {
    title: 'GST Registration',
    description: 'Quick and hassle-free GST registration for new businesses, including documentation review and application tracking.',
    features: ['New GST Enrollment', 'Composition Scheme Opt-in', 'Amendment of Registration', 'Cancellation Support'],
    icon: FiZap,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'GST Return Filing',
    description: 'Timely and accurate filing of GSTR-1, GSTR-3B, and GSTR-9 to avoid late fees and maintain a high compliance score.',
    features: ['Monthly/Quarterly Filing', 'Input Tax Credit (ITC) Recon', 'GSTR-2A/2B Reconciliation', 'Annual Returns'],
    icon: FiFileText,
    color: 'bg-orange-50 text-orange-600'
  }
]

const auditSupport = [
  {
    title: 'GST Audit Support',
    text: 'Preparation of records for departmental audits and assistance during the verification process.',
    icon: FiSearch
  },
  {
    title: 'Notice Handling',
    text: 'Drafting legal replies to GST ASMT-10 notices and handling discrepancies in ITC or liability.',
    icon: FiShield
  }
]

function GSTServicesPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false)

  return (
    <>
      <SEO
        title="GST Registration & Return Filing Services"
        description={`End-to-end GST solutions by ${companyName}. Registration, monthly filing, reconciliation, and audit support for modern businesses.`}
        keywords="gst registration delhi, gst return filing online, gst reconciliation tool, gst audit help"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px]" />
        </div>
        
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 mb-6">
                  <FiCrosshair /> Compliance Precision
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  GST Management with <span className="text-emerald-600 italic">Zero Errors</span>.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Stay ahead of the Indirect Tax curve. We provide automated reconciliation and expert filing to ensure your GST compliance is always green.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary bg-emerald-600 hover:bg-emerald-700 px-10 py-5">
                    Consult GST Expert
                  </Link>
                  <button 
                    onClick={() => setIsDocsOpen(true)}
                    className="button-secondary bg-white border border-slate-200 px-10 py-5 flex items-center gap-2 group"
                  >
                    <FiFileText className="text-emerald-600 group-hover:scale-110 transition-transform" />
                    Required Documents
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="bg-white p-2 rounded-[3.5rem] shadow-3xl">
                  <img 
                    src={heroImage} 
                    alt="Financial document review" 
                    className="w-full aspect-square object-cover rounded-[3rem]"
                  />
                </div>
                {/* Floating Metrics */}
                <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-emerald-50 hidden md:block">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <p className="text-xs font-bold text-[#1B3942]">99.9% Accuracy Rate</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <p className="text-xs font-bold text-[#1B3942]">Automated ITC Matching</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Seamless Solutions"
              title="GST Operations Handled by Experts"
              description="We manage the entire GST lifecycle so you can focus on scaling your sales and operations."
              centered
            />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {gstServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={index * 100}>
                  <div className="group h-full bg-white rounded-[3rem] border border-slate-100 p-10 transition-all hover:bg-[#1B3942] hover:shadow-2xl">
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} group-hover:bg-white group-hover:text-[#1B3942] transition-all duration-500`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1B3942] group-hover:text-white mb-6 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-lg text-slate-500 group-hover:text-slate-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#1B3942] group-hover:text-emerald-400">
                          <FiCheckCircle size={16} /> {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advisory Support Grid */}
      <section className="section-space bg-[#FDFCFB]">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3942] mb-8 leading-tight">
                  Tackling Queries & <span className="text-emerald-600 italic">Audits</span>.
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                  Departmental notices and audits can be daunting. Our seasoned tax professionals provide heavy-lifting support for representation and reconciliation.
                </p>
                <div className="space-y-6">
                  {auditSupport.map((item, idx) => (
                    <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:border-emerald-200">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1B3942] mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-[#1B3942] p-12 md:p-16 rounded-[4rem] text-white">
                <h3 className="font-serif text-3xl font-bold mb-8">Quarterly GST Health Check</h3>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                  We provide a comprehensive review of your GSTR-1 vs 2A/2B, ensuring all purchase credits are captured and no liability is missed.
                </p>
                <ul className="space-y-4 mb-12">
                  {['ITC Leakage Identification', 'Vendor Compliance Tracking', 'Output Liability Audit'].map(point => (
                    <li key={point} className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-widest text-emerald-400">
                      <FiLayers size={16} /> {point}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="button-primary w-full bg-emerald-600 hover:bg-emerald-500 py-5 text-center shadow-emerald-900/40 shadow-2xl">
                  Schedule Health Check
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-10 md:p-20 bg-emerald-50 rounded-[3rem] border border-emerald-100">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-serif text-4xl font-bold text-[#1B3942] mb-4">Ready to automate your GST?</h2>
                <p className="text-slate-600 text-lg">Talk to our advisors and see how we can streamline your monthly filings with 100% precision.</p>
              </div>
              <Link to="/contact" className="button-primary bg-emerald-600 hover:bg-[#1B3942] px-12 py-5 shadow-emerald-200 shadow-2xl">
                Get Started Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <DocumentListPopup 
        serviceSlug="gst-services"
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </>
  )
}

export default GSTServicesPage
