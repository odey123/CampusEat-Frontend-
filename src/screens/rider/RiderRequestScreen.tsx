import React from 'react';
import { motion } from 'motion/react';
import { Bell, Bike, CheckCircle2, Clock, LayoutGrid, MapPin, Wallet } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface RiderRequestScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const RiderRequestScreen: React.FC<RiderRequestScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white w-full max-w-sm rounded-[40px] p-8 flex flex-col items-center shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-8">
        <Bell className="w-5 h-5 text-red-500 fill-red-500" />
        <span className="font-black text-[#001f3f] uppercase tracking-widest text-sm">New Order Request</span>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </div>

      <h1 className="text-3xl font-black text-[#001f3f] mb-2">New Delivery Request</h1>
      <p className="text-gray-400 font-medium mb-12">Accept before time runs out</p>

      <div className="w-full flex flex-col gap-8 mb-12 relative">
        <div className="absolute left-[23px] top-8 bottom-8 w-px border-l-2 border-dashed border-gray-200" />
        
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center relative z-10">
            <MapPin className="w-6 h-6 text-[#C1121F]" />
          </div>
          <div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pickup From</span>
            <h4 className="font-black text-[#001f3f] text-lg">Mavise Restaurant</h4>
            <p className="text-sm text-gray-400 font-medium">Faculty Area, UNILAG</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center relative z-10">
            <Bike className="w-6 h-6 text-[#001f3f]" />
          </div>
          <div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Deliver To</span>
            <h4 className="font-black text-[#001f3f] text-lg">ETF Hostel</h4>
            <p className="text-sm text-gray-400 font-medium">Block C, Room 204</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 w-full mb-12">
        <div className="bg-gray-100 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
          <LayoutGrid className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-black text-[#001f3f]">0.8km</span>
        </div>
        <div className="bg-gray-100 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-black text-[#001f3f]">8 mins</span>
        </div>
        <div className="bg-green-50 p-3 rounded-xl flex flex-col items-center justify-center gap-1 border border-green-100">
          <Wallet className="w-4 h-4 text-[#00A86B]" />
          <span className="text-xs font-black text-[#00A86B]">₦300</span>
        </div>
      </div>

      <div className="relative w-32 h-32 mb-12">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="#C1121F" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-[#001f3f]">25s</span>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Left</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <Button variant="ghost" onClick={() => navigateTo('home')} className="h-16">Decline</Button>
        <Button variant="success" onClick={() => navigateTo('home')} className="h-16">
          Accept <CheckCircle2 className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  </div>
);
