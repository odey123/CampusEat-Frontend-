import React from 'react';
import { motion } from 'motion/react';
import { Bike, ChevronRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Screen } from '../../types';

interface WelcomeScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-[#001f3f] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C1121F]/20 rounded-full -ml-32 -mb-32 blur-3xl" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 mb-24"
    >
      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
        <Bike className="w-10 h-10 text-white" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight italic">CampusEats</h1>
        <p className="text-white/60 mt-4 text-lg font-medium">Campus food. Delivered fast.</p>
      </div>
    </motion.div>

    <div className="w-full max-w-sm flex flex-col gap-4 mt-auto">
      <Button onClick={() => navigateTo('signup')} className="w-full">
        Get Started <ChevronRight className="w-5 h-5" />
      </Button>
      <Button onClick={() => navigateTo('home')} variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
        I already have an account
      </Button>
      <div className="text-center mt-8 flex flex-col gap-4">
        <span className="text-white/40 text-xs uppercase tracking-widest font-bold">— University Edition —</span>
        <button onClick={() => navigateTo('vendor_signup')} className="text-[#C1121F] text-sm font-bold hover:text-white transition-colors">
          Own a restaurant? Partner with us
        </button>
      </div>
    </div>
  </div>
);
