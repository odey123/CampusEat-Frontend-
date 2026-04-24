import React from 'react';
import { motion } from 'motion/react';
import { Bike, Check, CheckCircle2, Clock, HelpCircle, LayoutGrid, MapPin, MessageCircle, Package, Phone, Receipt, User, Wallet } from 'lucide-react';
import { Screen } from '../../types';

interface RiderActiveDeliveryScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const RiderActiveDeliveryScreen: React.FC<RiderActiveDeliveryScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 pb-28">
    <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20">
      <div className="w-10" />
      <h1 className="text-xl font-black text-white">Active Delivery</h1>
      <button type="button" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
        <HelpCircle className="w-5 h-5 text-white" />
      </button>
    </header>

    <div className="p-5 flex flex-col gap-4">
      {/* Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-green-500 rounded-2xl p-4 flex items-center gap-3"
      >
        <div className="relative flex-shrink-0">
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-60" />
        </div>
        <p className="text-white font-black text-base">On The Way — Heading to ETF Hostel</p>
      </motion.div>

      {/* Delivery Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm p-5"
      >
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#C1121F]" />
            </div>
            <div className="w-px flex-1 min-h-[32px] border-l-2 border-dashed border-gray-200 my-1" />
          </div>
          <div className="pb-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Picked Up From</p>
            <p className="font-black text-[#001f3f] text-base leading-tight mt-0.5">Mavise Restaurant, Faculty Area</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-[#001f3f]" />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivering To</p>
            <p className="font-black text-[#001f3f] text-base leading-tight mt-0.5">ETF Hostel, Block C Room 204</p>
            <p className="text-sm text-gray-400 mt-0.5">Daniel</p>
          </div>
        </div>
      </motion.div>

      {/* Info Pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-3 gap-3"
      >
        <div className="bg-gray-100 rounded-xl p-3 flex flex-col items-center gap-1">
          <LayoutGrid className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-black text-[#001f3f]">0.8km</span>
        </div>
        <div className="bg-gray-100 rounded-xl p-3 flex flex-col items-center gap-1">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-black text-[#001f3f]">12 mins</span>
        </div>
        <div className="bg-green-50 rounded-xl p-3 flex flex-col items-center gap-1 border border-green-100">
          <Wallet className="w-4 h-4 text-[#00A86B]" />
          <span className="text-xs font-black text-[#00A86B]">₦300</span>
        </div>
      </motion.div>

      {/* Progress Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-sm p-5"
      >
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Delivery Progress</p>

        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <div className="w-0.5 h-8 bg-green-500 my-1" />
          </div>
          <div className="pb-2">
            <p className="font-black text-[#001f3f] text-sm">Order Accepted</p>
            <p className="text-xs text-gray-400 mt-0.5">You accepted this delivery</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <div className="w-0.5 h-8 bg-gray-200 my-1" />
          </div>
          <div className="pb-2">
            <p className="font-black text-[#001f3f] text-sm">Food Picked Up</p>
            <p className="text-xs text-gray-400 mt-0.5">Collected from Mavise</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-[#001f3f] rounded-full animate-pulse flex-shrink-0" />
          <div>
            <p className="font-black text-[#001f3f] text-sm">Delivering to Customer</p>
            <p className="text-xs text-gray-400 mt-0.5">Heading to ETF Hostel Block C</p>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex flex-col gap-3"
      >
        <button
          type="button"
          className="w-full h-14 bg-white border-2 border-[#001f3f] text-[#001f3f] font-black rounded-2xl flex items-center justify-center gap-3 text-base"
        >
          <Package className="w-5 h-5" />
          Confirm Pickup
        </button>
        <button
          type="button"
          onClick={() => navigateTo('rider_earnings')}
          className="w-full h-14 bg-[#C1121F] text-white font-black rounded-2xl flex items-center justify-center gap-3 text-base shadow-lg active:scale-[0.98] transition-transform"
        >
          <CheckCircle2 className="w-5 h-5" />
          Confirm Delivery
        </button>
      </motion.div>

      {/* Customer Contact */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-sm p-4"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-[#001f3f]" />
          </div>
          <p className="font-black text-[#001f3f]">Daniel Adeyemi</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-11 bg-[#25D366] text-white font-black rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
          <button
            type="button"
            className="h-11 bg-[#001f3f] text-white font-black rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call
          </button>
        </div>
      </motion.div>
    </div>

    <nav className="fixed bottom-0 left-0 right-0 bg-[#001f3f] px-8 py-4 flex justify-between items-center z-30">
      <button type="button" onClick={() => navigateTo('rider_request')} className="flex flex-col items-center gap-1 text-white/50">
        <Receipt className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Orders</span>
      </button>
      <button type="button" className="flex flex-col items-center gap-1 text-white">
        <Bike className="w-6 h-6" />
        <span className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#C1121F] pb-0.5">Active</span>
      </button>
      <button type="button" onClick={() => navigateTo('rider_earnings')} className="flex flex-col items-center gap-1 text-white/50">
        <Wallet className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Earnings</span>
      </button>
      <button type="button" onClick={() => navigateTo('profile')} className="flex flex-col items-center gap-1 text-white/50">
        <User className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </button>
    </nav>
  </div>
);
