import React from 'react';
import { ArrowLeft, Check, ChevronRight, LayoutGrid, MapPin, Minus, Plus, Wallet } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen, CartItem, MenuItem } from '../../types';

interface CheckoutScreenProps {
  navigateTo: (screen: Screen) => void;
  cart: CartItem[];
  cartTotal: number;
  deliveryFee: number;
  total: number;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ 
  navigateTo, 
  cart, 
  cartTotal, 
  deliveryFee, 
  total,
  addToCart,
  removeFromCart
}) => (
  <div className="min-h-screen bg-gray-50 pb-32">
    <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      <button type="button" aria-label="Go back" onClick={() => navigateTo('restaurant')} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
        <ArrowLeft className="w-5 h-5 text-[#001f3f]" />
      </button>
      <h2 className="text-xl font-black text-[#001f3f]">Your Order</h2>
      <div className="w-10" />
    </header>

    <div className="p-6 flex flex-col gap-8">
      <div className="bg-white p-6 rounded-[32px] flex items-center gap-4 shadow-sm border border-gray-50">
        <div className="w-12 h-12 bg-[#001f3f]/5 rounded-full flex items-center justify-center">
          <MapPin className="w-6 h-6 text-[#001f3f]" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivering to</p>
          <p className="font-bold text-[#001f3f]">ETF Hostel, Block C, Room 204</p>
        </div>
        <button type="button" className="text-[#C1121F] font-black text-sm">Change</button>
      </div>

      <h3 className="text-xl font-black text-[#001f3f]">Your Items</h3>
      <div className="flex flex-col gap-3">
        {cart.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
            <span className="font-bold text-[#001f3f]">{item.name}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full">
                <button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)} className="text-gray-400"><Minus className="w-4 h-4" /></button>
                <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                <button type="button" aria-label={`Add ${item.name}`} onClick={() => addToCart(item)} className="text-[#C1121F]"><Plus className="w-4 h-4" /></button>
              </div>
              <span className="font-black text-[#001f3f] w-20 text-right">₦{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <div className="flex-1 bg-gray-100 rounded-2xl p-4 flex items-center">
          <input placeholder="Promo Code" className="bg-transparent border-none outline-none w-full text-sm font-bold" />
        </div>
        <button type="button" className="bg-[#C1121F] text-white px-8 py-4 rounded-2xl font-bold text-sm">Apply</button>
      </div>

      <h3 className="text-xl font-black text-[#001f3f]">Payment Method</h3>
      <div className="grid grid-cols-2 gap-4">
        <button type="button" className="bg-white border-2 border-[#C1121F] rounded-[32px] p-6 flex flex-col items-center gap-3 relative">
          <div className="absolute top-3 right-3 w-5 h-5 bg-[#C1121F] rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
          <div className="w-12 h-12 bg-[#001f3f] rounded-xl flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-sm text-[#001f3f]">Pay with Card</span>
        </button>
        <button type="button" className="bg-white border-2 border-transparent rounded-[32px] p-6 flex flex-col items-center gap-3 shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <LayoutGrid className="w-6 h-6 text-gray-400" />
          </div>
          <span className="font-bold text-sm text-gray-400">Pay with Transfer</span>
        </button>
      </div>

      <div className="bg-white p-8 rounded-[40px] flex flex-col gap-4 shadow-sm border border-gray-50">
        <div className="flex justify-between text-gray-400 font-bold">
          <span>Subtotal</span>
          <span>₦{cartTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-400 font-bold">
          <span>Delivery Fee</span>
          <span>₦{deliveryFee.toLocaleString()}</span>
        </div>
        <div className="h-px bg-gray-100 my-2" />
        <div className="flex justify-between text-2xl font-black text-[#001f3f]">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
      </div>
    </div>

    <div className="fixed bottom-8 left-6 right-6 z-40">
      <Button onClick={() => navigateTo('tracking')} className="w-full h-20 text-xl italic font-black">
        Place Order <span className="mx-2 opacity-30">|</span> ₦{total.toLocaleString()}
      </Button>
    </div>
  </div>
);
