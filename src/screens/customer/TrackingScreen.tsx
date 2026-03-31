import React, { useState, useEffect } from 'react';
import { AlertCircle, ArrowLeft, Bike, Check, ChevronRight, Clock, MessageCircle, Phone, Star, Search, LayoutGrid, History, User } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface TrackingScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const TrackingScreen: React.FC<TrackingScreenProps> = ({ navigateTo }) => {
  const [orderStatus, setOrderStatus] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setOrderStatus(1), 3000);
    const t2 = setTimeout(() => setOrderStatus(2), 6000);
    const t3 = setTimeout(() => navigateTo('rating'), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [navigateTo]);

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
    <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <button onClick={() => navigateTo('home')} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
        <ArrowLeft className="w-5 h-5 text-[#001f3f]" />
      </button>
      <h2 className="text-xl font-black text-[#001f3f]">Order Tracking</h2>
      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
        <AlertCircle className="w-5 h-5 text-[#001f3f]" />
      </button>
    </header>

    <div className="p-8">
      <h1 className="text-4xl font-black text-[#001f3f] leading-tight mb-2">Your food is being prepared</h1>
      <div className="flex items-center gap-2 text-gray-400 font-bold">
        <Clock className="w-4 h-4" /> Order #CH7729-UNILAG
      </div>

      <div className="mt-12 bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C1121F]/5 rounded-full -mr-16 -mt-16" />
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Arrival</span>
            <span className="text-4xl font-black text-[#C1121F] italic">18 minutes</span>
          </div>
          <div className="w-16 h-16 bg-[#C1121F]/10 rounded-2xl flex items-center justify-center">
            <Bike className="w-8 h-8 text-[#C1121F]" />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-8 pl-4 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200" />
        
        <div className="flex gap-6 items-start relative z-10">
          <div className="w-8 h-8 bg-[#001f3f] rounded-full flex items-center justify-center border-4 border-white shadow-md">
            <Check className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-black text-[#001f3f]">Order Confirmed</h4>
            <p className="text-sm text-gray-400 font-medium">We got your order</p>
          </div>
        </div>

        <div className={`flex gap-6 items-start relative z-10 transition-all duration-500`}>
          <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-red-100 shadow-md`}>
            <div className={`w-2.5 h-2.5 bg-[#C1121F] rounded-full`} />
          </div>
          <div>
            <h4 className={`font-black text-[#C1121F]`}>Being Prepared</h4>
            <p className="text-sm text-gray-400 font-medium">Mavise is cooking your food</p>
          </div>
        </div>

        <div className={`flex gap-6 items-start relative z-10 transition-all duration-500 ${orderStatus < 1 ? 'opacity-30' : 'opacity-100'}`}>
          <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 ${orderStatus >= 1 ? 'border-red-100' : 'border-gray-50'} shadow-md`}>
            <div className={`w-2.5 h-2.5 ${orderStatus >= 1 ? 'bg-[#C1121F]' : 'bg-gray-300'} rounded-full`} />
          </div>
          <div>
            <h4 className={`font-black ${orderStatus >= 1 ? 'text-[#C1121F]' : 'text-gray-400'}`}>Rider On The Way</h4>
            <p className="text-sm text-gray-400 font-medium">Your rider is heading to you</p>
          </div>
        </div>

        <div className={`flex gap-6 items-start relative z-10 transition-all duration-500 ${orderStatus < 2 ? 'opacity-30' : 'opacity-100'}`}>
          <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 ${orderStatus >= 2 ? 'border-red-100' : 'border-gray-50'} shadow-md`}>
            <div className={`w-2.5 h-2.5 ${orderStatus >= 2 ? 'bg-[#C1121F]' : 'bg-gray-300'} rounded-full`} />
          </div>
          <div>
            <h4 className={`font-black ${orderStatus >= 2 ? 'text-[#001f3f]' : 'text-gray-400'}`}>Delivered</h4>
            <p className="text-sm text-gray-400 font-medium">Enjoy your meal</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white p-6 rounded-[40px] shadow-lg border border-gray-50">
        <div className="flex items-center gap-4 mb-6">
          <img src="https://picsum.photos/seed/tunde/100/100" className="w-16 h-16 rounded-2xl object-cover" referrerPolicy="no-referrer" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-black text-[#001f3f] text-lg">Tunde</h4>
              <div className="flex items-center gap-1 text-orange-400 font-bold text-sm bg-orange-50 px-2 py-1 rounded-lg">
                <Star className="w-3 h-3 fill-current" /> 4.8
              </div>
            </div>
            <p className="text-sm text-gray-400 font-medium">Your Delivery Hero</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="secondary" className="h-14">
            <Phone className="w-5 h-5" /> Call
          </Button>
          <Button variant="success" className="h-14">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </Button>
        </div>
      </div>

      <Button variant="primary" className="w-full h-20 mt-12 italic font-black text-lg">
        View Order Details <ChevronRight className="w-5 h-5" />
      </Button>
    </div>

    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-30">
      <button onClick={() => navigateTo('home')} className="flex flex-col items-center gap-1 text-gray-400">
        <LayoutGrid className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400">
        <Search className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Search</span>
      </button>
      <button onClick={() => navigateTo('history')} className="flex flex-col items-center gap-1 text-[#C1121F]">
        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#C1121F]">
          <History className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest">Orders</span>
      </button>
      <button onClick={() => navigateTo('profile')} className="flex flex-col items-center gap-1 text-gray-400">
        <User className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </button>
    </nav>
  </div>
  );
};
