import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Screen } from '../../types';

interface VendorActiveOrdersScreenProps {
  navigateTo: (screen: Screen) => void;
}

type TabId = 'all' | 'preparing' | 'ready';

const orders = [
  {
    id: '#CH7741-UNILAG',
    items: 'Jollof Rice x1 and Fried Rice x1',
    customer: 'Daniel',
    hostel: 'ETF Hostel',
    total: '₦3,500',
    status: 'preparing' as const,
    timeLeft: '8 mins remaining',
  },
  {
    id: '#CH7742-UNILAG',
    items: 'Beef and Sauce x2',
    customer: 'Samuel',
    hostel: 'Mariere Hall',
    total: '₦1,600',
    status: 'preparing' as const,
    timeLeft: '3 mins remaining',
  },
  {
    id: '#CH7743-UNILAG',
    items: 'Amala and Ewedu x1',
    customer: 'Fatima',
    hostel: 'Fagunwa Hall',
    total: '₦1,200',
    status: 'ready' as const,
    timeLeft: null,
  },
  {
    id: '#CH7744-UNILAG',
    items: 'Snacks Combo x2',
    customer: 'David',
    hostel: 'Biobaku Hall',
    total: '₦1,000',
    status: 'ready' as const,
    timeLeft: null,
  },
];

export const VendorActiveOrdersScreen: React.FC<VendorActiveOrdersScreenProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const tabs: { id: TabId; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: 4 },
    { id: 'preparing', label: 'Preparing', count: 2 },
    { id: 'ready', label: 'Ready for Pickup', count: 2 },
  ];

  const filtered = activeTab === 'all' ? orders : orders.filter(o => o.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="bg-[#001f3f] px-6 pt-12 pb-5 flex items-center justify-between sticky top-0 z-20">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigateTo('vendor_dashboard')}
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-xl font-black text-white">Active Orders</h1>
        <div className="w-10" />
      </header>

      <div className="bg-white border-b border-gray-100 px-4 flex sticky top-[76px] z-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 py-4 px-3 text-xs font-black uppercase tracking-widest transition-colors relative ${
              activeTab === tab.id ? 'text-[#001f3f]' : 'text-gray-400'
            }`}
          >
            {tab.label}
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
              activeTab === tab.id ? 'bg-[#C1121F] text-white' : 'bg-gray-100 text-gray-400'
            }`}>
              {tab.count}
            </span>
            {activeTab === tab.id && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C1121F] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="p-5 flex flex-col gap-4">
        {filtered.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-[24px] shadow-sm border border-gray-50 p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400">Order {order.id}</span>
              {order.status === 'preparing' ? (
                <span className="bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full">
                  Preparing
                </span>
              ) : (
                <span className="bg-green-100 text-green-600 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full">
                  Ready for Pickup
                </span>
              )}
            </div>

            <p className="font-bold text-[#001f3f] text-sm leading-snug">{order.items}</p>
            <p className="text-xs font-medium text-gray-500">{order.customer} · {order.hostel}</p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-black text-[#C1121F]">{order.total}</span>
              {order.timeLeft && (
                <span className="text-xs font-medium text-gray-400">{order.timeLeft}</span>
              )}
            </div>

            <div className="flex gap-3 pt-1">
              {order.status === 'preparing' ? (
                <>
                  <button type="button" className="flex-1 h-10 bg-gray-100 text-gray-500 font-bold rounded-xl text-xs">
                    Still Preparing
                  </button>
                  <button type="button" className="flex-1 h-10 bg-green-500 text-white font-bold rounded-xl text-xs">
                    Mark as Ready
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 h-10 bg-[#001f3f]/5 text-[#001f3f] font-bold rounded-xl text-xs flex items-center justify-center">
                    Rider Assigned
                  </div>
                  <button type="button" className="flex-1 h-10 bg-green-500 text-white font-bold rounded-xl text-xs">
                    Order Collected
                  </button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
