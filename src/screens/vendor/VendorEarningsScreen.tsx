import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Grid, Home, Plus, Receipt, Settings, Utensils } from 'lucide-react';
import { Screen } from '../../types';

interface VendorEarningsScreenProps {
  navigateTo: (screen: Screen) => void;
}

const transactions = [
  { id: '#CH7741', items: 'Jollof Rice x1', time: '2:45pm', amount: '₦1,350' },
  { id: '#CH7742', items: 'Beef and Sauce x2', time: '1:30pm', amount: '₦720' },
  { id: '#CH7743', items: 'Fried Rice and Chicken', time: '12:15pm', amount: '₦1,800' },
  { id: '#CH7744', items: 'Amala and Ewedu', time: '11:00am', amount: '₦1,080' },
  { id: '#CH7745', items: 'White Rice and Stew', time: '10:20am', amount: '₦1,080' },
  { id: '#CH7746', items: 'Snacks Combo', time: '9:45am', amount: '₦900' },
];

const stats = [
  { label: 'Today', value: '₦24,600' },
  { label: 'This Week', value: '₦142,000' },
  { label: 'This Month', value: '₦487,500' },
];

export const VendorEarningsScreen: React.FC<VendorEarningsScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 pb-28">
    <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <button
        type="button"
        aria-label="Go back"
        onClick={() => navigateTo('vendor_dashboard')}
        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      <h1 className="text-xl font-black text-white">My Earnings</h1>
      <div className="w-10" />
    </header>

    <div className="p-6 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#001f3f] to-[#00152b] rounded-[32px] p-8 text-center text-white shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-xl" />
        <span className="text-xs font-black uppercase tracking-widest text-white/60 mb-2 block">Total Earned Today</span>
        <h2 className="text-5xl font-black mb-4">₦24,600</h2>
        <div className="inline-flex items-center gap-1.5 bg-[#00A86B]/20 text-[#00A86B] px-4 py-2 rounded-full font-bold text-xs border border-[#00A86B]/30">
          <Plus className="w-3 h-3" />After 10% platform commission
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
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <h3 className="font-black text-[#001f3f] text-lg">Recent Transactions</h3>
        <div className="flex flex-col gap-3">
          {transactions.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.06 }}
              className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-50 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Utensils className="w-5 h-5 text-[#C1121F]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-[#001f3f] text-sm truncate">Order {tx.id}</p>
                <p className="text-xs font-medium text-gray-400 truncate">{tx.items} · {tx.time}</p>
              </div>
              <span className="font-black text-[#00A86B] text-sm flex-shrink-0">{tx.amount}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-xs font-medium text-gray-400 text-center mt-1">
          Amounts shown are after CampusEats 10% commission
        </p>
      </motion.div>
    </div>

    <nav className="fixed bottom-0 left-0 right-0 bg-[#001f3f] px-8 py-5 flex justify-between items-center z-30">
      <button
        type="button"
        onClick={() => navigateTo('vendor_dashboard')}
        className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
      >
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
      </button>
      <button
        type="button"
        onClick={() => navigateTo('vendor_active_orders')}
        className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
      >
        <Receipt className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Orders</span>
      </button>
      <button
        type="button"
        onClick={() => navigateTo('vendor_menu')}
        className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
      >
        <Grid className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Menu</span>
      </button>
      <button
        type="button"
        className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
      >
        <Settings className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Settings</span>
      </button>
    </nav>
  </div>
);
