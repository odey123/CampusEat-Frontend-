import React from 'react';
import { motion } from 'motion/react';
import { Bike, ChevronRight, GraduationCap, Store } from 'lucide-react';
import { Screen } from '../../types';

interface WelcomeScreenProps {
  navigateTo: (screen: Screen) => void;
}

const userTypes = [
  {
    icon: GraduationCap,
    label: "I'm a Student",
    sub: 'Order food to your hostel',
    screen: 'signup' as Screen,
  },
  {
    icon: Bike,
    label: "I'm a Rider",
    sub: 'Earn money between classes',
    screen: 'rider_request' as Screen,
  },
  {
    icon: Store,
    label: "I'm a Vendor",
    sub: 'Manage your restaurant',
    screen: 'vendor_signup' as Screen,
  },
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-[#001f3f] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C1121F]/20 rounded-full -ml-32 -mb-32 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 mb-10"
    >
      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
        <Bike className="w-10 h-10 text-white" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-black tracking-tight italic">CampusEats</h1>
        <p className="text-white/60 mt-4 text-lg font-medium">Campus food. Delivered fast.</p>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="w-full max-w-sm flex flex-col gap-3"
    >
      {userTypes.map(({ icon: Icon, label, sub, screen }, i) => (
        <motion.button
          key={screen}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          onClick={() => navigateTo(screen)}
          className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg active:scale-[0.98] transition-transform"
        >
          <div className="w-11 h-11 bg-[#001f3f] rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-[#001f3f] font-bold text-base leading-tight">{label}</p>
            <p className="text-[#001f3f]/60 text-sm mt-0.5">{sub}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-[#C1121F] flex-shrink-0" />
        </motion.button>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="text-center mt-10 flex flex-col gap-4"
    >
      <span className="text-white/40 text-xs uppercase tracking-widest font-bold">— University Edition —</span>
      <button
        type="button"
        onClick={() => navigateTo('vendor_signup')}
        className="text-[#C1121F] text-sm font-bold hover:text-white transition-colors"
      >
        Own a restaurant? Partner with us
      </button>
    </motion.div>
  </div>
);
