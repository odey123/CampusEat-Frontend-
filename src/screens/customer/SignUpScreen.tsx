import React from 'react';
import { ArrowLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Screen } from '../../types';

interface SignUpScreenProps {
  navigateTo: (screen: Screen) => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <div className="bg-[#001f3f] p-8 pt-16 rounded-b-[40px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
      <button type="button" aria-label="Go back" onClick={() => navigateTo('welcome')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-8">
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
      <p className="text-white/60">Join the culinary community of UNILAG</p>
    </div>

    <div className="p-8 flex flex-col gap-6 flex-1">
      <Input label="Full Name" placeholder="Enter your full name" />
      <Input label="Phone Number" placeholder="080 1234 5678" />
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">Hostel and Room Number</label>
        <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-between text-gray-400">
          <span>Select Hostel & Room</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      </div>
      <div className="relative">
        <Input label="Password" placeholder="••••••••" type="password" />
        <Eye className="absolute right-4 bottom-4 text-gray-400 w-5 h-5" />
      </div>

      <div className="mt-auto pt-8">
        <Button onClick={() => navigateTo('verify')} className="w-full">Create Account</Button>
        <p className="text-center text-xs text-gray-400 mt-6 px-8 leading-relaxed">
          By signing up you agree to our <span className="text-[#C1121F] font-bold">terms and conditions</span> and <span className="text-[#C1121F] font-bold">privacy policy</span>.
        </p>
        <p className="text-center mt-8 text-gray-600">
          Already have an account? <button type="button" onClick={() => navigateTo('home')} className="text-[#001f3f] font-bold">Login</button>
        </p>
      </div>
    </div>
  </div>
);
