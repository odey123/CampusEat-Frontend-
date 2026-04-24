import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bike, Home, Receipt, Store, Wallet } from 'lucide-react';
import { Screen } from '../../types';

interface AdminFinanceScreenProps {
  navigateTo: (screen: Screen) => void;
}

const stats = [
  { label: 'Today', value: '₦14,100' },
  { label: 'This Week', value: '₦87,300' },
  { label: 'This Month', value: '₦312,000' },
];

const recentTx = [
  { type: 'Restaurant Commission', order: '#CH7755', amount: '₦280', time: '5:42 PM' },
  { type: 'Delivery Fee Margin', order: '#CH7754', amount: '₦100', time: '5:30 PM' },
  { type: 'Restaurant Commission', order: '#CH7753', amount: '₦120', time: '5:18 PM' },
  { type: 'Delivery Fee Margin', order: '#CH7752', amount: '₦100', time: '5:05 PM' },
  { type: 'Restaurant Commission', order: '#CH7751', amount: '₦350', time: '4:55 PM' },
];

export const AdminFinanceScreen: React.FC<AdminFinanceScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 pb-28">
    <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <button type="button" aria-label="Go back" onClick={() => navigateTo('admin_dashboard')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      <h1 className="text-xl font-black text-white">Finance</h1>
      <div className="w-10" />
    </header>

    <div className="p-6 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#001f3f] to-[#00152b] rounded-[32px] p-8 text-center text-white shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-xl" />
        <span className="text-xs font-black uppercase tracking-widest text-white/60 mb-2 block">Platform Revenue Today</span>
        <h2 className="text-5xl font-black mb-4">₦14,100</h2>
        <div className="inline-flex items-center gap-1.5 bg-[#00A86B]/20 text-[#00A86B] px-4 py-2 rounded-full font-bold text-xs border border-[#00A86B]/30">
          ↑ 23% vs yesterday
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3"
      >
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-[20px] shadow-sm border border-gray-50 p-4 flex flex-col gap-1">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
            <span className="text-sm font-black text-[#001f3f] leading-tight">{stat.value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col gap-3"
      >
        <h3 className="font-black text-[#001f3f] text-lg">Revenue Breakdown</h3>
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bike className="w-5 h-5 text-[#001f3f]" />
            </div>
            <div className="flex-1">
              <p className="font-black text-[#001f3f] text-sm">Delivery Fee Margin</p>
              <p className="text-xs font-medium text-gray-400 mt-0.5">100 orders × ₦100 margin</p>
            </div>
            <span className="font-black text-[#00A86B] text-base">₦4,700</span>
          </div>
          <div className="h-px bg-gray-100" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Store className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <p className="font-black text-[#001f3f] text-sm">Restaurant Commission</p>
              <p className="text-xs font-medium text-gray-400 mt-0.5">10% of ₦94,000 food sales</p>
            </div>
            <span className="font-black text-[#00A86B] text-base">₦9,400</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-3"
      >
        <h3 className="font-black text-[#001f3f] text-lg">Pending Payouts</h3>
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Store className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <p className="font-black text-[#001f3f] text-sm">Vendor Payouts</p>
              <p className="text-xs font-medium text-gray-400 mt-0.5">₦84,600 owed to 11 vendors</p>
            </div>
            <button type="button" className="bg-[#C1121F] text-white font-black text-xs rounded-xl px-4 py-2.5 flex-shrink-0">
              Process
            </button>
          </div>
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bike className="w-5 h-5 text-[#001f3f]" />
            </div>
            <div className="flex-1">
              <p className="font-black text-[#001f3f] text-sm">Rider Payouts</p>
              <p className="text-xs font-medium text-gray-400 mt-0.5">₦14,100 owed to 8 riders</p>
            </div>
            <button type="button" className="bg-[#C1121F] text-white font-black text-xs rounded-xl px-4 py-2.5 flex-shrink-0">
              Process
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex flex-col gap-3"
      >
        <h3 className="font-black text-[#001f3f] text-lg">Recent Transactions</h3>
        <div className="flex flex-col gap-3">
          {recentTx.map((tx, i) => (
            <div key={i} className="bg-white rounded-[20px] shadow-sm border border-gray-50 p-4 flex items-center gap-4">
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Receipt className="w-4 h-4 text-[#00A86B]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-[#001f3f] text-xs truncate">{tx.type}</p>
                <p className="text-[10px] font-medium text-gray-400 mt-0.5">Order {tx.order} · {tx.time}</p>
              </div>
              <span className="font-black text-[#00A86B] text-sm flex-shrink-0">{tx.amount}</span>
            </div>
          ))}
        </div>
      </motion.div>
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
      <button type="button" onClick={() => navigateTo('admin_riders')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
        <Bike className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Riders</span>
      </button>
      <button type="button" className="flex flex-col items-center gap-1 text-white relative">
        <Wallet className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Finance</span>
        <div className="absolute -bottom-3 w-4 h-1 bg-[#C1121F] rounded-full" />
      </button>
    </nav>
  </div>
);
