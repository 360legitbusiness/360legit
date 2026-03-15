import { 
  FiFacebook, 
  FiInstagram, 
  FiLinkedin, 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiYoutube, 
  FiHeart, 
  FiPhoneCall,
  FiShield,
  FiTrendingUp,
  FiActivity
} from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { companyName, contactInfo, navLinks, serviceCategories, socialLinks } from '../data/siteData'

function Footer() {

  return (
    <footer className="relative mt-32 overflow-hidden bg-white pt-24 border-t border-slate-100">
      {/* Premium Background Effects - Accounting/CA Vibe */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-orange-100/40 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-[#1B3942]/5 blur-[100px] rounded-full animate-float-slow" />
        
        {/* Dynamic Animated Orange Grid Pattern (Premium Accounting Feel) */}
        <div className="absolute inset-0 bg-animated-orange-grid" />
      </div>
      
      <div className="section-shell relative z-10">
        
        {/* Flagship Brand Centerpiece - Logo Left, Vectors Right */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-24 group relative">
          
          {/* Border-less Massive Logo - Now on the Left */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-24 bg-orange-500/5 blur-[120px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-1000 pointer-events-none" />
            <img 
              src="logo.png" 
              alt={companyName} 
              className="relative z-10 h-64 sm:h-80 w-auto object-contain transition-transform duration-1000 group-hover:scale-[1.03]" 
            />
          </div>

          {/* Trust Ecosystem - 4 Professional Animations - Now on the Right */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 order-1 lg:order-2">
            {/* Growth Animation */}
            <div className="relative p-4 bg-white border border-orange-100 shadow-xl rounded-2xl animate-float-slow transition-transform hover:scale-110">
              <FiTrendingUp size={44} className="text-orange-600" />
              <span className="absolute -bottom-2 -right-2 bg-orange-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md">GROWTH</span>
            </div>
            {/* Secure Animation */}
            <div className="relative p-4 bg-white border border-blue-50 shadow-xl rounded-2xl animate-pulse transition-transform hover:scale-110">
              <FiShield size={44} className="text-[#1B3942]" />
              <span className="absolute -top-2 -left-2 bg-[#1B3942] text-white text-[8px] font-black px-1.5 py-0.5 rounded-md">SECURE</span>
            </div>
            {/* Trusted Animation */}
            <div className="relative p-4 bg-white border border-green-50 shadow-xl rounded-2xl transition-transform hover:scale-110">
              <FiHeart size={44} className="text-orange-500 fill-orange-500/10" />
              <div className="absolute top-1 right-1 h-3 w-3 bg-green-500 rounded-full border border-white animate-ping" />
              <span className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md">TRUSTED</span>
            </div>
            {/* Active Animation */}
            <div className="relative p-4 bg-white border border-slate-100 shadow-xl rounded-2xl transition-transform hover:scale-110 hidden sm:block">
              <FiActivity size={44} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 pb-20">
          
          {/* Column 1: Authority Messaging */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] font-black uppercase tracking-[0.25em] text-orange-600 shadow-sm backdrop-blur-sm">
              <FiShield className="text-orange-500" size={14} /> Certified Excellence
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B3942] tracking-tight leading-[1.1]">
                Precision in <span className="text-orange-600 italic">Financial Strategy</span>
              </h2>
              <p className="text-[16px] leading-relaxed text-slate-500 font-bold max-w-sm">
                 {companyName} provides the expert strategic foundations needed for modern business growth and regulatory excellence.
              </p>
            </div>
          </div>

          {/* Column 2: Platform Nav */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#1B3942] border-b border-orange-100 pb-3">Platform</h4>
            <ul className="grid gap-4">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link className="group flex items-center text-[15px] font-bold text-slate-500 hover:text-orange-600 transition-colors" to={item.path}>
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-orange-500">→</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise Nav */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#1B3942] border-b border-orange-100 pb-3">Expertise</h4>
            <ul className="grid gap-4">
              {serviceCategories.slice(0, 12).map((category) => (
                <li key={category.title}>
                  <Link className="group flex items-center text-[15px] font-bold text-slate-500 hover:text-orange-600 transition-colors" to={`/services/${category.slug}`}>
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-orange-500">→</span>
                    <span className="group-hover:translate-x-1 transition-transform">{category.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#1B3942] border-b border-orange-100 pb-3">Connect With Us</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group/item">
                  <div className="h-10 w-10 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center group-hover/item:bg-orange-600 group-hover/item:text-white transition-all duration-500">
                    <FiMapPin size={22} />
                  </div>
                  <p className="text-sm font-bold text-slate-600 leading-snug group-hover/item:text-[#1B3942]">
                    {contactInfo.address}
                  </p>
                </li>
                <li className="flex items-center gap-4 group/item">
                   <div className="h-10 w-10 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center group-hover/item:bg-orange-600 group-hover/item:text-white transition-all duration-500">
                     <FiPhoneCall size={22} />
                   </div>
                   <a href={`tel:${contactInfo.phonePrimary.replace(/\s+/g, '')}`} className="text-sm font-bold text-slate-600 hover:text-orange-600">
                     {contactInfo.phonePrimary}
                   </a>
                </li>
                <li className="flex items-center gap-4 group/item">
                   <div className="h-10 w-10 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center group-hover/item:bg-orange-600 group-hover/item:text-white transition-all duration-500">
                     <FiMail size={22} />
                   </div>
                   <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-slate-600 hover:text-orange-600 break-all">
                     {contactInfo.email}
                   </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
               <div className="flex flex-wrap gap-4">
                  {[
                    { icon: FiLinkedin, link: socialLinks.linkedin },
                    { icon: FiFacebook, link: socialLinks.facebook },
                    { icon: FiInstagram, link: socialLinks.instagram },
                    { icon: FaXTwitter, link: socialLinks.twitter },
                    { icon: FiYoutube, link: socialLinks.youtube }
                  ].map((social, idx) => (
                    <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-2xl bg-white border border-slate-100 text-[#1B3942] flex items-center justify-center shadow-sm hover:translate-y-[-4px] hover:bg-orange-600 hover:text-white transition-all duration-500">
                      <social.icon size={20} />
                    </a>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Dynamic Horizontal Line */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent">
          <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 px-4 bg-white">
            <FiHeart className="text-orange-500 fill-orange-500 animate-pulse" size={10} />
          </div>
        </div>

        {/* Footer Bottom Styling */}
        <div className="py-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-[12px] font-black uppercase tracking-widest">
          <p className="text-center lg:text-left text-[#1B3942]">
            &copy; {new Date().getFullYear()} <span className="text-orange-600">{companyName}</span>. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
            <div className="flex items-center gap-3 bg-slate-50 py-3 px-8 rounded-full border border-slate-100 shadow-inner group">
              <span className="text-slate-400 italic font-bold">Crafted With Trust By</span>
              <a 
                href="https://yuvancreations.github.io/yuvancreations/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#1B3942] group-hover:text-orange-600 transition-colors font-black tracking-[0.2em]"
              >
                YUVAN CREATIONS
              </a>
            </div>
            
            <a 
              href="tel:+919557300217" 
              className="px-6 py-3 rounded-full bg-[#1B3942] text-white hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-orange-200"
            >
              +91-9557300217
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
