import React from 'react';
import { motion } from 'motion/react';
import { Bike, Settings, Check } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface VerificationScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const VerificationScreen: React.FC<VerificationScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white w-full max-w-sm rounded-[40px] p-8 flex flex-col items-center shadow-xl"
    >
      <div className="flex items-center gap-2 mb-12">
        <div className="bg-[#001f3f] p-2 rounded-lg">
          <Bike className="w-5 h-5 text-white" />
        </div>
        <span className="font-black text-[#001f3f] italic">CampusEats</span>
      </div>

      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8 relative">
        <div className="w-12 h-12 bg-[#C1121F]/10 rounded-xl flex items-center justify-center">
          <Settings className="w-6 h-6 text-[#C1121F]" />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#00A86B] rounded-full border-4 border-white flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#001f3f] mb-2">Verify your email</h2>
      <p className="text-center text-gray-500 mb-8">
        We sent a 4 digit code to<br/>
        <span className="font-bold text-gray-800">daniel.design@unilag.edu.ng</span>
      </p>

      <div className="flex gap-4 mb-12">
        {[4, '', '', ''].map((val, i) => (
          <div key={i} className={`w-14 h-16 rounded-xl border-2 flex items-center justify-center text-2xl font-bold ${val ? 'border-[#C1121F] bg-red-50 text-[#C1121F]' : 'border-gray-200 text-gray-300'}`}>
            {val}
          </div>
        ))}
      </div>

      <Button onClick={() => navigateTo('home')} className="w-full mb-8">Verify</Button>

      <div className="flex justify-between w-full text-sm">
        <button type="button" className="text-gray-400 font-medium">Didn't receive an email?</button>
        <button type="button" className="text-[#C1121F] font-bold">Resend in 45 seconds</button>
      </div>

      <div className="flex gap-2 mt-12">
        <div className="w-8 h-1 bg-gray-200 rounded-full" />
        <div className="w-8 h-1 bg-[#C1121F] rounded-full" />
        <div className="w-8 h-1 bg-gray-200 rounded-full" />
      </div>
    </motion.div>
  </div>
);
