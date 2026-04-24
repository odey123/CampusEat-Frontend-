import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, ChevronRight, ShoppingBag, Search, Bike, 
  Clock, Plus, Star, LayoutGrid, History, Tag, Wallet, User, Bell 
} from 'lucide-react';
import { Screen, Restaurant } from '../../types';
import { RESTAURANTS } from '../../data/mockData';

interface HomeScreenProps {
  navigateTo: (screen: Screen) => void;
  isRiderMode: boolean;
  setIsRiderMode: (val: boolean) => void;
  setSelectedRestaurant: (restaurant: Restaurant | null) => void;
  cartCount: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ 
  navigateTo, 
  isRiderMode, 
  setIsRiderMode, 
  setSelectedRestaurant,
  cartCount
}) => (
  <div className="min-h-screen bg-gray-50 pb-24">
    <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#001f3f]/5 rounded-full flex items-center justify-center">
          <MapPin className="w-5 h-5 text-[#001f3f]" />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Daniel's Location</p>
          <div className="flex items-center gap-1">
            <span className="font-bold text-[#001f3f]">ETF Hostel, Block C</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-10 h-10 bg-[#001f3f] rounded-xl flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#C1121F] text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">
          {cartCount > 0 ? cartCount : 2}
        </div>
      </div>
    </header>

    <div className="p-6 flex flex-col gap-8">
      <h1 className="text-3xl font-black text-[#001f3f] leading-tight">
        Hey Daniel, what are you eating today?
      </h1>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          placeholder="Search for food, restaurants..."
          className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-6 shadow-sm focus:ring-2 focus:ring-[#C1121F] transition-all outline-none"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
        {['Rice', 'Swallow', 'Spaghetti', 'Drinks'].map((cat, i) => (
          <button 
            key={cat} 
            className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-[#001f3f] text-white' : 'bg-gray-200 text-gray-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative rounded-[32px] overflow-hidden aspect-[16/9] bg-[#001f3f] text-white p-8 flex flex-col justify-center">
        <img 
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?fit=crop&w=800&h=450&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10">
          <span className="bg-[#C1121F] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block">Exclusive</span>
          <h3 className="text-3xl font-black italic leading-tight">50% OFF<br/>Jollof Fever</h3>
          <p className="text-white/60 text-sm mt-2">Valid only for UNILAG Students</p>
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
          <Bike className="w-6 h-6 text-white/40" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-[#001f3f]">Popular on Campus</h2>
        <button className="text-sm font-bold text-gray-400">See All</button>
      </div>

      <div className="flex flex-col gap-6">
        {RESTAURANTS.map(res => (
          <motion.div 
            key={res.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedRestaurant(res);
              navigateTo('restaurant');
            }}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 p-0 m-0 cursor-pointer"
          >
            <div className="relative aspect-[16/9]">
              <img src={res.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs font-bold">
                <Clock className="w-3 h-3" /> {res.time}
              </div>
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#C1121F]">
                <Plus className="w-6 h-6" />
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-black text-[#001f3f]">{res.name}</h3>
                <div className="flex items-center gap-1 text-[#00A86B] font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" /> {res.rating}
                </div>
              </div>
              <p className="text-sm text-gray-400 font-medium">
                {res.priceRange} • {res.categories.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#001f3f] rounded-[32px] p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-[60%]">
          <h3 className="text-xl font-black leading-tight mb-4">Craving late night snacks?</h3>
          <p className="text-white/60 text-sm mb-6 leading-relaxed">The Night Market is now open near ETF Hostel.</p>
          <button className="bg-white text-[#001f3f] px-6 py-3 rounded-xl font-bold text-sm">ORDER NOW</button>
        </div>
        <div className="absolute -right-4 -bottom-4 w-40 h-40">
           <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?fit=crop&w=300&h=300&q=80" className="w-full h-full object-contain rotate-12" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>

    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-30">
      <button onClick={() => navigateTo('home')} className="flex flex-col items-center gap-1 text-[#001f3f]">
        <div className="w-12 h-12 bg-[#001f3f] rounded-full flex items-center justify-center text-white">
          <LayoutGrid className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
      </button>
      <button onClick={() => navigateTo('history')} className="flex flex-col items-center gap-1 text-gray-400">
        <History className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Orders</span>
      </button>
      {isRiderMode ? (
        <button onClick={() => navigateTo('rider_earnings')} className="flex flex-col items-center gap-1 text-gray-400">
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Earnings</span>
        </button>
      ) : (
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Tag className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Offers</span>
        </button>
      )}
      <button onClick={() => navigateTo('profile')} className="flex flex-col items-center gap-1 text-gray-400">
        <User className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </button>
    </nav>

    {/* Floating Action Buttons Removed as per request */}
  </div>
);
