import { useEffect, useRef, useState } from 'react'
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiChevronDown,
  FiChevronRight,
  FiFacebook,
  FiFileText,
  FiGlobe,
  FiHeart,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiPhone,
  FiUsers,
  FiX,
  FiYoutube,
  FiShield,
} from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { companyName, contactInfo, navLinks, socialLinks } from '../data/siteData'
import usTaxThumb from '../assets/services/us-taxation-hero.png'
import ldcThumb from '../assets/services/ldc-hero.png'

const serviceMenu = [
  {
    slug: 'taxation-services',
    title: 'Taxation Services',
    icon: FiFileText,
    items: ['Income Tax', 'ITR Filing', 'HUF Registration', 'TDS Return Filing'],
  },
  {
    slug: 'gst-services',
    title: 'GST Services',
    icon: FiLayers,
    items: ['GST Registration', 'GST Return Filing', 'GST Audit Support', 'GST Notice Handling'],
  },
  {
    slug: 'business-registration',
    title: 'Business Registration',
    icon: FiBriefcase,
    items: [
      'Private Limited Company',
      'LLP Registration',
      'Partnership Firm',
      'Startup Registration',
      'MSME Registration',
    ],
  },
  {
    slug: 'legal-regulatory-compliance',
    title: 'Legal Compliance',
    icon: FiShield,
    items: ['Company Law Compliance', 'ROC Filing', 'Director Compliance', 'Annual Compliance'],
  },
  {
    slug: 'accounting-automation',
    title: 'Accounting & Systems',
    icon: FiBookOpen,
    items: ['Accounting Setup', 'Bookkeeping Services', 'Financial Reporting', 'Accounting Automation'],
  },
  {
    slug: 'labour-law-compliance',
    title: 'Labour Law',
    icon: FiUsers,
    items: ['ESI Registration', 'PF Registration', 'Payroll Compliance'],
  },
  {
    slug: 'ngo-non-profit-services',
    title: 'NGO / Non-Profit',
    icon: FiHeart,
    items: ['Society Registration', 'Trust Registration', 'Section 8 Company'],
  },
  {
    slug: 'intellectual-property',
    title: 'IP & Trademarks',
    icon: FiGlobe,
    items: ['Trademark Registration', 'Trademark Objection Reply', 'IP Advisory'],
  },
  {
    slug: 'business-support-services',
    title: 'Business Support',
    icon: FiChevronRight,
    items: ['IEC Registration', 'Export Consultancy', 'Financial Advisory'],
  },
  {
    slug: 'us-taxation-services',
    title: 'US Taxation',
    icon: FiGlobe,
    items: ['Individual Tax', 'Corporate Tax', 'FBAR Compliance'],
  },
  {
    slug: 'lower-deduction-certificates',
    title: 'LDC & Certificates',
    icon: FiFileText,
    items: ['Section 197 LDC', 'Statutory Certificates', 'TDS Certificates'],
  },
]

