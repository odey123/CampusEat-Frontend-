import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bike, Check, Home, Store, Wallet, X } from 'lucide-react';
import { Screen } from '../../types';

interface AdminVendorsScreenProps {
  navigateTo: (screen: Screen) => void;
}

type Tab = 'pending' | 'active';

const pendingVendors = [
  { name: 'Cosmos Kitchen', owner: 'Biodun Adeyemi', phone: '08123456789', location: 'Faculty of Science', category: 'Nigerian Food', applied: '2 days ago' },
  { name: 'Calabar Kitchen', owner: 'Mrs Effiong', phone: '07034567890', location: 'Engineering Market', category: 'Nigerian Food', applied: '1 day ago' },
  { name: 'Moremi Garden', owner: 'Tolu Osei', phone: '09045678901', location: 'Moremi Hall Area', category: 'Snacks and Drinks', applied: '3 hours ago' },
];

const activeVendors = [
  { name: 'Mavise', category: 'Nigerian Food', orders: 34 },
  { name: 'Iya Moria', category: 'Nigerian Food', orders: 28 },
  { name: 'Salado', category: 'Rice and Proteins', orders: 19 },
];

export const AdminVendorsScreen: React.FC<AdminVendorsScreenProps> = ({ navigateTo }) => {
  const [tab, setTab] = useState<Tab>('pending');

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20">
        <button type="button" aria-label="Go back" onClick={() => navigateTo('admin_dashboard')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-xl font-black text-white">Vendors</h1>
        <div className="w-10" />
      </header>

      <div className="bg-white border-b border-gray-100 px-4 flex sticky top-[76px] z-10">
        <button
          type="button"
          onClick={() => setTab('pending')}
          className={`flex items-center gap-1.5 py-4 px-3 text-xs font-black uppercase tracking-widest transition-colors relative ${tab === 'pending' ? 'text-[#001f3f]' : 'text-gray-400'}`}
        >
          Pending Approval
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${tab === 'pending' ? 'bg-[#C1121F] text-white' : 'bg-gray-100 text-gray-400'}`}>3</span>
          {tab === 'pending' && <motion.div layoutId="vendor-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C1121F] rounded-full" />}
        </button>
        <button
          type="button"
          onClick={() => setTab('active')}
          className={`flex items-center gap-1.5 py-4 px-3 text-xs font-black uppercase tracking-widest transition-colors relative ${tab === 'active' ? 'text-[#001f3f]' : 'text-gray-400'}`}
        >
          Active Vendors
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${tab === 'active' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>11</span>
          {tab === 'active' && <motion.div layoutId="vendor-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C1121F] rounded-full" />}
        </button>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {tab === 'pending'
          ? pendingVendors.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-black text-[#001f3f] text-base">{v.name}</p>
                    <p className="text-xs font-medium text-gray-500 mt-0.5">{v.owner} · {v.phone}</p>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wide bg-[#001f3f]/10 text-[#001f3f] px-2.5 py-1 rounded-full flex-shrink-0">{v.category}</span>
                </div>
                <p className="text-sm font-medium text-gray-500">{v.location}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Applied {v.applied}</p>
                <div className="flex gap-3 pt-1">
                  <button type="button" className="flex-1 h-10 bg-red-50 text-[#C1121F] font-black rounded-xl text-sm flex items-center justify-center gap-2">
                    <X className="w-4 h-4" />Reject
                  </button>
                  <button type="button" className="flex-1 h-10 bg-green-500 text-white font-black rounded-xl text-sm flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />Approve
                  </button>
                </div>
              </motion.div>
            ))
          : activeVendors.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <p className="font-black text-[#001f3f] text-base">{v.name}</p>
                  <span className="text-[10px] font-black uppercase tracking-wide bg-green-100 text-green-600 px-2.5 py-1 rounded-full">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wide bg-[#001f3f]/10 text-[#001f3f] px-2.5 py-1 rounded-full">{v.category}</span>
                  <span className="text-sm font-bold text-gray-500">{v.orders} orders this week</span>
                </div>
                <button type="button" className="w-full h-10 bg-[#001f3f] text-white font-black rounded-xl text-sm mt-1">
                  View Details
                </button>
              </motion.div>
            ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#001f3f] px-8 py-5 flex justify-between items-center z-30">
        <button type="button" onClick={() => navigateTo('admin_dashboard')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Dashboard</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-white relative">
          <Store className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Vendors</span>
          <div className="absolute -bottom-3 w-4 h-1 bg-[#C1121F] rounded-full" />
        </button>
        <button type="button" onClick={() => navigateTo('admin_riders')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Bike className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Riders</span>
        </button>
        <button type="button" onClick={() => navigateTo('admin_finance')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Finance</span>
        </button>
      </nav>
    </div>
  );
};
