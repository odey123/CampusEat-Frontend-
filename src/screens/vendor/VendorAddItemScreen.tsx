import React, { useState, useEffect } from 'react';
import { ArrowLeft, Camera, ChevronDown } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Screen } from '../../types';

interface VendorAddItemScreenProps {
  navigateTo: (screen: Screen) => void;
  editingItem?: any;
}

export const VendorAddItemScreen: React.FC<VendorAddItemScreenProps> = ({ navigateTo, editingItem }) => {
  const isEditing = !!editingItem;
  
  const [isAvailable, setIsAvailable] = useState(true);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setCategory(editingItem.category);
      if (typeof editingItem.price === 'string') {
        setPrice(editingItem.price.replace(/[^0-9]/g, ''));
      } else {
        setPrice(editingItem.price);
      }
      setIsAvailable(editingItem.status === 'Available');
      setDescription('A delicious perfectly cooked meal.');
      setPrepTime('15 minutes');
    }
  }, [editingItem]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-12 relative overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="bg-[#001f3f] px-6 pt-12 pb-6 flex items-center justify-between sticky top-0 z-40 shadow-sm w-full">
        <button onClick={() => navigateTo('vendor_menu')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h2 className="text-xl font-black text-white">{isEditing ? 'Edit Menu Item' : 'Add Menu Item'}</h2>
        <div className="w-10 h-10" />
      </div>

      <div className="p-6 flex flex-col gap-6 relative z-0">
        {/* Image Upload Area */}
        <div className="w-full h-40 rounded-[24px] border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center gap-2 cursor-pointer relative overflow-hidden">
          {isEditing && editingItem?.image ? (
            <>
              <img src={editingItem.image} className="absolute inset-0 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-5 h-5 text-[#001f3f]" />
              </div>
              <span className="relative z-10 text-sm font-bold text-white tracking-wide drop-shadow-md">Tap to change food photo</span>
            </>
          ) : (
             <>
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-sm font-bold text-gray-400">Tap to add food photo</span>
            </>
          )}
        </div>

        {/* Form Fields */}
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 flex flex-col gap-5">
          <Input 
            label="Item Name" 
            placeholder="e.g. Jollof Rice" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Category</label>
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-6 pr-12 focus:ring-2 focus:ring-[#C1121F] outline-none text-gray-800 appearance-none font-medium"
              >
                <option value="" disabled>Select category</option>
                <option>Rice</option>
                <option>Proteins</option>
                <option>Swallow</option>
                <option>Snacks</option>
                <option>Drinks</option>
                <option>Extras</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Price</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
              <input 
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="1500"
                className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-[#C1121F] outline-none text-gray-800 font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Short Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe this item in one sentence"
              className="w-full bg-gray-100 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#C1121F] outline-none text-gray-800 resize-none h-24 font-medium"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Preparation Time</label>
            <div className="relative">
              <select 
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-6 pr-12 focus:ring-2 focus:ring-[#C1121F] outline-none text-gray-800 appearance-none font-medium"
              >
                <option value="" disabled>Select time</option>
                <option>5 minutes</option>
                <option>10 minutes</option>
                <option>15 minutes</option>
                <option>20 minutes</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 py-2">
            <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Availability</label>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold ${isAvailable ? 'text-[#00A86B]' : 'text-gray-400'}`}>
                {isAvailable ? 'Available' : 'Sold Out'}
              </span>
              <div 
                onClick={() => setIsAvailable(!isAvailable)}
                className={`w-12 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors ${isAvailable ? 'bg-[#00A86B]' : 'bg-gray-300'}`}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isAvailable ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-2 flex flex-col items-center gap-4">
          <Button variant="primary" onClick={() => navigateTo('vendor_menu')} className="w-full h-16 text-lg font-black italic shadow-red-900/30">
            Save Item
          </Button>
          <p className="text-xs font-bold text-gray-400 text-center px-6">
            This item will be visible to students immediately after saving
          </p>
        </div>
      </div>
    </div>
  );
};
