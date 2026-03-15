import {
  FiFileText,
  FiPieChart,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiZap,
  FiActivity
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/SectionHeading'
import { companyName } from '../../data/siteData'

const taxationItems = [
  {
    title: 'Income Tax Consultancy',
    description: 'Expert advisory for individuals and corporates to optimize tax structures and ensure 100% compliance with latest IT laws.',
    features: ['Tax Planning & Optimization', 'Salary Structuring', 'Capital Gains Advisory', 'NRI Taxation'],
    icon: FiPieChart,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Income Tax Return Filing',
    description: 'Seamless filing of ITR-1 to ITR-7 with multi-level verification to prevent notices and ensure maximum accuracy.',
    features: ['Business ITR Filing', 'Individual/HUF Returns', 'Audit Support', 'Revised Returns'],
    icon: FiFileText,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'HUF Registration & Filing',
    description: 'Forming Hindu Undivided Families (HUF) for tax optimization, deed preparation, PAN application, and specialized annual tax management.',
    features: ['HUF Deed Preparation', 'PAN Application Support', 'Tax Planning for HUF', 'Annual Compliance'],
    icon: FiActivity,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'TDS Return Filing',
    description: 'Complete assistance for quarterly TDS returns, certificate issuance, and addressing defaults to ensure seamless compliance.',
    features: ['Form 24Q, 26Q, 27Q Filing', 'TDS Certificate (Form 16/16A)', 'TDS Correction Returns', 'TDS Notice Resolution'],
    icon: FiShield,
    color: 'bg-green-50 text-green-600'
  }
]

const specializedServices = [
  {
    title: 'Tax Planning Advisory',
    text: 'Long-term strategies to minimize tax liability legally using available deductions and exemptions under the IT Act.',
    icon: FiTrendingUp
  },
  {
    title: 'HUF Registration & Filing',
    text: 'Forming Hindu Undivided Families (HUF) for tax benefits, deed preparation, PAN application, and annual tax management.',
    icon: FiActivity
  },
  {
    title: 'TDS Return Filing',
    text: 'Complete assistance for quarterly TDS returns (24Q, 26Q), certificate issuance, and addressing defaults.',
    icon: FiShield
  },
  {
    title: 'Tax Notices Support',
    text: 'Professional representation and drafting replies for Scrutiny Notices, Rectifications, and Appeals.',
    icon: FiShield
  }

]

function TaxationServicesPage() {
  return (
    <>
      <SEO
        title="Income Tax Consultancy & Return Filing"
        description={`Professional Income Tax services by ${companyName}. From tax planning and optimization to handling complex notices.`}
        keywords="income tax filing india, tax consultant delhi, tax planning advisory, income tax notice reply"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FDFCFB]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 rounded-l-[120px] -z-10" />

        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[10px] font-extrabold uppercase tracking-widest text-orange-600 mb-6">
                  <FiZap className="fill-orange-600" /> Strategic Taxation
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                  Taxation <span className="text-orange-600 italic">Simplified</span>, Growth <span className="underline decoration-orange-200 decoration-4 underline-offset-8">Multiplied</span>.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Navigate the complexities of Indian Income Tax laws with our expert advisory. We don't just file your returns; we engineer your tax efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="button-primary px-10 py-5">
                    Start Tax Consultation
                  </Link>
                  <a href="#details" className="button-secondary bg-white border border-slate-200 px-10 py-5">
                    Explore Services
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white p-3 bg-white/50 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
                    alt="Tax professional working"
                    className="w-full aspect-[4/5] object-cover rounded-[2.5rem]"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-10 -right-10 bg-[#1B3942] p-8 rounded-3xl shadow-2xl text-white hidden md:block max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <FiActivity />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Optimization</p>
                      <p className="text-lg font-bold">100% Compliant</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our multi-layer verification process ensures zero errors and maximum tax savings for every filing.
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
              eyebrow="Core Offerings"
              title="Expertise in Every Tax Bracket"
              description="From straightforward ITR filings to complex corporate tax planning, we provide end-to-end solutions tailored to your financial profile."
              centered
            />
          </Reveal>

          <div className="grid gap-12 mt-16">
            {taxationItems.map((item, index) => {
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
                      {/* Visual placeholder for each service */}
                      <div className="text-center">
                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl mb-6">
                          <Icon size={32} className="text-orange-500" />
                        </div>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Professional Report Generation</p>
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
      <section className="section-space bg-[#1B3942] text-white">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-xs">Advanced Support</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Beyond Standard <span className="text-orange-400 italic">Compliance</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => {
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
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 hover:text-white transition-colors">
                      Learn Procedure <FiArrowRight />
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
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-500 to-red-600 p-10 md:p-20 text-white shadow-3xl shadow-orange-200">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                  <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-8">
                    Don't Just File.<br /><span className="text-orange-100">Strategize Your Wealth.</span>
                  </h2>
                  <p className="text-orange-50 text-xl opacity-90 leading-relaxed">
                    Partner with the specialists who understand your financial goals. Get a personalized tax roadmap today.
                  </p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <Link to="/contact" className="px-10 py-5 bg-[#1B3942] text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-orange-600 transition-all shadow-2xl text-center">
                    Book a Specialist Call
                  </Link>
                  <p className="text-[10px] text-center uppercase tracking-widest text-orange-100 font-bold opacity-80">
                    Confidential • Expert-Led • Quick Response
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

export default TaxationServicesPage
