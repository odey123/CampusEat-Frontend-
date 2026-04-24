import React, { useState } from 'react';
import { ArrowLeft, Check, ShoppingBag, Star } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface RatingScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const RatingScreen: React.FC<RatingScreenProps> = ({ navigateTo }) => {
  const [riderRating, setRiderRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <button type="button" aria-label="Go back" onClick={() => navigateTo('home')} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-[#001f3f]" />
        </button>
        <h2 className="text-xl font-black text-[#001f3f]">Rate Your Experience</h2>
        <div className="w-10" />
      </header>

      <div className="p-6 flex flex-col gap-6">
        <div className="bg-gray-100 rounded-[24px] p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#00A86B]/10 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-[#00A86B]" />
          </div>
          <h3 className="text-2xl font-black text-[#001f3f] mb-2">Food Delivered!</h3>
          <p className="text-gray-500 font-medium text-sm px-4">Hope you enjoyed your meal. Let us know how it went.</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://picsum.photos/seed/tunde/100/100" alt="Rider Tunde" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Rate Your Rider</span>
              <h4 className="font-black text-[#001f3f] text-lg">Tunde</h4>
            </div>
          </div>
          
          <div className="flex justify-between px-2 mb-6">
            {[1, 2, 3, 4, 5].map(star => (
              <button type="button" key={star} aria-label={`Rate rider ${star} star${star > 1 ? 's' : ''}`} onClick={() => setRiderRating(star)}>
                <Star className={`w-10 h-10 ${star <= riderRating ? 'fill-[#C1121F] text-[#C1121F]' : 'text-gray-200 fill-gray-200'} transition-all`} />
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <input type="text" placeholder="Leave a comment for Tunde" className="w-full bg-transparent border-none outline-none text-sm font-medium" />
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Rate Your Food</span>
              <h4 className="font-black text-[#001f3f] text-lg">Mavise</h4>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-orange-400" />
            </div>
          </div>
          
          <div className="flex justify-between px-2 mb-6">
            {[1, 2, 3, 4, 5].map(star => (
              <button type="button" key={star} aria-label={`Rate food ${star} star${star > 1 ? 's' : ''}`} onClick={() => setFoodRating(star)}>
                <Star className={`w-10 h-10 ${star <= foodRating ? 'fill-[#C1121F] text-[#C1121F]' : 'text-gray-200 fill-gray-200'} transition-all`} />
              </button>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <input type="text" placeholder="How was the food quality" className="w-full bg-transparent border-none outline-none text-sm font-medium" />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <Button variant="primary" onClick={() => navigateTo('home')} className="w-full h-16 text-lg font-black italic">
            Submit Rating
          </Button>
          <button type="button" onClick={() => navigateTo('home')} className="text-sm font-bold text-gray-400">
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};
