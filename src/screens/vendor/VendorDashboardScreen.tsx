import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Receipt, Clock, Grid, Wallet, History, Home, Bike } from 'lucide-react';
import { Screen } from '../../types';
import { Button } from '../../components/common/Button';

interface VendorDashboardScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const VendorDashboardScreen: React.FC<VendorDashboardScreenProps> = ({ navigateTo }) => {
  const [isOnline, setIsOnline] = useState(true);

  const pendingOrders = [
    { id: '#CH7741-UNILAG', items: 'Jollof Rice x1 and Fried Rice and Chicken x1', customer: 'Daniel, ETF Hostel Block C Room 204', total: '₦3,500' },
    { id: '#CH7742-UNILAG', items: 'Beef and Sauce x2, White Rice x1', customer: 'Samuel, Mariere Hall Room 112', total: '₦2,800' },
    { id: '#CH7743-UNILAG', items: 'Snacks Combo x1, Soft Drink x2', customer: 'Sarah, Moremi Hall Room 30', total: '₦1,500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-24">
      {/* Header */}
      <div className="bg-[#001f3f] px-6 pt-12 pb-6 flex items-start justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-0.5">
            <Bike className="w-4 h-4 text-[#C1121F]" />
            <span className="font-black text-white italic tracking-tight">CampusEats</span>
          </div>
          <span className="text-xs font-medium text-white/60">Managing: <strong className="text-white">Mavise</strong></span>
        </div>
        <div className="flex items-center gap-4 pt-1">
          <div className="flex items-center gap-2 bg-white/10 rounded-full pl-3 pr-1 py-1 backdrop-blur-md">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-[#00A86B]' : 'bg-gray-400'}`} />
            <span className="text-white text-xs font-bold mr-1">{isOnline ? 'Online' : 'Offline'}</span>
            <div 
              onClick={() => setIsOnline(!isOnline)}
              className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors ${isOnline ? 'bg-[#00A86B]' : 'bg-gray-500'}`}
            >
              <motion.div 
                layout
                className="w-4 h-4 bg-white rounded-full shadow-sm"
                animate={{ x: isOnline ? 16 : 0 }}
              />
            </div>
          </div>
          <button type="button" aria-label="Settings" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-8 overflow-y-auto no-scrollbar">
        {/* Summary Card */}
        <div className="bg-gradient-to-br from-[#001f3f] to-[#00152b] rounded-[32px] p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
          <h3 className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4">Today's Summary</h3>
          <div className="grid grid-cols-3 gap-2 divide-x divide-white/10 relative z-10">
            <div className="flex flex-col items-center justify-center">
              <Receipt className="w-5 h-5 text-white/80 mb-1" />
              <span className="text-xl font-black mb-1">12</span>
              <span className="text-[10px] font-bold text-white/60 text-center">Orders</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-white/80 font-black mb-1">₦</span>
              <span className="text-xl font-black mb-1">24,600</span>
              <span className="text-[10px] font-bold text-white/60 text-center">Revenue</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Clock className="w-5 h-5 text-[#C1121F] mb-1" />
              <span className="text-xl font-black text-[#C1121F] mb-1">3</span>
              <span className="text-[10px] font-bold text-white/60 text-center">Pending</span>
            </div>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-black text-[#001f3f]">Pending Orders</h3>
            <div className="w-6 h-6 bg-[#C1121F] rounded-full flex items-center justify-center text-white text-xs font-black">
              3
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {pendingOrders.map((order, idx) => (
              <div key={idx} className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex flex-col gap-3">
                <span className="text-xs font-bold text-gray-400">Order {order.id}</span>
                <p className="font-bold text-[#001f3f] text-sm leading-snug">{order.items}</p>
                <p className="text-xs font-medium text-gray-500">{order.customer}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-lg font-black text-[#C1121F]">{order.total}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" className="px-5 py-2.5 h-auto text-xs font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl">
                      View
                    </Button>
                    <Button variant="success" className="px-5 py-2.5 h-auto text-xs font-bold rounded-xl shadow-none">
                       Accept
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-black text-[#001f3f]">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={() => navigateTo('vendor_menu')} className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all">
              <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <Grid className="w-6 h-6 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f] text-sm">Manage Menu</span>
            </button>
            <button type="button" onClick={() => navigateTo('vendor_earnings')} className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all">
              <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f] text-sm">View Earnings</span>
            </button>
            <button type="button" className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all">
              <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <History className="w-6 h-6 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f] text-sm">Order History</span>
            </button>
            <button type="button" className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all">
              <div className="w-12 h-12 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f] text-sm">Restaurant Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#001f3f] px-8 py-5 flex justify-between items-center z-30">
        <button type="button" onClick={() => navigateTo('home')} className="flex flex-col items-center gap-1 text-white relative">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
          <div className="absolute -bottom-3 w-4 h-1 bg-[#C1121F] rounded-full" />
        </button>
        <button type="button" onClick={() => navigateTo('vendor_active_orders')} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Receipt className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Orders</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Grid className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Menu</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors">
          <Settings className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Settings</span>
        </button>
      </nav>
    </div>
  );
};
