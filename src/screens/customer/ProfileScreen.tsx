import React from 'react';
import { ArrowLeft, Bell, Camera, ChevronRight, CreditCard, HelpCircle, Lock, LogOut, MapPin, MessageSquare, Settings, User } from 'lucide-react';
import { Screen } from '../../types';

interface ProfileScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 pb-32">
    <div className="bg-[#001f3f] px-6 pt-12 pb-8 rounded-b-[40px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="relative z-10 flex flex-col items-center">
        <header className="w-full flex justify-between items-center mb-6">
          <button type="button" aria-label="Go back" onClick={() => navigateTo('home')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-xl font-black text-white">Profile</h2>
          <div className="w-10 h-10 flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
        </header>
        
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-[#001f3f] shadow-lg overflow-hidden bg-white">
            <img src="https://picsum.photos/seed/daniel/200/200" alt="Profile photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <button type="button" aria-label="Change profile photo" className="absolute bottom-0 right-0 w-8 h-8 bg-[#C1121F] rounded-full flex items-center justify-center border-2 border-[#001f3f]">
            <Camera className="w-4 h-4 text-white" />
          </button>
        </div>
        
        <h3 className="text-2xl font-black text-white mb-1">Daniel Adeyemi</h3>
        <p className="text-white/60 font-medium text-sm flex items-center gap-1">
          <MapPin className="w-3 h-3" /> ETF Hostel Block C Room 204
        </p>
      </div>
    </div>

    <div className="p-6 flex flex-col gap-6">
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-3 px-4">Account</span>
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 flex flex-col overflow-hidden">
          <button type="button" className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f]">Edit Profile</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
          <button type="button" className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f]">Change Password</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
          <button type="button" className="flex items-center justify-between p-4 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f]">Notification Settings</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-3 px-4">Delivery</span>
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 flex flex-col overflow-hidden">
          <button type="button" className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#001f3f]" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-[#001f3f]">Saved Addresses</span>
                <span className="text-xs font-medium text-gray-400">ETF Hostel</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
          <button type="button" className="flex items-center justify-between p-4 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#001f3f]" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-[#001f3f]">Payment Methods</span>
                <span className="text-xs font-medium text-gray-400">Paystack</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-3 px-4">Support</span>
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 flex flex-col overflow-hidden">
          <button type="button" className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f]">Help and FAQ</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
          <button type="button" className="flex items-center justify-between p-4 active:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#001f3f]/5 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#001f3f]" />
              </div>
              <span className="font-bold text-[#001f3f]">Contact Us</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      <button type="button" onClick={() => navigateTo('welcome')} className="bg-red-50 text-[#C1121F] p-4 rounded-[24px] flex items-center justify-center gap-2 font-black mt-2 active:bg-red-100 transition-all">
        <LogOut className="w-5 h-5" /> Logout
      </button>
    </div>
  </div>
);
