import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Phone, Rocket } from 'lucide-react';
import { Screen } from '../../types';

interface VendorApplicationSubmittedScreenProps {
  navigateTo: (screen: Screen) => void;
}

const steps = [
  { icon: Clock, text: 'Our team reviews your application' },
  { icon: Phone, text: 'You receive a WhatsApp confirmation' },
  { icon: Rocket, text: 'Your restaurant goes live on CampusEats' },
];

export const VendorApplicationSubmittedScreen: React.FC<VendorApplicationSubmittedScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-[#001f3f] flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C1121F]/10 rounded-full -ml-32 -mb-32 blur-3xl" />

    <div className="w-full max-w-sm flex flex-col items-center gap-6 relative z-10">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-900/30"
      >
        <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center flex flex-col gap-3"
      >
        <h1 className="text-3xl font-black text-white">Application Submitted!</h1>
        <p className="text-white/70 font-medium leading-relaxed">
          We'll review your details and get back to you within 24 hours on your WhatsApp number.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="w-full bg-white rounded-[28px] p-6 flex flex-col gap-5 shadow-xl"
      >
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">What Happens Next</p>
        {steps.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-7 h-7 bg-[#C1121F] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-black">{i + 1}</span>
            </div>
            <div className="w-9 h-9 bg-[#001f3f]/5 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-[#001f3f]" />
            </div>
            <p className="text-sm font-bold text-[#001f3f] leading-snug flex-1">{text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full flex flex-col gap-3"
      >
        <button
          type="button"
          onClick={() => navigateTo('welcome')}
          className="w-full h-14 border-2 border-white text-white font-black rounded-2xl flex items-center justify-center text-base"
        >
          Back to Home
        </button>
        <button
          type="button"
          onClick={() => navigateTo('welcome')}
          className="w-full h-12 bg-[#C1121F] text-white font-black rounded-2xl flex items-center justify-center text-sm shadow-lg"
        >
          Check Application Status
        </button>
      </motion.div>
    </div>
  </div>
);
