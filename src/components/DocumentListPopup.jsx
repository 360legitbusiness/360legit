import React from 'react'
import { FiX, FiCheck, FiFileText, FiInfo } from 'react-icons/fi'
import { requiredDocuments } from '../data/siteData'

function DocumentListPopup({ serviceSlug, isOpen, onClose }) {
  if (!isOpen) return null

  const serviceData = requiredDocuments[serviceSlug]

  if (!serviceData) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center">
          <FiInfo className="mx-auto text-orange-500 mb-4" size={48} />
          <h3 className="text-xl font-bold text-[#1B3942] mb-2">Checklist Coming Soon</h3>
          <p className="text-slate-500 text-sm mb-6">We are currently updating the document checklist for this service. Please contact our experts for immediate assistance.</p>
          <button onClick={onClose} className="button-primary w-full py-4 text-[10px] font-black uppercase tracking-widest">Close</button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-[#1B3942] p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
          >
            <FiX size={20} />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-900/20">
              <FiFileText size={24} />
            </div>
            <div>
              <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em]">Required Documents</p>
              <h3 className="text-2xl font-bold tracking-tight">{serviceData.title}</h3>
            </div>
          </div>
          <p className="text-slate-300 text-sm font-medium leading-relaxed">
            Keep these documents ready for a seamless registration and compliance process.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-4">
            {serviceData.documents.map((doc, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-300"
              >
                <div className="h-6 w-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <FiCheck className="text-slate-200 group-hover:text-white" size={12} />
                </div>
                <span className="text-slate-700 font-bold text-sm tracking-tight leading-tight">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 px-6 bg-white border border-slate-200 text-[#1B3942] font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-slate-100 transition-all shadow-sm"
          >
            Got it, Close
          </button>
          <a 
            href="https://wa.me/919217871979" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 py-4 px-6 bg-orange-600 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-[#1B3942] transition-all shadow-lg shadow-orange-100 text-center"
          >
            Help me more
          </a>
        </div>
      </div>
    </div>
  )
}

export default DocumentListPopup
