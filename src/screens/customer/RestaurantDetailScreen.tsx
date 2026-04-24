import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Heart, Plus, Star } from 'lucide-react';
import { Screen, Restaurant, CartItem, MenuItem } from '../../types';

interface RestaurantDetailScreenProps {
  selectedRestaurant: Restaurant | null;
  navigateTo: (screen: Screen) => void;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  cartTotal: number;
}

export const RestaurantDetailScreen: React.FC<RestaurantDetailScreenProps> = ({ 
  selectedRestaurant, 
  navigateTo, 
  cart, 
  addToCart, 
  cartTotal 
}) => {
  if (!selectedRestaurant) return null;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80">
        <img src={selectedRestaurant.image} alt={selectedRestaurant.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <button type="button" aria-label="Go back" onClick={() => navigateTo('home')} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white font-black text-xl italic">{selectedRestaurant.name}</h2>
          <button type="button" aria-label="Add to favourites" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/50">
          <h1 className="text-4xl font-black text-[#001f3f] mb-4">{selectedRestaurant.name}</h1>
          <p className="text-gray-500 font-medium leading-relaxed mb-6">{selectedRestaurant.description}</p>
          
          <div className="flex gap-3">
            <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-gray-600">
              <Star className="w-4 h-4 text-orange-400 fill-current" /> {selectedRestaurant.rating}
            </div>
            <div className="bg-[#C1121F] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-white">
              <Clock className="w-4 h-4" /> {selectedRestaurant.time}
            </div>
            <div className="bg-[#00A86B]/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-[#00A86B]">
              OPEN
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 mt-4">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {['All', 'Rice', 'Proteins', 'Swallow', 'Drinks'].map((cat, i) => (
            <button 
              key={cat} 
              type="button"
              className={`px-8 py-3 rounded-2xl font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-[#FF7A00] text-white' : 'bg-gray-200 text-gray-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-6 mt-4">
          <div className="w-1 h-6 bg-[#C1121F] rounded-full" />
          <h2 className="text-2xl font-black text-[#001f3f]">Our Menu</h2>
        </div>

        <div className="flex flex-col gap-4">
          {selectedRestaurant.menu.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-[32px] flex gap-4 shadow-sm border border-gray-50">
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <button
                  type="button"
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => addToCart(item)}
                  className="absolute bottom-1 right-1 w-8 h-8 bg-[#FF7A00] rounded-full flex items-center justify-center shadow-lg text-white"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-black text-[#001f3f]">{item.name}</h4>
                <p className="text-xs text-gray-400 font-medium mt-1 mb-2 line-clamp-2">{item.description}</p>
                <span className="font-black text-lg text-[#001f3f]">₦{item.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-8 left-6 right-6 z-40">
          <motion.button 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            onClick={() => navigateTo('checkout')}
            className="w-full bg-[#C1121F] text-white p-6 rounded-[32px] flex items-center justify-between shadow-2xl shadow-red-900/40"
          >
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">View Cart</span>
              <p className="font-bold text-sm">{cart.length} items from {selectedRestaurant.name}</p>
            </div>
            <span className="text-2xl font-black italic">₦{cartTotal.toLocaleString()}</span>
          </motion.button>
        </div>
      )}
    </div>
  );
};
