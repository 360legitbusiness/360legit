import { useEffect, useState } from 'react'
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiActivity,
  FiZap,
  FiFileText,
  FiLayers,
  FiBriefcase,
  FiBookOpen,
  FiHeart,
  FiGlobe,
  FiStar,
  FiTarget,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ConsultationLeadForm from '../components/ConsultationLeadForm'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { clientBenefits, homeWhatWeOffer, clientReviews } from '../data/siteData'
import homeHero from '../assets/home.jpeg'

const trustFeatureCards = [
  {
    icon: FiAward,
    title: 'Expert Financial Advisors',
    description: 'Certified CAs, CS, and business consultants at your service.',
  },
  {
    icon: FiUsers,
    title: 'Trusted Business Consultancy',
    description: 'Your reliable partner for all taxation and business needs.',
  },
  {
    icon: FiShield,
    title: 'Complete Compliance Solutions',
    description: 'End-to-end management of all your legal filings and registrations.',
  },
  {
    icon: FiTrendingUp,
    title: 'Startup Friendly Services',
    description: 'Specialized packages to help new businesses launch successfully.',
  },
]

const serviceIconsMap = {
  'taxation-services': FiFileText,
  'gst-services': FiLayers,
  'business-registration': FiBriefcase,
  'legal-regulatory-compliance': FiShield,
  'accounting-automation': FiBookOpen,
  'labour-law-compliance': FiUsers,
  'ngo-non-profit-services': FiHeart,
  'intellectual-property': FiGlobe,
  'business-support-services': FiActivity,
  'us-taxation-services': FiGlobe,
  'lower-deduction-certificates': FiFileText,
}

const benefitIcons = [FiTrendingUp, FiShield, FiTarget, FiStar]

