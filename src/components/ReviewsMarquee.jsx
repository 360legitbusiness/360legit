import React from 'react'
import { FiStar } from 'react-icons/fi'
import { clientReviews } from '../data/siteData'

function ReviewsMarquee() {
  // Duplicate reviews to create a continuous loop
  const doubledReviews = [...clientReviews, ...clientReviews]

  return (
    <div className="relative overflow-hidden py-10 w-full">
      {/* Gradient overlays for smooth fading at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#FDFCFB] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#FDFCFB] to-transparent pointer-events-none" />

      <div className="animate-marquee flex gap-8">
        {doubledReviews.map((review, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[320px] sm:w-[400px] p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-20px_rgba(27,57,66,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.15)] transition-all duration-500 group"
          >
            <div className="flex gap-1 mb-6 text-orange-500">
              {[...Array(review.rating)].map((_, i) => (
                <FiStar key={i} size={16} className="fill-orange-500" />
              ))}
            </div>
            
            <p className="text-slate-600 font-serif italic text-base sm:text-lg leading-relaxed mb-8 min-h-[100px]">
              "{review.review}"
            </p>

            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-orange-100 shadow-md group-hover:border-orange-500 transition-colors duration-500 shrink-0">
                {review.image ? (
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#1B3942] to-[#2c5360] flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-[#1B3942] tracking-tight truncate">{review.name}</h4>
                <p className="text-[10px] sm:text-xs font-bold text-orange-600 uppercase tracking-wider truncate">{review.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsMarquee
