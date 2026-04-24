import React from 'react';
import { motion } from 'motion/react';
import { Bike, CheckCircle2, LayoutGrid, MapPin, User } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface RestaurantAlertScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const RestaurantAlertScreen: React.FC<RestaurantAlertScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col p-6">
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#001f3f] rounded-xl flex items-center justify-center">
          <Bike className="w-6 h-6 text-white" />
        </div>
        <span className="font-black text-[#001f3f] text-xl italic">CampusEats</span>
      </div>
      <div className="bg-green-50 text-[#00A86B] px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 border border-green-100">
        <div className="w-2 h-2 bg-[#00A86B] rounded-full" /> Online
      </div>
    </header>

    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-[#C1121F] text-white p-8 rounded-[40px] mb-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
      <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 block">Incoming Alert</span>
      <h1 className="text-4xl font-black italic mb-2">New Order</h1>
      <p className="text-white/60 font-bold">Order #CH7730-UNILAG</p>
    </motion.div>

    <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/50 flex flex-col gap-6 mb-8">
      <div className="flex items-center gap-2 mb-2">
        <LayoutGrid className="w-5 h-5 text-gray-400" />
        <h3 className="font-black text-[#001f3f] uppercase tracking-widest text-sm">Items Ordered</h3>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { name: 'Jollof Rice', qty: 1, price: 1500 },
          { name: 'Fried Rice and Chicken', qty: 1, price: 2000 },
          { name: 'Beef and Sauce', qty: 1, price: 800 },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-start">
            <div>
              <h4 className="font-black text-[#001f3f]">{item.name}</h4>
              <span className="text-xs text-gray-400 font-bold">Quantity: x{item.qty}</span>
            </div>
            <span className="font-black text-[#001f3f]">₦{item.price.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 my-2" />
      
      <div className="flex justify-between items-center">
        <span className="text-gray-400 font-bold">Total Order Value</span>
        <span className="text-2xl font-black text-[#001f3f]">₦4,300</span>
      </div>
    </div>

    <div className="bg-gray-100 p-6 rounded-[32px] flex items-center gap-4 mb-12">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
        <User className="w-8 h-8 text-gray-300" />
      </div>
      <div>
        <h4 className="font-black text-[#001f3f] text-lg">Daniel</h4>
        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
          <MapPin className="w-3 h-3" /> ETF Hostel Block C Room 204
        </div>
      </div>
    </div>

    <div className="mt-auto">
      <p className="text-center text-xs font-black text-[#001f3f] uppercase tracking-widest mb-6">Estimated Prep Time</p>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {['10 mins', '15 mins', '20 mins'].map((time, i) => (
          <button
            type="button"
            key={time}
            className={`py-4 rounded-2xl font-bold text-sm transition-all ${i === 1 ? 'bg-[#C1121F] text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={() => navigateTo('home')} className="h-20 border-gray-200">Reject</Button>
        <Button variant="success" onClick={() => navigateTo('home')} className="h-20 text-lg">
          <CheckCircle2 className="w-6 h-6" /> Accept Order
        </Button>
      </div>
    </div>
  </div>
);
