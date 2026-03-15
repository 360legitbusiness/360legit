import { FiMail, FiMapPin, FiPhone, FiSmartphone, FiMessageCircle, FiClock, FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ConsultationLeadForm from '../components/ConsultationLeadForm'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { companyName, contactInfo, socialLinks } from '../data/siteData'

function ContactPage() {
  const mapQuery = encodeURIComponent(contactInfo.address)

  return (
    <>
      <SEO
        title="Contact Our Advisors"
        description={`Connect with ${companyName} for direct taxation, legal compliance, and startup consultancy. Visit our Delhi office or schedule a call online.`}
        keywords="contact consultancy delhi, business advisory contact, tax consultant phone number, legal compliance office"
      />

      {/* Premium Hero Section */}
      <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 bg-[#FDFCFB] overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute right-[-10%] bottom-[-20%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
        </div>

        <div className="section-shell relative z-10">
          <Reveal>
            <div className="w-full relative group overflow-hidden rounded-[2.5rem] sm:rounded-[4rem] border border-orange-100/50 bg-[#1B3942] shadow-[0_40px_80px_-20px_rgba(27,57,66,0.3)] transition-all duration-700">
              {/* Animated Background Gradients & Grid for the Integrated Banner */}
              <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-orange-500/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-animated-orange-grid" />
              </div>

              {/* Banner Content Layout */}
              <div className="relative z-10 p-10 sm:p-20 grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
                
                {/* Left: Branding Text Inline with Logo Design */}
                <div className="text-left">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-400 mb-8 backdrop-blur-sm">
                    <FiMessageCircle size={14} className="fill-orange-400/20" /> Global Advisory Support
                  </span>
                  <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                    Let's Start a <span className="text-orange-400 italic">Conversation</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-lg">
                    Whether you're a startup looking to incorporate or an enterprise optimizing tax, our domain experts are at your service.
                  </p>
                </div>

                {/* Right: Large Logo with Compact White Background */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative p-4 sm:p-6 bg-white rounded-[2.5rem] border-2 border-orange-500/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-1000 group-hover:scale-105 group-hover:border-orange-500/30 animate-float-slow">
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50 rounded-[2.3rem]" />
                    
                    <img 
                      src="contact us logo banner .png" 
                      alt="360 Legit Business Solution Banner Logo" 
                      className="relative z-10 h-40 sm:h-80 w-auto object-contain drop-shadow-xl transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                </div>

              </div>

              {/* Decorative Accent Line at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="section-space pt-0">
        <div className="section-shell">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left Column: Contact Methods */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="space-y-8">
                  <div className="mb-12">
                    <h2 className="font-serif text-4xl font-bold text-[#1B3942] mb-6">Direct Channels</h2>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      Reach out via any of these channels for a direct response from our support office.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {[
                      { 
                        icon: FiMapPin, 
                        label: 'Corporate Office', 
                        value: contactInfo.address,
                        type: 'text'
                      },
                      { 
                        icon: FiPhone, 
                        label: 'Direct Line', 
                        value: contactInfo.phonePrimary,
                        link: `tel:${contactInfo.phonePrimary.replace(/\s+/g, '')}`,
                        type: 'link'
                      },
                      { 
                        icon: FiMail, 
                        label: 'Official Email', 
                        value: contactInfo.email,
                        link: `mailto:${contactInfo.email}`,
                        type: 'link'
                      },
                      { 
                        icon: FiSmartphone, 
                        label: 'WhatsApp Support', 
                        value: 'Click to start chat',
                        link: socialLinks.whatsapp,
                        type: 'whatsapp'
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="group p-6 sm:p-8 rounded-[2rem] border border-slate-100 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] hover:-translate-y-1 hover:border-orange-100">
                        <div className="flex gap-5 sm:gap-6 items-center sm:items-start">
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-orange-200">
                            <item.icon size={24} />
                          </div>
                          <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-1.5">{item.label}</p>
                            {item.type === 'link' ? (
                              <a href={item.link} className="text-lg sm:text-xl font-bold text-[#1B3942] hover:text-orange-600 transition-colors">
                                {item.value}
                              </a>
                            ) : item.type === 'whatsapp' ? (
                              <a href={item.link} target="_blank" rel="noreferrer" className="text-lg sm:text-xl font-bold text-[#1B3942] hover:text-orange-600 transition-colors flex items-center gap-2">
                                {item.value} <FiMessageCircle size={20} className="text-emerald-500 bg-emerald-50 rounded-full p-0.5" />
                              </a>
                            ) : (
                              <p className="text-lg sm:text-xl font-bold text-[#1B3942] leading-tight">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Operational Hours */}
                  <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex items-center gap-6 mt-12 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="h-14 w-14 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-orange-500 shrink-0 z-10">
                      <FiClock size={24} />
                    </div>
                    <div className="z-10">
                      <h4 className="font-bold text-[#1B3942] text-lg">Operational Hours</h4>
                      <p className="text-sm text-slate-500 font-medium mt-1">Mon - Sat: 10:00 AM - 07:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Leads Form */}
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="relative p-2 sm:p-4 bg-white rounded-[3rem] shadow-2xl border border-slate-100">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/50 to-transparent rounded-[4rem] blur-2xl -z-10 pointer-events-none" />
                  <ConsultationLeadForm
                    title="Send a Case Inquiry"
                    subtitle="Share your specific requirements and our domain specialists will prepare a preliminary analysis for you."
                    buttonLabel="Submit Request"
                  />
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4 px-4 pb-4">
                    {[
                      'Data Confidentiality Guaranteed',
                      'Direct Advisory, No Call Centers',
                      'Initial Review within 24 Hours',
                      'Structured Pricing Proposals'
                    ].map((tick, i) => (
                      <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <FiCheck className="text-white bg-emerald-500 rounded-full p-0.5" size={16} /> 
                        {tick}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-space pt-0">
        <div className="section-shell">
          <Reveal>
            <div className="relative group overflow-hidden rounded-[3rem] border border-orange-100 shadow-2xl bg-white p-2">
              <iframe
                title="Office location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                className="h-[450px] w-full rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-10 right-10 hidden md:block">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                  <h4 className="font-bold text-[#1B3942] mb-2 flex items-center gap-2">
                    <FiMapPin className="text-orange-500" /> Visit Our Hub
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Our Delhi HQ is designed to host strategy sessions for founders and corporate clients.
                  </p>
                  <Link to="/contact" className="mt-4 block text-center py-2 bg-slate-900 text-white text-[10px] font-bold uppercase rounded-xl hover:bg-orange-600 transition">
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default ContactPage
