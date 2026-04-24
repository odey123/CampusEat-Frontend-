import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, MoreVertical, Plus, Edit2, Trash2 } from 'lucide-react';
import { Screen } from '../../types';

interface VendorMenuScreenProps {
  navigateTo: (screen: Screen) => void;
  setEditingMenuItem: (item: any) => void;
}

export const VendorMenuScreen: React.FC<VendorMenuScreenProps> = ({ navigateTo, setEditingMenuItem }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const menuItems = [
    { id: 'm1', name: 'Jollof Rice', category: 'Rice', price: '₦1,500', status: 'Available', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?fit=crop&w=400&h=400&q=80' },
    { id: 'm2', name: 'Fried Rice and Chicken', category: 'Rice and Proteins', price: '₦2,000', status: 'Available', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?fit=crop&w=400&h=400&q=80' },
    { id: 'm3', name: 'White Rice and Stew', category: 'Rice', price: '₦1,200', status: 'Available', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?fit=crop&w=400&h=400&q=80' },
    { id: 'm4', name: 'Beef and Sauce', category: 'Proteins', price: '₦800', status: 'Available', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?fit=crop&w=400&h=400&q=80' },
    { id: 'm5', name: 'Amala and Ewedu', category: 'Swallow', price: '₦1,500', status: 'Sold Out', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?fit=crop&w=400&h=400&q=80' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-32 relative">
      {/* Header */}
      <div className="bg-[#001f3f] px-6 pt-12 pb-6 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <button type="button" aria-label="Go back" onClick={() => navigateTo('vendor_dashboard')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h2 className="text-xl font-black text-white">My Menu</h2>
        <button
          type="button"
          aria-label="Add menu item"
          onClick={() => { setEditingMenuItem(null); navigateTo('vendor_add_item'); }}
          className="w-10 h-10 bg-[#C1121F] rounded-full flex items-center justify-center shadow-lg shadow-red-900/20 active:scale-95 transition-all"
        >
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Search & Tabs */}
      <div className="bg-white z-20 shadow-sm border-b border-gray-100">
        <div className="px-6 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              placeholder="Search menu items" 
              className="w-full bg-gray-100 border-none rounded-2xl py-3 pl-12 pr-6 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#C1121F] transition-all outline-none font-medium"
            />
          </div>
        </div>
        <div className="flex px-2 overflow-x-auto no-scrollbar">
          {['All', 'Rice', 'Proteins', 'Swallow', 'Drinks', 'Extras'].map(tab => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-none px-6 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === tab ? 'border-[#C1121F] text-[#C1121F]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div className="p-6 flex flex-col gap-4 relative z-0">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-50 flex items-center gap-4 relative">
            <div className="w-20 h-20 rounded-[16px] overflow-hidden flex-shrink-0 bg-gray-100">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="flex-1 min-w-0 pr-1 flex flex-col justify-center gap-1 mt-1">
              <h4 className="font-black text-[#001f3f] text-sm leading-snug break-words line-clamp-2">{item.name}</h4>
              <span className="text-xs font-bold text-gray-400 mb-1">{item.category}</span>
            </div>

            <div className="flex flex-col items-end gap-1.5 px-1 pb-1">
              <span className="font-black text-[#C1121F]">{item.price}</span>
              <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded border ${item.status === 'Available' ? 'bg-[#00A86B]/10 text-[#00A86B] border-[#00A86B]/20' : 'bg-red-50 text-[#C1121F] border-red-100'}`}>
                {item.status}
              </span>
            </div>
            
            <button
              type="button"
              aria-label={`Options for ${item.name}`}
              onClick={(e) => { e.stopPropagation(); setOpenMenuId(openMenuId === item.id ? null : item.id); }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 flex-shrink-0 self-start -mt-2 -mr-2 relative z-10"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {openMenuId === item.id && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, transformOrigin: 'top right' }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-4 top-12 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-36 z-20 flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => { setEditingMenuItem(item); navigateTo('vendor_add_item'); }}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[#001f3f] hover:bg-gray-50 transition-colors w-full text-left"
                  >
                    <Edit2 className="w-4 h-4" /> Edit Item
                  </button>
                  <button type="button" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[#C1121F] hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" /> Delete Item
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-6 z-40">
        <button
          type="button"
          onClick={() => { setEditingMenuItem(null); navigateTo('vendor_add_item'); }}
          className="bg-[#C1121F] text-white px-6 py-4 rounded-[24px] flex items-center gap-2 shadow-xl shadow-red-900/30 hover:bg-[#a00f19] active:scale-95 transition-all outline-none"
        >
          <Plus className="w-5 h-5" />
          <span className="font-black text-sm pr-1">Add Item</span>
        </button>
      </div>

      {openMenuId && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setOpenMenuId(null)} 
        />
      )}
    </div>
  );
};
