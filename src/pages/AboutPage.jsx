import { FiAward, FiCompass, FiEye, FiUsers, FiTarget, FiActivity, FiShield, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import consultantImg from '../assets/consultant.png'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { companyName, industriesServed } from '../data/siteData'

function AboutPage() {
  return (
    <>
      <SEO
        title="About Our Legacy & Expertise"
        description={`${companyName} is a premium business consultancy firm specializing in taxation, legal compliance, and startup advisory. Discover our mission to empower Indian enterprises.`}
        keywords="about business consultancy, financial advisory delhi, startup consultants india, compliance experts"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1B3942] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="section-shell relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 mb-8">
                Since 2020
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                Pioneering <span className="text-orange-400 italic">Trusted</span> Business Advisory.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
                {companyName} was founded with a singular purpose: to bridge the gap between complex regulation and entrepreneurial growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side by Side */}
      <section className="section-space relative -mt-16 z-20 pt-0">
        <div className="section-shell">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <article className="group bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 transition-all hover:scale-[1.02]">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <FiEye size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#1B3942] mb-6 tracking-tight">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become India's most respected consultancy partner, known for absolute transparency, strategic foresight, and unwavering commitment to client success.
                </p>
              </article>
            </Reveal>
            <Reveal delay={300}>
              <article className="group bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 transition-all hover:scale-[1.02]">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <FiTarget size={28} />
                </div>
                <h2 className="text-3xl font-bold text-[#1B3942] mb-6 tracking-tight">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To simplify the regulatory landscape for businesses through proactive advisory, modern technical integration, and human-centric delivery.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-space overflow-hidden">
        <div className="section-shell">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Images (Sticky for better navigation) */}
            <div className="lg:sticky lg:top-32 space-y-12">
              <Reveal>
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 mb-6">
                    Our Leadership
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3942] leading-tight mb-8">
                    Founders – <br />
                    <span className="text-orange-600">Aditya Sharma & <br />Manu Sharma</span>
                  </h2>
                </div>
              </Reveal>

              <div className="flex flex-col gap-10 max-w-md">
                <Reveal delay={100}>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-xl group ring-1 ring-slate-200 bg-white aspect-[4/5]">
                    <img 
                      src="owner.png" 
                      alt="Aditya Sharma" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3942]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                       <p className="text-white font-bold text-sm bg-orange-600 px-3 py-1.5 rounded-lg shadow-lg inline-block">Aditya Sharma</p>
                    </div>
                  </div>
                </Reveal>
                
                <Reveal delay={300}>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-xl group ring-1 ring-slate-200 bg-white aspect-[4/5]">
                    <img 
                      src="Owner 2.png" 
                      alt="Manu Sharma" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3942]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                       <p className="text-white font-bold text-sm bg-orange-600 px-3 py-1.5 rounded-lg shadow-lg inline-block">Manu Sharma</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            
            {/* Right Column: Detailed Bio */}
            <div className="space-y-10 lg:pt-32">
              <Reveal delay={400}>
                <div className="space-y-8">
                  <div className="bg-[#1B3942] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group mb-12">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    <p className="text-slate-100 font-serif italic text-xl md:text-2xl leading-relaxed relative z-10">
                      "Compliance is no longer a chore; it's a competitive advantage. We established {companyName} to build robust financial frameworks so you can focus entirely on scaling your vision."
                    </p>
                  </div>

                  <div className="prose prose-slate lg:prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      Aditya Sharma and Manu Sharma are the Founder Directors of {companyName}, bringing together over <span className="text-[#1B3942] font-bold underline decoration-orange-500 decoration-2 underline-offset-4">15+ years</span> of diversified professional experience in the fields of finance, taxation, compliance, and business advisory. 
                    </p>
                    
                    <p className="text-lg text-slate-600 leading-relaxed">
                      With strong academic backgrounds supported by Master’s Degrees, they have developed deep expertise in managing financial, regulatory, and taxation matters across multiple industries. Over the years, they have worked with and advised organizations from a wide spectrum of sectors, including:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                      {[
                        'Pharmaceuticals', 'Tour & Travel', 'Steel Manufacturing', 
                        'Educational Institutions', 'Hospitals', 'Construction Companies', 
                        'Hardware Trading', 'Toy Manufacturing', 'Beverages Industry'
                      ].map(item => (
                        <div key={item} className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          <span className="text-sm font-bold text-[#1B3942] uppercase tracking-wide">{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      Their extensive cross-industry exposure has enabled them to develop a comprehensive understanding of varied business models, operational challenges, and regulatory environments. Driven by a shared vision to provide integrated business and financial solutions, they established {companyName} to deliver end-to-end consultancy services.
                    </p>
                    
                    <div className="bg-orange-50/50 p-8 rounded-3xl border-l-8 border-orange-500 my-10">
                      <p className="text-lg text-slate-700 leading-relaxed italic font-medium">
                        Through professional integrity, technical expertise, and industry insight, Aditya Sharma and Manu Sharma continue to assist businesses and entrepreneurs in achieving sustainable growth, strong financial governance, and regulatory excellence.
                      </p>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      Today, their leadership helps {companyName} specialize in Income Tax, GST compliance, accounting systems, regulatory compliance, startup advisory, and business support services, creating a 360-degree support ecosystem for modern Indian enterprises.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Expert Consultant Section */}
      <section className="section-space bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        <div className="section-shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 mb-6">
                Specialized Advisory
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3942] leading-tight">
                Meet Our <span className="text-orange-600 italic">Expert Consultant</span>
              </h2>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto">
            <Reveal delay={200}>
              <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                {/* Image Side */}
                <div className="w-full md:w-2/5 aspect-[4/5] relative group">
                  <div className="absolute -inset-4 bg-orange-500/5 rounded-[3rem] blur-2xl group-hover:bg-orange-500/10 transition-colors duration-700" />
                  <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={consultantImg} 
                      alt="Krishna Aditya Sharma" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1B3942] mb-2">Krishna Aditya Sharma</h3>
                  <p className="text-orange-600 font-extrabold uppercase tracking-widest text-xs mb-8">Expert Business Consultant</p>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      Krishna brings a precise and strategic approach to business consultancy, specializing in streamlining complex financial operations and compliance frameworks for modern enterprises.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                          <FiShield size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1B3942]">Strategic Audit</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Financial Governance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          <FiTrendingUp size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1B3942]">Market Analysis</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Growth Planning</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100">
                      <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] bg-[#1B3942] text-white px-8 py-4 rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
                        Book a Private session <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-space bg-[#FDFCFB]">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Global Reach"
              title="Expertise Across Diverse Sectors"
              description="We provide vertical-specific advisory to ensure localized compliance and strategic relevance."
              centered
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {industriesServed.map((industry, index) => (
              <Reveal key={industry} delay={index * 50}>
                <div className="group bg-white p-8 rounded-2xl border border-slate-100 text-center transition-all hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50">
                  <FiActivity className="mx-auto mb-4 text-orange-500 opacity-40 group-hover:opacity-100 transition-opacity" size={20} />
                  <p className="text-sm font-extrabold text-[#1B3942] uppercase tracking-tighter">{industry}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core Expertise"
              title="Built on Solid Principles"
              description="Our delivery model is centered around four pillars of excellence."
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {[
              {
                icon: FiShield,
                title: 'High Accountability',
                text: 'We take full ownership of your compliance deadlines and reporting quality.',
              },
              {
                icon: FiUsers,
                title: 'Dedicated Teams',
                text: 'Specialists for every domain—from GST filing to legal ROC compliances.',
              },
              {
                icon: FiTrendingUp,
                title: 'Growth Strategy',
                text: 'Proactive planning that saves you taxes and prepares you for investment.',
              },
              {
                icon: FiAward,
                title: 'Ethics First',
                text: 'Absolute integrity in every advisory session and regulatory interaction.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="h-full p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-orange-100 transition-all duration-300">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-orange-600 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B3942] mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{item.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

