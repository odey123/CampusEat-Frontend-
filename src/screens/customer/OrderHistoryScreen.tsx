import React, { useState } from 'react';
import { ArrowLeft, History } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen, Restaurant } from '../../types';
import { RESTAURANTS } from '../../data/mockData';

interface OrderHistoryScreenProps {
  navigateTo: (screen: Screen) => void;
  setSelectedRestaurant: (restaurant: Restaurant | null) => void;
}

export const OrderHistoryScreen: React.FC<OrderHistoryScreenProps> = ({ navigateTo, setSelectedRestaurant }) => {
  const [activeTab, setActiveTab] = useState('All');
  
  const historyOrders = [
    { id: 'o1', restaurant: 'Mavise', items: 'Jollof Rice and Fried Rice and Chicken', total: '₦3,900', status: 'Delivered', time: '2 hours ago' },
    { id: 'o2', restaurant: 'Iya Moria', items: 'Beef and Sauce x2', total: '₦1,600', status: 'Delivered', time: 'Yesterday 8pm' },
    { id: 'o3', restaurant: 'Salado', items: 'White Rice and Stew', total: '₦1,200', status: 'Processing', time: 'Just now' },
    { id: 'o4', restaurant: 'Glamos Rarebits', items: 'Fried Rice and Chicken', total: '₦2,000', status: 'Delivered', time: '2 days ago' },
  ];

  const filteredOrders = historyOrders.filter(order => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Active') return order.status === 'Processing';
    if (activeTab === 'Completed') return order.status === 'Delivered';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-[#001f3f] p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <button onClick={() => navigateTo('home')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h2 className="text-xl font-black text-white">My Orders</h2>
        <div className="w-10" />
      </header>

      <div className="bg-white border-b border-gray-100 sticky top-[88px] z-10">
        <div className="flex px-6">
          {['All', 'Active', 'Completed'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === tab ? 'border-[#C1121F] text-[#C1121F]' : 'border-transparent text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {filteredOrders.map(order => (
          <div key={order.id} className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-black text-[#001f3f]">{order.restaurant}</h3>
              <span className="text-xs font-medium text-gray-400">{order.time}</span>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-4 pb-4 border-b border-gray-100">{order.items}</p>
            
            <div className="flex justify-between items-center mb-4">
              <span className="font-black text-[#C1121F] text-lg">{order.total}</span>
              <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-[#00A86B]/10 text-[#00A86B]' : 'bg-[#C1121F]/10 text-[#C1121F]'}`}>
                {order.status}
              </div>
            </div>
            
            {order.status === 'Delivered' && (
              <Button 
                onClick={() => {
                  const res = RESTAURANTS.find(r => r.name === order.restaurant);
                  if (res) {
                    setSelectedRestaurant(res);
                    navigateTo('restaurant');
                  }
                }} 
                className="w-full text-sm py-3"
                variant="primary"
              >
                <History className="w-4 h-4 mr-2" /> Reorder
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
