import { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore'
import { FiLogOut, FiPlus, FiTrash2, FiTag, FiType, FiFileText, FiImage, FiGrid } from 'react-icons/fi'
import { resourceCategories } from '../data/siteData'
import Reveal from '../components/Reveal'

function AdminDashboard() {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const navigate = useNavigate()

  // Form State
  const [newBlog, setNewBlog] = useState({
    category: resourceCategories[0],
    title: '',
    excerpt: '',
    image: '',
  })

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/admin-login')
      } else {
        setUser(currentUser)
      }
    })

    // Fetch Blogs
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
    const unsubscribeBlogs = onSnapshot(q, (snapshot) => {
      const blogList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setBlogs(blogList)
      setLoading(false)
    })

    return () => {
      unsubscribeAuth()
      unsubscribeBlogs()
    }
  }, [navigate])

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/admin-login')
  }

  const handleAddBlog = async (e) => {
    e.preventDefault()
    if (!newBlog.title || !newBlog.excerpt) return

    setUploading(true)
    try {
      await addDoc(collection(db, 'blogs'), {
        ...newBlog,
        createdAt: serverTimestamp()
      })
      setNewBlog({
        category: resourceCategories[0],
        title: '',
        excerpt: '',
        image: '',
      })
      alert('Blog Published Successfully!')
    } catch (err) {
      console.error(err)
      alert('Error publishing blog.')
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id))
      } catch (err) {
        console.error(err)
      }
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="section-shell">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-[#1B3942] tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-500 font-medium mt-1">Manage your website's knowledge hub</p>
          </div>
          <button 
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all border border-red-100"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          
          {/* New Blog Form */}
          <div className="space-y-8">
            <Reveal>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#1B3942] mb-8 flex items-center gap-3">
                  <span className="p-2 bg-orange-50 text-orange-600 rounded-lg"><FiPlus /></span>
                  Create New Blog
                </h3>
                
                <form onSubmit={handleAddBlog} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Category</label>
                    <div className="relative">
                      <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select 
                        value={newBlog.category}
                        onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white appearance-none"
                      >
                        {resourceCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Blog Title</label>
                    <div className="relative">
                      <FiType className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text"
                        required
                        placeholder="Enter blog title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Excerpt / Summary</label>
                    <div className="relative">
                      <FiFileText className="absolute left-4 top-6 text-slate-400" />
                      <textarea 
                        required
                        placeholder="Short summary of the blog..."
                        rows="4"
                        value={newBlog.excerpt}
                        onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white"
                      ></textarea>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Image URL (Optional)</label>
                    <div className="relative">
                      <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text"
                        placeholder="https://images.unsplash.com/..."
                        value={newBlog.image}
                        onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={uploading}
                    className="w-full bg-orange-600 hover:bg-[#1B3942] text-white font-extrabold uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl hover:shadow-orange-200 transition-all duration-300 disabled:opacity-50"
                  >
                    {uploading ? 'Publishing...' : 'Publish Blog Post'}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Blogs Table/List */}
          <div className="space-y-8">
            <Reveal delay={200}>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#1B3942] mb-8 flex items-center gap-3">
                  <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FiGrid /></span>
                  Live Blog Posts ({blogs.length})
                </h3>

                <div className="space-y-4">
                  {loading ? (
                    <p className="text-slate-400 text-sm italic py-10 text-center">Loading blogs...</p>
                  ) : blogs.length === 0 ? (
                    <p className="text-slate-400 text-sm italic py-10 text-center">No blogs found. Start writing!</p>
                  ) : (
                    blogs.map((blog) => (
                      <div key={blog.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:border-orange-100 transition-all">
                        <div className="max-w-[70%]">
                          <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2 py-1 rounded-md mb-2 inline-block">
                            {blog.category}
                          </span>
                          <h4 className="font-bold text-[#1B3942] truncate">{blog.title}</h4>
                        </div>
                        <button 
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-slate-300 hover:bg-red-50 hover:text-red-600 transition-all border border-transparent hover:border-red-100 shadow-sm"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