const serviceImages = {
  'taxation-services': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=300&h=150&q=80',
  'gst-services': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&h=150&q=80',
  'business-registration': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&h=150&q=80',
  'legal-regulatory-compliance': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&h=150&q=80',
  'accounting-automation': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=150&q=80',
  'labour-law-compliance': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&h=150&q=80',
  'ngo-non-profit-services': 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=300&h=150&q=80',
  'intellectual-property': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=300&h=150&q=80',
  'business-support-services': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&h=150&q=80',
  'us-taxation-services': usTaxThumb,
  'lower-deduction-certificates': ldcThumb
}

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileActiveCategory, setMobileActiveCategory] = useState('')
  const dropdownRef = useRef(null)
  const location = useLocation()

  const [visitorCount] = useState(() => {
    if (typeof window === 'undefined') return 0
    const counterKey = 'lbs-visitor-counter'
    const countedKey = 'lbs-visitor-counted-session'
    const currentCount = Number.parseInt(window.localStorage.getItem(counterKey) ?? '0', 10)
    const safeCount = Number.isNaN(currentCount) ? 0 : currentCount
    if (window.sessionStorage.getItem(countedKey) === 'true') return safeCount
    const nextCount = safeCount + 1
    window.localStorage.setItem(counterKey, String(nextCount))
    window.sessionStorage.setItem(countedKey, 'true')
    return nextCount
  })

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopServicesOpen(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setDesktopServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  // Handle scroll lock for mobile menu
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileOpen])

  const buildDesktopLinkClass = (isActive) =>
    `group relative py-2 text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 ${
      isActive ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'
    }`

  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Backdrop Overlay - Improved z-index and interaction */}
      <div 
        className={`fixed inset-0 min-h-screen bg-slate-900/40 backdrop-blur-[2px] transition-all duration-500 lg:block hidden z-[-10] ${desktopServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setDesktopServicesOpen(false)}
      />

      {/* Top bar - Hidden on scroll for a cleaner look */}
      <div className={`hidden bg-[#1B3942] text-white transition-all duration-500 lg:block ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="section-shell flex h-full items-center justify-between text-[11px] font-medium tracking-tight">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90 transition hover:opacity-100">
              <FiMapPin className="text-orange-400" size={12} />
              {contactInfo.address}
            </span>
            <a href={`tel:${contactInfo.phonePrimary.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 opacity-90 transition hover:opacity-100 hover:text-orange-400">
              <FiPhone className="text-orange-400" size={12} />
              {contactInfo.phonePrimary}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 opacity-90 transition hover:opacity-100 hover:text-orange-400">
              <FiMail className="text-orange-400" size={12} />
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/10 pr-4">
              {[
                { icon: FiLinkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: FiFacebook, link: socialLinks.facebook, label: 'Facebook' },
                { icon: FiInstagram, link: socialLinks.instagram, label: 'Instagram' },
                { icon: FaXTwitter, link: socialLinks.twitter, label: 'X' },
                { icon: FiYoutube, link: socialLinks.youtube, label: 'YouTube' },
                { icon: FiMessageCircle, link: socialLinks.whatsapp, label: 'WhatsApp' },
              ].map((social) => (
                <a key={social.label} href={social.link} target="_blank" rel="noreferrer" className="opacity-70 transition hover:scale-110 hover:text-orange-400 hover:opacity-100">
                  <social.icon size={13} />
                </a>
              ))}
            </div>
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-orange-400">
              <FiUsers size={12} />
              Visitors: {visitorCount.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="section-shell relative">
        <nav
          className={`flex h-20 lg:h-28 items-center justify-between rounded-b-2xl transition-all duration-500 px-4 sm:px-6 ${
            isScrolled
              ? 'bg-white shadow-2xl border-x border-b border-orange-50'
              : 'bg-white border-transparent'
          }`}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group shrink-0 py-2">
            <img src="logo.png" alt="360 Legit Business Logo" className="h-16 sm:h-[72px] lg:h-[84px] w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-sm" />
            <div className={`flex flex-col leading-tight hidden xl:flex transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-500">Premium Advisory</span>
              <span className="text-[14px] font-black text-[#1B3942] tracking-tighter">360 Legit Business</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-3 xl:gap-x-5 whitespace-nowrap">
            {navLinks.map((link) => {
              if (link.path !== '/services') {
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => buildDesktopLinkClass(isActive)}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </NavLink>
                )
              }

              return (
                <div
                  key={link.path}
                  ref={dropdownRef}
                  className="static"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`${buildDesktopLinkClass(isServicesActive || desktopServicesOpen)} flex items-center gap-1.5 outline-none`}
                    onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                  >
                    <span>Services</span>
                    <FiChevronDown size={14} className={`transition-transform duration-500 ${desktopServicesOpen ? 'rotate-180 text-orange-600' : ''}`} />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${isServicesActive || desktopServicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>

                  {/* Mega Menu */}
                  <div
                    className={`absolute left-0 right-0 top-full pt-2 transition-all duration-500 z-[100] ${
                      desktopServicesOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
                      <div className="grid grid-cols-12">
                        {/* Sidebar / Spotlight */}
                        <div className="col-span-3 bg-gradient-to-b from-slate-50 to-white p-6 border-r border-orange-50">
                          <h3 className="text-xl font-bold text-[#1B3942] mb-3 font-serif leading-tight">Expert solutions<br />for your business</h3>
                          <p className="text-[13px] text-slate-500 leading-relaxed mb-6 font-medium">
                            Explore our comprehensive suite of professional services designed for modern enterprises.
                          </p>
                          <Link
                            to="/services"
                            className="group/link inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-all hover:gap-3"
                          >
                            Explore All <FiArrowRight className="transition-transform group-hover/link:translate-x-1" />
                          </Link>
                          
                          <div className="mt-4 p-4 rounded-3xl bg-white border border-orange-100 shadow-sm">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">Direct Specialist</h4>
                            <p className="text-[10px] text-slate-500 mb-3 font-medium leading-relaxed italic">Talk to our experts for a personalized roadmap for your business growth.</p>
                            <Link to="/contact" className="block text-center py-2.5 bg-[#1B3942] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-100/50 hover:shadow-orange-200">
                              Book Consultation
                            </Link>
                          </div>
                        </div>

                        {/* Services Grid */}
                        <div className="col-span-9 p-6 bg-white flex items-center">
                          <div className="grid grid-cols-4 gap-x-4 gap-y-4 w-full">
                            {serviceMenu.map((category) => {
                              const Icon = category.icon
                              return (
                                <div key={category.title} className="group/item">
                                  <Link
                                    to={`/services/${category.slug}`}
                                    className="flex flex-col gap-2 p-3 rounded-2xl bg-white border border-transparent shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-orange-50 hover:border-orange-100 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.1)]"
                                    onClick={() => setDesktopServicesOpen(false)}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-orange-600 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-300 group-hover/item:shadow-lg group-hover/item:shadow-orange-200">
                                        <Icon size={16} />
                                      </div>
                                      <span className="font-extrabold text-[#1B3942] group-hover/item:text-orange-600 transition-colors uppercase tracking-tight text-[9px]">
                                        {category.title}
                                      </span>
                                    </div>
                                    <div className="w-full h-12 mt-1 rounded-xl overflow-hidden relative bg-slate-100 shadow-inner group-hover/item:shadow-orange-100/50">
                                      <img 
                                        src={serviceImages[category.slug]} 
                                        alt={category.title} 
                                        className="w-full h-full object-cover outline-none border-none grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500 transform group-hover/item:scale-110"
                                      />
                                      {/* Vector-like Overlay mapping */}
                                      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3942]/20 to-orange-500/10 mix-blend-overlay opacity-50 group-hover/item:opacity-0 transition-opacity duration-500" />
                                    </div>
                                  </Link>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#1B3942] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_25px_-8px_rgba(27,57,66,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-200"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 transition-all lg:hidden ${
              isMobileOpen ? 'border-orange-500 text-orange-600 bg-orange-50' : 'border-slate-100 text-[#1B3942]'
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-white transition-all duration-500 lg:hidden ${
          isMobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-8 pb-32">
          <div className="flex flex-col gap-y-1">
            {navLinks.map((link) => {
              if (link.path !== '/services') {
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-lg font-bold ${
                        isActive ? 'text-orange-600' : 'text-[#1B3942]'
                      } border-b border-slate-50`
                    }
                  >
                    {link.label}
                    <FiChevronRight className={location.pathname === link.path ? 'text-orange-600' : 'text-slate-300'} />
                  </NavLink>
                )
              }

              return (
                <div key={link.path} className="py-4 border-b border-slate-50">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between text-left text-lg font-bold ${
                      mobileServicesOpen ? 'text-orange-600' : 'text-[#1B3942]'
                    }`}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>Services</span>
                    <FiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-500 ${mobileServicesOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {serviceMenu.map((category) => (
                      <Link
                        key={category.title}
                        to={`/services/${category.slug}`}
                        className="flex w-full items-center justify-between p-4 rounded-xl text-sm font-bold text-[#1B3942] bg-slate-50/50 hover:bg-orange-50 border border-transparent hover:border-orange-100 transition-all"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="text-orange-500" />
                          {category.title}
                        </div>
                        <FiChevronRight className="text-orange-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <Link
              to="/contact"
              className="w-full text-center py-4 bg-orange-600 text-white font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-orange-100"
            >
              Get Consultation
            </Link>
            <div className="flex items-center justify-center gap-6 pt-6 flex-wrap">
              {[
                { icon: FiLinkedin, link: socialLinks.linkedin },
                { icon: FiFacebook, link: socialLinks.facebook },
                { icon: FiInstagram, link: socialLinks.instagram },
                { icon: FaXTwitter, link: socialLinks.twitter },
                { icon: FiYoutube, link: socialLinks.youtube },
                { icon: FiMessageCircle, link: socialLinks.whatsapp }
              ].map((social, idx) => (
                <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-orange-500 hover:text-white transition-all">
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