function HomePage() {
  const [activeService, setActiveService] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 100, // Increased for stronger 3D parallax
        y: (e.clientY / window.innerHeight - 0.5) * 100,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!activeService) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveService(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [activeService])

  return (
    <>
      <SEO
        title="Complete 360 Degree Business Consultancy Solutions"
        description="Professional taxation, compliance and business advisory services for startups, SMEs and corporates."
        keywords="financial consultancy, taxation services, compliance advisory, startup consultancy, GST services"
      />

      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#1B3942]">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/20 blur-[120px] rounded-full transition-transform duration-1000 ease-out"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[150px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          />
        </div>

        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{ transform: `translate(${-mousePos.x * 0.15}px, ${-mousePos.y * 0.15}px)` }}
            >
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-400 mb-8 backdrop-blur-sm">
                  <FiZap className="fill-orange-400" /> Premium Corporate Advisory
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                  360° Business <span className="text-orange-500 italic">Consultancy</span> Solutions
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-12 font-medium">
                  Professional taxation, compliance, and strategic advisory services. We build robust financial frameworks so you can focus entirely on scaling your vision.
                </p>

                <div className="flex flex-wrap gap-5">
                  <Link to="/contact" className="button-primary px-8 py-5 text-sm uppercase tracking-widest font-extrabold shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all duration-300">
                    Get Consultation
                  </Link>
                  <Link to="/services" className="button-secondary bg-white/5 border border-white/10 text-white px-8 py-5 text-sm uppercase tracking-widest font-extrabold backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                    Explore Services
                  </Link>
                </div>

                <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
                  {[
                    { label: 'Consultations', value: '500+' },
                    { label: 'Compliance Cases', value: '1200+' },
                    { label: 'Client Retention', value: '98%' },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-3xl font-bold text-orange-400">{stat.value}</span>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Image/Graphic with Parallax */}
            <div className="relative hidden lg:block perspective-1000">
              <Reveal delay={200}>
                <div
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#12262d] transition-transform duration-300 ease-out"
                  style={{
                    transform: `rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg) translateY(${scrollY * 0.1}px)`,
                    transformStyle: 'preserve-3d',
                    boxShadow: `${-mousePos.x * 0.5}px ${-mousePos.y * 0.5}px 40px rgba(0,0,0,0.4)`
                  }}
                >
                  <img
                    src={homeHero}
                    alt="360 Legit Business Solution - Digital Financial Ecosystem"
                    className="w-full aspect-[4/5] object-cover opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3942] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Element */}
                <div
                  className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl transition-transform duration-700 ease-out"
                  style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg">
                      <FiActivity size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-orange-300 uppercase tracking-widest">Growth</p>
                      <p className="text-xl font-bold text-white leading-none mt-1">Accelerated</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-space bg-[#FDFCFB] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 rounded-l-[120px] -z-10" />
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="End-to-End Business Consultancy"
              description="From registration and tax planning to ongoing compliance, we build a complete advisory stack for your business growth."
              centered
            />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 mt-16">
            {homeWhatWeOffer.map((service, index) => {
              const ServiceIcon = serviceIconsMap[service.slug] || FiActivity
              return (
                <Reveal key={service.title} delay={index * 100}>
                  <article
                    className="group h-full p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-20px_rgba(27,57,66,0.05)] transition-all duration-300 hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.15)] flex flex-col justify-between"
                    style={{
                      transform: `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${-mousePos.x * 0.05}deg) translateZ(0)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div style={{ transform: 'translateZ(30px)' }}>
                      <div className="w-16 h-16 bg-orange-50/80 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm border border-orange-100/50">
                        <ServiceIcon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1B3942] group-hover:text-orange-600 transition-colors tracking-tight">{service.title}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-slate-500 font-medium">{service.description}</p>
                      <div className="mt-6 space-y-3">
                        {service.services.map((item) => (
                          <div key={item} className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl">
                            <FiCheckCircle className="text-orange-500 shrink-0" size={16} />
                            <span className="text-xs font-bold uppercase tracking-wide text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between" style={{ transform: 'translateZ(40px)' }}>
                      {service.moreServicesLabel && (
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                          {service.moreServicesLabel}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => setActiveService(service)}
                        className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 text-orange-600 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 ml-auto shadow-sm"
                      >
                        <FiArrowRight size={20} />
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1B3942] text-white text-sm font-bold uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-colors shadow-xl"
              >
                View All Services
                <FiArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="section-space bg-[#1B3942] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px]" />
        </div>

        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-[10px]">Why Choose Us</span>
                <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 leading-[1.1] mb-8">
                  India's Trusted <span className="text-orange-400 italic mt-2 block">360° Partner</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed font-medium mb-10">
                  360 Legit Business Solution creates practical systems that reduce risk and make growth easier to manage. Our advisory-first model means you always have an expert in your corner.
                </p>
                <ul className="space-y-6">
                  {[
                    'Certified CA, CS and legal professionals on board',
                    'Dedicated relationship manager for every client',
                    'Proactive compliance reminders and filing calendar',
                    'Confidential document workflow with secure handling',
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 h-6 w-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                        <FiCheckCircle size={14} />
                      </div>
                      <span className="text-slate-200 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustFeatureCards.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Reveal key={feature.title} delay={index * 150}>
                    <article
                      className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-transform duration-300 ease-out"
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePos.y * 0.08}deg) rotateY(${-mousePos.x * 0.08}deg) translateZ(0)`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500" style={{ transform: 'translateZ(20px)' }}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-orange-300 transition-colors" style={{ transform: 'translateZ(30px)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium transition-colors" style={{ transform: 'translateZ(10px)' }}>
                        {feature.description}
                      </p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Consultation Form */}
      <section className="section-space bg-slate-50">
        <div className="section-shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Client Benefits"
              title="Practical Outcomes That Strengthen Operations"
              description="Our advisory-first model helps you reduce risks, improve reporting and unlock growth opportunities seamlessly."
            />
            <ul className="grid gap-5 mt-10">
              {clientBenefits.map((benefit, idx) => {
                const BenefitIcon = benefitIcons[idx % benefitIcons.length]
                return (
                  <li key={idx} className="group flex items-center gap-5 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-100">
                    <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors duration-500 border border-slate-100 group-hover:border-orange-100">
                      <BenefitIcon size={24} />
                    </div>
                    <span className="text-[16px] font-semibold text-[#1B3942] group-hover:text-orange-600 transition-colors leading-relaxed">{benefit}</span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-2xl z-0" />
              <div className="relative z-10">
                <ConsultationLeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client Satisfaction / Reviews Section */}
      <section className="section-space relative overflow-hidden bg-[#FDFCFB]">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
        <div className="section-shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Client Satisfaction"
              title="Trusted by Emerging Startups & established Corporates"
              description="See how our 360 degree integrated advisory approach has transformed businesses across various sectors."
              centered
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {clientReviews.map((review, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-20px_rgba(27,57,66,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.15)] transition-all duration-300 group h-full flex flex-col justify-between"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePos.y * 0.05}deg) rotateY(${-mousePos.x * 0.05}deg) translateZ(0)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex gap-1 mb-6 text-orange-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <FiStar key={i} size={18} className="fill-orange-500" />
                      ))}
                    </div>
                    <p className="text-slate-600 font-serif italic text-lg leading-relaxed mb-8">
                      "{review.review}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6" style={{ transform: 'translateZ(10px)' }}>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1B3942] to-[#2c5360] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B3942] tracking-tight">{review.name}</h4>
                      <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">{review.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-space">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-500 to-red-600 p-10 md:p-16 text-white shadow-3xl shadow-orange-200">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl text-center md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-100 mb-4">Take the Next Step</p>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
                    Need expert business consultancy?
                  </h2>
                </div>

                <Link to="/contact" className="px-10 py-5 bg-[#1B3942] text-white font-extrabold uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-orange-600 transition-all shadow-2xl border border-transparent hover:border-orange-100 whitespace-nowrap">
                  Book A Consultation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Modal */}
      {activeService ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1B3942]/80 p-4 backdrop-blur-md transition-all"
          onClick={() => setActiveService(null)}
          role="presentation"
        >
          <div
            className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 md:p-12 shadow-2xl relative animate-in fade-in zoom-in duration-300"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeService.title} details`}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-500 mb-4">Service Details</p>
            <h3 className="text-3xl font-bold text-[#1B3942] tracking-tight">{activeService.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500 font-medium">{activeService.description}</p>

            <div className="mt-8 bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-4">Included Services</p>
              <ul className="space-y-3">
                {activeService.services.map((item) => (
                  <li key={item} className="flex items-center gap-3 bg-white border border-slate-100 px-4 py-3 rounded-xl shadow-sm">
                    <FiCheckCircle className="text-orange-500 shrink-0" size={16} />
                    <span className="text-sm font-bold text-[#1B3942]">{item}</span>
                  </li>
                ))}
              </ul>
              {activeService.moreServicesLabel ? (
                <p className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-orange-500 text-center">
                  {activeService.moreServicesLabel}
                </p>
              ) : null}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to={`/services/${activeService.slug}`}
                className="flex-1 text-center py-4 bg-orange-500 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                onClick={() => setActiveService(null)}
              >
                Go to {activeService.title} Page
              </Link>
              <button
                type="button"
                className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-slate-200 transition-colors"
                onClick={() => setActiveService(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default HomePage

