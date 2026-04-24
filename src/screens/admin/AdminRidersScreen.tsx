import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bike, Home, Plus, Star, Store, Wallet } from 'lucide-react';
import { Screen } from '../../types';

interface AdminRidersScreenProps {
  navigateTo: (screen: Screen) => void;
}

type Tab = 'active' | 'all';

const riders = [
  { name: 'Tunde', online: true, activity: 'Delivering to ETF Hostel', rating: 4.9, deliveries: 7, earned: '₦2,100' },
  { name: 'Emeka', online: true, activity: 'Delivering to Fagunwa Hall', rating: 4.7, deliveries: 6, earned: '₦1,800' },
  { name: 'Bola', online: true, activity: 'Waiting for orders', rating: 4.8, deliveries: 5, earned: '₦1,500' },
  { name: 'Chidi', online: false, activity: 'Last seen 2 hours ago', rating: 4.6, deliveries: 3, earned: '₦900' },
];

export const AdminRidersScreen: React.FC<AdminRidersScreenProps> = ({ navigateTo }) => {
  const [tab, setTab] = useState<Tab>('active');
  const displayed = tab === 'active' ? riders.filter(r => r.online) : riders;

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20">
        <button type="button" aria-label="Go back" onClick={() => navigateTo('admin_dashboard')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-xl font-black text-white">Riders</h1>
        <div className="w-10" />
      </header>

      <div className="bg-white border-b border-gray-100 px-4 flex sticky top-[76px] z-10">
        <button
          type="button"
          onClick={() => setTab('active')}
          className={`flex items-center gap-1.5 py-4 px-3 text-xs font-black uppercase tracking-widest transition-colors relative ${tab === 'active' ? 'text-[#001f3f]' : 'text-gray-400'}`}
        >
          Active Riders
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${tab === 'active' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>8</span>
          {tab === 'active' && <motion.div layoutId="rider-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C1121F] rounded-full" />}
        </button>
        <button
          type="button"
          onClick={() => setTab('all')}
          className={`flex items-center gap-1.5 py-4 px-3 text-xs font-black uppercase tracking-widest transition-colors relative ${tab === 'all' ? 'text-[#001f3f]' : 'text-gray-400'}`}
        >
          All Riders
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${tab === 'all' ? 'bg-[#C1121F] text-white' : 'bg-gray-100 text-gray-400'}`}>24</span>
          {tab === 'all' && <motion.div layoutId="rider-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C1121F] rounded-full" />}
        </button>
      </div>

      <div className="bg-white px-5 py-4 flex gap-3 border-b border-gray-100">
        {[
          { label: 'Online Now', value: '8', color: 'text-[#00A86B]' },
          { label: 'Deliveries Today', value: '47', color: 'text-[#001f3f]' },
          { label: 'Avg Rating', value: '4.7', color: 'text-[#001f3f]' },
        ].map(stat => (
          <div key={stat.label} className="flex-1 bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-0.5">
            <span className={`text-lg font-black ${stat.color}`}>{stat.value}</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center leading-tight">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="p-5 flex flex-col gap-4">
        {displayed.map((rider, i) => (
          <motion.div
            key={rider.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <p className="font-black text-[#001f3f] text-base">{rider.name}</p>
              <span className={`text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full ${rider.online ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                {rider.online ? 'Online' : 'Offline'}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-500">{rider.activity}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-black text-[#001f3f]">{rider.rating}</span>
              </div>
              <span className="text-xs font-medium text-gray-400">{rider.deliveries} deliveries today</span>
              <span className="text-sm font-black text-[#00A86B]">{rider.earned}</span>
            </div>
          </motion.div>
        ))}

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full h-14 bg-[#C1121F] text-white font-black rounded-2xl flex items-center justify-center gap-3 text-base shadow-lg mt-2"
        >
          <Plus className="w-5 h-5" />
          Invite New Riders
        </motion.button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#001f3f] px-8 py-5 flex justify-between items-center z-30">
        <button type="button" onClick={() => navigateTo('admin_dashboard')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Dashboard</span>
        </button>
        <button type="button" onClick={() => navigateTo('admin_vendors')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Store className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Vendors</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-white relative">
          <Bike className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Riders</span>
          <div className="absolute -bottom-3 w-4 h-1 bg-[#C1121F] rounded-full" />
        </button>
        <button type="button" onClick={() => navigateTo('admin_finance')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Finance</span>
        </button>
      </nav>
    </div>
  );
};
