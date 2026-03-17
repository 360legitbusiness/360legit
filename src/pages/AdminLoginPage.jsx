import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { FiLock, FiMail, FiShield } from 'react-icons/fi'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'

function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/admin/dashboard')
    } catch (err) {
      setError('Invalid email or password. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50 flex items-center justify-center px-4">
      <SEO title="Admin Login" description="Secure login for 360 Legit Business admin panel." />
      
      <div className="max-w-md w-full">
        <Reveal>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-orange-600" />
            
            <div className="text-center mb-10">
              <div className="h-16 w-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <FiShield size={32} />
              </div>
              <h1 className="text-3xl font-bold text-[#1B3942] tracking-tight">Admin Portal</h1>
              <p className="text-slate-500 mt-2 font-medium">Please sign in to manage your blog</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-bold text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <div className="relative group">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all transition-all"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                <div className="relative group">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1B3942] hover:bg-orange-600 text-white font-extrabold uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl hover:shadow-orange-200 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Secure Login'}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default AdminLoginPage
