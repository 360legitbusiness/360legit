import { 
  FiArrowRight, 
  FiFileText, 
  FiLayers, 
  FiBriefcase, 
  FiShield, 
  FiBookOpen, 
  FiUsers, 
  FiHeart, 
  FiGlobe, 
  FiChevronRight,
  FiPieChart,
  FiCheckCircle
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { serviceCategories, companyName } from '../data/siteData'

const serviceIcons = {
  'taxation-services': FiFileText,
  'gst-services': FiLayers,
  'business-registration': FiBriefcase,
  'legal-regulatory-compliance': FiShield,
  'accounting-automation': FiBookOpen,
  'labour-law-compliance': FiUsers,
  'ngo-non-profit-services': FiHeart,
  'intellectual-property': FiGlobe,
  'business-support-services': FiChevronRight,
  'us-taxation-services': FiGlobe,
  'lower-deduction-certificates': FiFileText,
}

function ServicesPage() {
  return (
    <>
      <SEO
        title="Premium Business Services"
        description="Comprehensive taxation, GST, registration, compliance, accounting, and legal consultancy services for startups and SMEs."
        keywords="taxation services, GST services, ROC compliance, accounting services, trademark registration, business consultancy"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="section-shell">
          <Reveal>
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-6">
                Expert Solutions
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
                Structured Portfolio for <span className="text-orange-600 italic">Strategic Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                From taxation and GST to full-scale business automation, we provide the regulatory foundation your company needs to scale with absolute confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="button-primary px-8">
                  Get Free Consultation
                </Link>
                <button 
                  onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button-secondary px-8 cursor-pointer"
                >
                  View All Categories
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="section-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Services Offered', value: '45+' },
              { label: 'Expert Advisors', value: '12+' },
              { label: 'Compliance Rate', value: '100%' },
              { label: 'Client Satisfaction', value: '99%' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-3xl font-extrabold text-[#1B3942] mb-1">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="section-space bg-[#FDFCFB]">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our Expertise"
              title="Tailored Solutions for Every Business Stage"
              description="Whether you are a budding startup or an established enterprise, our specialized service categories cover every regulatory and financial need."
              centered
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {serviceCategories.map((category, index) => {
              const Icon = serviceIcons[category.slug] || FiPieChart
              return (
                <Reveal key={category.title} delay={index * 50}>
                  <article 
                    id={category.slug} 
                    className="group relative flex flex-col h-full bg-white rounded-3xl border border-orange-100/30 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.15)] scroll-mt-32 overflow-hidden"
                  >
                    {/* Decorative Background Icon */}
                    <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-orange-500 group-hover:opacity-[0.08] transition-opacity duration-500">
                      <Icon size={120} />
                    </div>

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500 shadow-sm shadow-orange-100">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3942] mb-6 tracking-tight group-hover:text-orange-600 transition-colors">
                      {category.title}
                    </h3>
                    <ul className="space-y-4 flex-grow relative z-10">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 group/item">
                          <FiCheckCircle className="mt-1 shrink-0 text-orange-500 opacity-60 group-hover/item:opacity-100 transition-opacity" size={14} />
                          <span className="text-sm font-bold text-slate-600 group-hover/item:text-[#1B3942] transition-colors leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-8 border-t border-slate-50 relative z-10">
                      <Link 
                        to={`/services/${category.slug}`} 
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 hover:gap-3 transition-all"
                      >
                        Learn More <FiArrowRight />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          {/* New CTA Button at the bottom of the grid */}
          <Reveal delay={200}>
            <div className="mt-20 text-center">
              <Link
                to="/contact"
                className="inline-flex flex-col items-center gap-6 group"
              >
                <div className="px-12 py-6 bg-orange-600 text-white rounded-2xl text-lg font-bold uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] hover:bg-[#1B3942] hover:shadow-[0_20px_40px_-10px_rgba(27,57,66,0.4)] transition-all duration-300 hover:-translate-y-1">
                  Contact us to claim service
                </div>
                <p className="text-slate-400 font-medium text-sm transition-colors group-hover:text-orange-600">
                  Ready to start? Fill out our contact form and our experts will reach out to you immediately.
                </p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-space">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-video shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business strategy meeting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3942]/80 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white font-serif text-2xl italic leading-relaxed">
                    "Precision in compliance is the backbone of sustainable business growth."
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="flex flex-col gap-8">
                <div className="max-w-md">
                  <h2 className="font-serif text-4xl font-bold text-[#1B3942] mb-6">Why Our Services Stand Out</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    We don't just file papers; we build systems. Our approach combines regulatory expertise with technological automation to give you real-time visibility into your business health.
                  </p>
                </div>
                
                <div className="grid gap-6">
                  {[
                    { title: 'Advisory Focused', desc: 'Practical guidance that goes beyond standard statutory requirements.' },
                    { title: 'Tech-Enabled', desc: 'Modern tools for seamless data exchange and reporting.' },
                    { title: 'Scale Ready', desc: 'Solutions that grow with you, from local startups to global firms.' }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-orange-50/50 border border-orange-100">
                      <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0 mt-1">
                        <FiCheckCircle size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1B3942] mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-space pt-0">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1B3942] p-10 md:p-20 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Ready to streamline your <span className="text-orange-400">business compliance?</span>
                  </h2>
                  <p className="text-slate-300 text-lg md:text-xl">
                    Partner with {companyName} and experience the difference of expert-led consultancy.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <Link to="/contact" className="button-primary bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 text-center">
                    Book a Specialist Call
                  </Link>
                  <p className="text-[10px] text-center uppercase tracking-widest text-slate-400 font-bold">
                    No hidden costs • Expert Advisory • Quick TAT
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

export default ServicesPage
