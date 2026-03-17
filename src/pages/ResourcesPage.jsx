import { useState, useEffect } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { FiArrowRight, FiBookOpen, FiClock, FiTag, FiSearch, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { blogPosts as staticBlogPosts, resourceCategories } from '../data/siteData'

function ResourcesPage() {
  const [dynamicBlogs, setDynamicBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setDynamicBlogs(blogs)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Combine dynamic and static posts (dynamic first)
  const allPosts = [...dynamicBlogs, ...staticBlogPosts]

  // Filter posts based on category and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <SEO
        title="Knowledge Hub & Business Resources"
        description="Stay updated with the latest in taxation, GST, and business growth strategies. Explore our curated insights for founders and finance teams."
        keywords="business resources, tax blog india, gst updates, startup growth guides"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FDFCFB] overflow-hidden">
        <div className="section-shell relative z-10 text-center mx-auto max-w-4xl">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 mb-8">
              Intelligence & Insights
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#1B3942] leading-[1.1] mb-8">
              The <span className="text-orange-600 italic">Knowledge</span> Hub.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Curated perspectives on taxation, compliance, and strategy designed for modern founders and financial leaders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured/Search Bar Section */}
      <section className="section-space pt-0">
        <div className="section-shell">
          {/* Search & Categories */}
          <Reveal delay={200}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Filter By:</span>
                <button 
                  onClick={() => setActiveCategory('All Posts')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === 'All Posts' ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-orange-50 hover:text-orange-600'}`}
                >
                  All Posts
                </button>
                {resourceCategories.map((category) => (
                  <button 
                    key={category} 
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all border border-transparent ${activeCategory === category ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-100'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full lg:w-96 group">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all transition-all"
                />
              </div>
            </div>
          </Reveal>

          {/* Featured Post Spotlight */}
          <Reveal delay={400}>
            <article className="group relative rounded-[3rem] overflow-hidden bg-[#1B3942] mb-20 shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    alt="2026 Financial Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center text-white">
                  <span className="text-orange-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Special Report 2026</span>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-orange-300 transition-colors">
                    The 2026 Digital Tax<br />& Compliance Frontier
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
                    Decoding the impact of AI-driven auditing, real-time GST reconciliation, and the shift towards hyper-automated statutory filings for Indian enterprises.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-3 font-bold text-white hover:text-orange-400 hover:gap-4 transition-all uppercase tracking-widest text-xs">
                    Get The Executive Summary <FiArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <Reveal key={post.title} delay={index * 100}>
                  <article className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 p-8 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(27,57,66,0.12)]">
                    <div className="relative h-64 w-full mb-8 overflow-hidden rounded-3xl">
                      <img src={post.image} alt={post.category} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
                        <FiTag className="text-orange-500" size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B3942]">{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <span className="flex items-center gap-1.5"><FiClock /> 6 Min Read</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>Oct 12, 2023</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#1B3942] mb-4 tracking-tight group-hover:text-orange-600 transition-colors leading-tight">{post.title}</h3>
                      <p className="text-slate-500 mb-8 leading-relaxed line-clamp-3 font-medium">{post.excerpt}</p>
                      
                      <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                        <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 hover:gap-3 transition-all">
                          Discover More <FiArrowRight />
                        </Link>
                        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-orange-50 hover:text-orange-600 transition-all">
                          <FiBookOpen size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 text-lg font-medium italic">No articles found in this category matching your search.</p>
              </div>
            )}
          </div>


          {/* Newsletter Section */}
          <Reveal delay={200}>
            <div className="mt-20 overflow-hidden relative rounded-[3rem] bg-orange-600 text-white p-10 md:p-20 shadow-2xl shadow-orange-200/50">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              
              <div className="relative flex flex-col lg:flex-row items-center gap-16">
                <div className="max-w-xl text-center lg:text-left">
                  <h2 className="font-serif text-4xl font-bold mb-6">Never miss an update.</h2>
                  <p className="text-orange-50 text-lg opacity-90">
                    Get monthly compliance checklists and taxation guides delivered directly to your inbox. No spam, just pure advisory.
                  </p>
                </div>
                
                <div className="w-full lg:w-auto flex-grow flex flex-col md:flex-row gap-4 p-3 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20">
                  <div className="relative flex-grow">
                    <FiMail className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-100" />
                    <input 
                      type="email" 
                      placeholder="Enter your work email" 
                      className="w-full bg-transparent py-4 pl-14 pr-6 text-white placeholder:text-orange-200 focus:outline-none"
                    />
                  </div>
                  <button className="bg-white text-orange-600 font-extrabold uppercase tracking-widest text-xs px-10 py-5 rounded-full hover:bg-orange-50 transition-all shadow-xl shadow-orange-900/10">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default ResourcesPage

