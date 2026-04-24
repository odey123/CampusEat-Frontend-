import React from 'react';
import { ArrowLeft, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Screen } from '../../types';

interface VendorSignUpScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const VendorSignUpScreen: React.FC<VendorSignUpScreenProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-12">
      <div className="bg-[#001f3f] p-6 pt-12 pb-8 rounded-b-[40px] relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
        <div className="flex items-center justify-between mb-6 relative z-10">
          <button onClick={() => navigateTo('welcome')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-xl font-black text-white">Register Your Restaurant</h2>
          <div className="w-10 h-10" />
        </div>
        <p className="text-white/80 font-medium text-center px-4">
          Join CampusEats and reach hundreds of Unilag students daily
        </p>
      </div>

      <div className="p-6 flex flex-col gap-8 flex-1 overflow-y-auto no-scrollbar">
        {/* Section 1: Restaurant Information */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[#001f3f] pl-2">Restaurant Information</h3>
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 flex flex-col gap-4">
            <Input label="Restaurant Name" placeholder="e.g. Mavise" />
            
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Food Category</label>
              <div className="relative">
                <select className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-6 pr-12 focus:ring-2 focus:ring-[#C1121F] transition-all outline-none text-gray-800 appearance-none font-medium">
                  <option value="" disabled selected>Select category</option>
                  <option>Nigerian Food</option>
                  <option>Rice and Proteins</option>
                  <option>Swallow</option>
                  <option>Snacks</option>
                  <option>Continental</option>
                  <option>Pastries and Drinks</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <Input label="Campus Location" placeholder="e.g. Faculty of Science Bukateria" />
            
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Short Description</label>
              <textarea 
                placeholder="Tell students what makes your food special" 
                className="w-full bg-gray-100 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#C1121F] transition-all outline-none text-gray-800 resize-none h-28 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Owner Information */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[#001f3f] pl-2">Owner Information</h3>
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 flex flex-col gap-4">
            <Input label="Full Name of Owner or Manager" placeholder="Your full name" />
            <Input label="Phone Number" placeholder="080 1234 5678" />
            
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider flex items-center justify-between">
                <span>WhatsApp Number</span>
                <MessageCircle className="w-4 h-4 text-[#00A86B]" />
              </label>
              <input 
                type="text"
                placeholder="080 1234 5678"
                className="w-full bg-gray-100 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#C1121F] transition-all outline-none text-gray-800 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Operating Hours */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[#001f3f] pl-2">Operating Hours</h3>
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Opening Time</label>
              <div className="relative">
                <select className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-4 pr-10 focus:ring-2 focus:ring-[#C1121F] outline-none text-[#001f3f] font-bold appearance-none">
                  <option>7:00 AM</option>
                  <option selected>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Closing Time</label>
              <div className="relative">
                <select className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-4 pr-10 focus:ring-2 focus:ring-[#C1121F] outline-none text-[#001f3f] font-bold appearance-none">
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option selected>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Bank Details for Payouts */}
        <div className="flex flex-col gap-4">
          <div className="pl-2">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#001f3f]">Bank Details for Payouts</h3>
            <p className="text-xs font-medium text-gray-400 mt-1">Your earnings will be sent here every 48 hours</p>
          </div>
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Bank Name</label>
              <div className="relative">
                <select className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-6 pr-12 focus:ring-2 focus:ring-[#C1121F] transition-all outline-none text-gray-800 appearance-none font-medium">
                  <option value="" disabled selected>Select Bank</option>
                  <option>Access Bank</option>
                  <option>First Bank</option>
                  <option>GTBank</option>
                  <option>UBA</option>
                  <option>Zenith Bank</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            
            <Input label="Account Number" placeholder="0123456789" />
            <Input label="Account Name" placeholder="Mavise Foods Limited" />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <Button variant="primary" onClick={() => navigateTo('vendor_dashboard')} className="w-full h-16 text-lg font-black italic shadow-red-900/30">
            Submit Application
          </Button>
          <p className="text-xs font-bold text-gray-400 text-center px-6">
            Our team will review and approve your application within 24 hours
          </p>
        </div>

      </div>
    </div>
  );
};
