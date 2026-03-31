import React from 'react';
import { ArrowLeft, Bike, History, LayoutGrid, MapPin, Plus, User, Wallet } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface RiderEarningsScreenProps {
  navigateTo: (screen: Screen) => void;
  isRiderMode: boolean;
  setIsRiderMode: (val: boolean) => void;
}

export const RiderEarningsScreen: React.FC<RiderEarningsScreenProps> = ({ navigateTo, isRiderMode, setIsRiderMode }) => {
  const deliveries = [
    { id: 1, route: 'Mavise to ETF Hostel', time: '2:45pm', earn: '₦300' },
    { id: 2, route: 'Iya Moria to Jaja Hall', time: '1:30pm', earn: '₦300' },
    { id: 3, route: 'Salado to Mariere', time: '12:15pm', earn: '₦300' },
    { id: 4, route: 'Glamos Rarebits to Amina', time: '11:00am', earn: '₦300' },
    { id: 5, route: 'Mavise to Moremi', time: '10:20am', earn: '₦300' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-[#001f3f] p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <button onClick={() => navigateTo('home')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h2 className="text-xl font-black text-white">My Earnings</h2>
        <div className="w-10" />
      </header>

      <div className="p-6 flex flex-col gap-6">
        <div className="bg-gradient-to-br from-[#001f3f] to-[#00152b] rounded-[32px] p-8 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-xl" />
          <span className="text-xs font-black uppercase tracking-widest text-white/60 mb-2 block">Total Earned Today</span>
          <h1 className="text-5xl font-black mb-4">₦2,100</h1>
          <div className="inline-flex items-center gap-1 bg-[#00A86B]/20 text-[#00A86B] px-4 py-2 rounded-full font-bold text-sm border border-[#00A86B]/30">
            <Plus className="w-3 h-3" />₦350 last delivery
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">This Week</span>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-[#001f3f]">₦14,700</span>
              <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-3 h-3 text-[#00A86B] rotate-90" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Deliveries Today</span>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-[#001f3f]">7</span>
              <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
                <Bike className="w-3 h-3 text-[#001f3f]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-black text-[#001f3f] text-lg mb-4">Today's Deliveries</h3>
          <div className="flex flex-col gap-3">
            {deliveries.map(del => (
              <div key={del.id} className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-50 flex items-center gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C1121F]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-[#001f3f] text-sm">{del.route}</h4>
                  <span className="text-xs font-medium text-gray-400">{del.time}</span>
                </div>
                <span className="font-black text-[#00A86B] font-bold">{del.earn}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <Button variant="primary" onClick={() => navigateTo('home')} className="w-full h-16 text-lg font-black italic">
            <Wallet className="w-5 h-5 mr-2" /> Withdraw Earnings
          </Button>
          <span className="text-xs font-bold text-gray-400 text-center">
            Earnings reflect deliveries completed today
          </span>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-30">
        <button onClick={() => navigateTo('home')} className="flex flex-col items-center gap-1 text-gray-400">
          <LayoutGrid className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
        </button>
        <button onClick={() => navigateTo('history')} className="flex flex-col items-center gap-1 text-gray-400">
          <History className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Orders</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#C1121F]">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#C1121F]">
            <Wallet className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Earnings</span>
        </button>
        <button onClick={() => navigateTo('profile')} className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
        </button>
      </nav>
    </div>
  );
};
