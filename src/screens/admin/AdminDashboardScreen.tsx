import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Bell, Bike, Home, Receipt, Settings, Store, Wallet } from 'lucide-react';
import { Screen } from '../../types';

interface AdminDashboardScreenProps {
  navigateTo: (screen: Screen) => void;
}

const liveOrders = [
  { id: '#CH7751', customer: 'Daniel', hostel: 'ETF Hostel', vendor: 'Mavise', rider: 'Tunde', status: 'Preparing' as const, time: '5 mins' },
  { id: '#CH7752', customer: 'Fatima', hostel: 'Fagunwa Hall', vendor: 'Iya Moria', rider: 'Emeka', status: 'On The Way' as const, time: '12 mins' },
  { id: '#CH7753', customer: 'Samuel', hostel: 'Moremi Hall', vendor: 'Salado', rider: 'Bola', status: 'Delivered' as const, time: '18 mins' },
];

const statusBadge: Record<string, string> = {
  Preparing: 'bg-orange-100 text-orange-600',
  'On The Way': 'bg-blue-100 text-blue-600',
  Delivered: 'bg-green-100 text-green-600',
};

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 pb-28">
    <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <div className="flex items-center gap-1.5">
        <Bike className="w-4 h-4 text-[#C1121F]" />
        <span className="font-black text-white italic tracking-tight text-sm">CampusEats</span>
      </div>
      <h1 className="text-lg font-black text-white">Admin Dashboard</h1>
      <button type="button" aria-label="Notifications" className="relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
        <Bell className="w-5 h-5 text-white" />
        <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#C1121F] rounded-full text-white text-[9px] font-black flex items-center justify-center">3</span>
      </button>
    </header>

    <div className="p-5 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#001f3f] to-[#00152b] rounded-[28px] p-6 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">Today's Overview</p>
        <div className="grid grid-cols-2 gap-y-5 relative z-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Receipt className="w-4 h-4 text-white/60" />
              <span className="text-2xl font-black text-white">47</span>
            </div>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Total Orders</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Bike className="w-4 h-4 text-white/60" />
              <span className="text-2xl font-black text-white">8</span>
            </div>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Active Riders</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-[#00A86B]">₦</span>
              <span className="text-2xl font-black text-white">56,400</span>
            </div>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Revenue Today</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#C1121F]" />
              <span className="text-2xl font-black text-[#C1121F]">2</span>
            </div>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Pending Issues</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-black text-[#001f3f]">Live Orders</h2>
          <div className="w-6 h-6 bg-[#C1121F] rounded-full flex items-center justify-center text-white text-xs font-black">12</div>
        </div>
        {liveOrders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.07 }}
            className="bg-white rounded-[20px] shadow-sm border border-gray-50 p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400">Order {order.id}</span>
              <span className={`text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full ${statusBadge[order.status]}`}>
                {order.status}
              </span>
            </div>
            <p className="font-black text-[#001f3f] text-sm">{order.customer} · {order.hostel}</p>
            <div className="flex items-center justify-between text-xs font-medium text-gray-400">
              <span>From <strong className="text-[#001f3f]">{order.vendor}</strong></span>
              <span>Rider: <strong className="text-[#001f3f]">{order.rider}</strong></span>
              <span>{order.time}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-lg font-black text-[#001f3f]">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button type="button" onClick={() => navigateTo('admin_vendors')} className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-50 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
              <Store className="w-6 h-6 text-[#001f3f]" />
            </div>
            <span className="font-bold text-[#001f3f] text-sm">Manage Vendors</span>
          </button>
          <button type="button" onClick={() => navigateTo('admin_riders')} className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-50 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
              <Bike className="w-6 h-6 text-[#001f3f]" />
            </div>
            <span className="font-bold text-[#001f3f] text-sm">Manage Riders</span>
          </button>
          <button type="button" onClick={() => navigateTo('admin_finance')} className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-50 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-[#001f3f]" />
            </div>
            <span className="font-bold text-[#001f3f] text-sm">View Finance</span>
          </button>
          <button type="button" className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-50 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-[#001f3f]" />
            </div>
            <span className="font-bold text-[#001f3f] text-sm">Platform Settings</span>
          </button>
        </div>
      </motion.div>
    </div>

    <nav className="fixed bottom-0 left-0 right-0 bg-[#001f3f] px-8 py-5 flex justify-between items-center z-30">
      <button type="button" className="flex flex-col items-center gap-1 text-white relative">
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Dashboard</span>
        <div className="absolute -bottom-3 w-4 h-1 bg-[#C1121F] rounded-full" />
      </button>
      <button type="button" onClick={() => navigateTo('admin_vendors')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
        <Store className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Vendors</span>
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
