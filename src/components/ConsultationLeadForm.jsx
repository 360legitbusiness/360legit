import { useState, useEffect } from 'react'
import { FiCheckCircle, FiSend, FiX } from 'react-icons/fi'
import { companyName, serviceCategories } from '../data/siteData'
import { db } from '../firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

const serviceOptions = [
  ...serviceCategories.map(c => c.title),
  'Startup Support',
  'Other Advisory'
]

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  service: serviceOptions[0],
  address: '',
  pincode: '',
  state: '',
  city: '',
  message: '',
}

function ConsultationLeadForm({
  title = 'Book a Consultation',
  subtitle = 'Share your requirement and our team will contact you shortly.',
  buttonLabel = 'Submit Enquiry',
}) {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isLoadingPincode, setIsLoadingPincode] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  // Automatic State & City Lookup via PIN code (Pan-India)
  useEffect(() => {
    const fetchLocation = async () => {
      if (formData.pincode.length === 6 && /^\d+$/.test(formData.pincode)) {
        setIsLoadingPincode(true)
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/${formData.pincode}`)
          const data = await response.json()

          if (data && data[0].Status === 'Success') {
            const details = data[0].PostOffice[0]
            const cityInfo = details.Block !== 'NA' && details.Block !== details.District
              ? `${details.Block}, ${details.District}`
              : details.District

            setFormData(prev => ({
              ...prev,
              state: details.State,
              city: cityInfo
            }))
          }
        } catch (error) {
          console.error('Pincode fetch error:', error)
        } finally {
          setIsLoadingPincode(false)
        }
      }
    }

    const timer = setTimeout(() => {
      fetchLocation()
    }, 400)

    return () => clearTimeout(timer)
  }, [formData.pincode])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      // 1. Save data to Firebase Firestore with custom readable ID (name + timestamp)
      const safeName = formData.name.trim().replace(/[^a-zA-Z0-9]/g, '_') || 'Guest';
      const timestamp = new Date().getTime();
      const customDocId = `${safeName}_${timestamp}`;

      await setDoc(doc(db, "leads", customDocId), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // 2. Send data to Google Sheets via Webhook (Apps Script)
      // NOTE: User needs to insert their Apps Script Web App URL below
      const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwIDJSRIKaNZz3CSxRPsIe7xBG3SZ-S48uEPaUx89g15NGxhqbo3PQEL67WHgauOXg8bQ/exec";
      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: 'no-cors' // To avoid CORS issues with cross-origin POST
        });
      }

      setShowPopup(true)
    } catch (error) {
      console.error("Error saving lead: ", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
    setIsSubmitted(true)
    setFormData(initialFormState)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="card-surface p-6 sm:p-8 relative">
      <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>

      {isSubmitted ? (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          Thank you. Your consultation request has been received. Our advisor will contact you soon.
        </div>
      ) : null}

      {/* Cinematic Success Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#1B3942]/60 backdrop-blur-xl transition-all duration-300">
          <div className="relative w-full max-w-md bg-white rounded-[3rem] p-10 shadow-2xl overflow-hidden text-center flex flex-col items-center">

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 z-[100]"
            >
              <FiX size={24} />
            </button>

            {/* Animation Stage (Faster 3s Cycle) */}
            <div className="h-48 flex items-center justify-center relative w-full mb-8">
              <div className="relative animate-envelope-bounce">
                <div className="w-40 h-28 bg-orange-50 rounded-lg relative overflow-hidden border-2 border-orange-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-transparent" />

                  {/* The Letter */}
                  <div className="absolute left-3 right-3 h-20 bg-white shadow-md border border-slate-100 p-2 flex flex-col gap-1 rounded-sm animate-letter-in z-20">
                    <div className="h-1 w-full bg-slate-100 rounded-full" />
                    <div className="h-1 w-3/4 bg-slate-100 rounded-full" />
                    <div className="mt-auto flex justify-end">
                      <FiSend className="text-orange-500" size={10} />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-14 bg-orange-200/40 transform -skew-y-6" />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-orange-200/20 transform skew-y-6" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 animate-seal">
                  <div className="h-14 w-14 bg-orange-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white">
                    <FiCheckCircle size={28} />
                  </div>
                </div>
              </div>
            </div>

            {/* Visible Success Message Section */}
            <div className="w-full space-y-4">
              <h2 className="text-2xl font-black text-[#1B3942] opacity-0 animate-text-up" style={{ animationDelay: '1.2s' }}>
                Request Sent Successfully!
              </h2>
              <div className="space-y-2 opacity-0 animate-text-up" style={{ animationDelay: '1.8s' }}>
                <p className="text-slate-600 font-bold leading-relaxed">
                  <span className="text-orange-600">{companyName}</span> will connect with you
                </p>
                <p className="text-slate-500 text-sm font-medium">
                  As soon as possible.
                </p>
              </div>
            </div>

            {/* Final Action Button */}
            <div className="mt-10 w-full opacity-0 animate-text-up" style={{ animationDelay: '2.4s' }}>
              <button
                onClick={closePopup}
                className="button-primary w-full py-4 rounded-2xl shadow-lg shadow-orange-100"
              >
                Got it, thanks!
              </button>
            </div>

          </div>
        </div>
      )}

      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
            Name
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
              placeholder="Your full name"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
            Phone (Mobile)
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
              placeholder="+91"
            />
          </label>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
            Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
              placeholder="name@company.com"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
            Select Service
            <select
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 cursor-pointer appearance-none"
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Address & Pincode Logic Section */}
        <div className="pt-4 border-t border-slate-50">
          <div className="grid gap-6">
            <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
              Full Address
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
                placeholder="House No, Building, Street, Area"
              />
            </label>
            <div className="grid gap-6 sm:grid-cols-3">
              <label className="space-y-2 text-sm font-semibold text-[#1B3942] relative">
                Area Pincode
                <input
                  required
                  type="text"
                  maxLength={6}
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
                  placeholder="6 digits"
                />
                {isLoadingPincode && (
                  <div className="absolute right-3 bottom-5 h-4 w-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                )}
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
                State
                <input
                  required
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
                  placeholder="State"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
                City / Area
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
                  placeholder="City/Sub-city"
                />
              </label>
            </div>
          </div>
        </div>

        <label className="space-y-2 text-sm font-semibold text-[#1B3942]">
          Your Requirement
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-orange-100 bg-slate-50 px-4 py-4 text-sm text-ink outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-slate-300"
            placeholder="Tell us how we can help you today."
          />
        </label>

        <button type="submit" disabled={isSubmitting} className="button-primary w-full py-5 text-base tracking-[0.2em] shadow-xl shadow-orange-100 hover:shadow-orange-200 disabled:opacity-50">
          {isSubmitting ? 'Submitting...' : buttonLabel}
        </button>
      </form>
    </div>
  )
}

export default ConsultationLeadForm
