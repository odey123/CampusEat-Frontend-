/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ShoppingBag, 
  Search, 
  ChevronRight, 
  ArrowLeft, 
  Heart, 
  Star, 
  Clock, 
  Plus, 
  Minus, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Bell, 
  User, 
  LayoutGrid, 
  Tag, 
  Wallet, 
  History, 
  Settings,
  X,
  Bike,
  Check,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Screen = 
  | 'welcome' 
  | 'signup' 
  | 'verify' 
  | 'home' 
  | 'restaurant' 
  | 'checkout' 
  | 'tracking' 
  | 'rider_request' 
  | 'restaurant_alert';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  rating: number;
  time: string;
  priceRange: string;
  categories: string[];
  image: string;
  menu: MenuItem[];
}

interface CartItem extends MenuItem {
  quantity: number;
}

// --- Mock Data ---

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Jollof Rice',
    description: 'Classic Nigerian party rice with aromatic spices.',
    price: 1500,
    image: 'https://picsum.photos/seed/cooked-rice/400/400',
    category: 'Rice'
  },
  {
    id: 'm2',
    name: 'Fried Rice and Chicken',
    description: 'Savory fried rice served with a large piece of grilled chicken.',
    price: 2000,
    image: 'https://picsum.photos/seed/grilled-chicken/400/400',
    category: 'Rice'
  },
  {
    id: 'm3',
    name: 'White Rice and Stew',
    description: 'Fluffy white rice served with our signature tomato-based stew.',
    price: 1200,
    image: 'https://picsum.photos/seed/tomato-stew/400/400',
    category: 'Rice'
  },
  {
    id: 'm4',
    name: 'Beef and Sauce',
    description: 'Tender beef chunks in a spicy pepper sauce.',
    price: 800,
    image: 'https://picsum.photos/seed/cooked-beef/400/400',
    category: 'Proteins'
  }
];

const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'Mavise',
    description: 'Popular campus spot. Rice, Stew, Proteins and more.',
    rating: 4.5,
    time: '20 min',
    priceRange: '₦1,500 - ₦3,000',
    categories: ['African', 'Rice'],
    image: 'https://picsum.photos/seed/nigerian-jollof/800/600',
    menu: MENU_ITEMS
  },
  {
    id: 'r2',
    name: 'Iya Moria',
    description: 'Best pastries and burgers on campus.',
    rating: 4.8,
    time: '15 min',
    priceRange: '₦2,000 - ₦5,000',
    categories: ['Pastries', 'Burgers'],
    image: 'https://picsum.photos/seed/beef-burger/800/600',
    menu: MENU_ITEMS
  },
  {
    id: 'r3',
    name: 'Salado',
    description: 'Fresh salads and healthy options.',
    rating: 4.2,
    time: '25 min',
    priceRange: '₦2,500 - ₦4,500',
    categories: ['Salads', 'Healthy'],
    image: 'https://picsum.photos/seed/fresh-salad/800/600',
    menu: MENU_ITEMS
  },
  {
    id: 'r4',
    name: 'Glamos Rarebits',
    description: 'Gourmet continental dishes.',
    rating: 4.7,
    time: '30 min',
    priceRange: '₦3,500 - ₦8,000',
    categories: ['Gourmet', 'Continental'],
    image: 'https://picsum.photos/seed/fine-dining/800/600',
    menu: MENU_ITEMS
  }
];

// --- Components ---

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  className?: string;
  disabled?: boolean;
}) => {
  const baseStyles = "py-4 px-6 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:active:scale-100";
  const variants = {
    primary: "bg-[#800000] text-white shadow-lg shadow-red-900/20 hover:bg-[#600000]",
    secondary: "bg-[#001f3f] text-white hover:bg-[#00152b]",
    outline: "border-2 border-[#800000] text-[#800000] hover:bg-red-50",
    ghost: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-[#00A86B] text-white hover:bg-[#008f5a]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Input = ({ 
  label, 
  placeholder, 
  type = 'text', 
  value, 
  onChange,
  icon: Icon
}: { 
  label?: string; 
  placeholder: string; 
  type?: string; 
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: any;
}) => (
  <div className="flex flex-col gap-2 w-full">
    {label && <label className="text-xs font-bold text-[#001f3f] uppercase tracking-wider">{label}</label>}
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
      <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-gray-100 border-none rounded-2xl py-4 ${Icon ? 'pl-12' : 'px-6'} pr-6 focus:ring-2 focus:ring-[#800000] transition-all outline-none text-gray-800`}
      />
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isRiderMode, setIsRiderMode] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== id);
    });
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 400;
  const total = cartTotal + deliveryFee;

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  // --- Screen Components ---

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-[#001f3f] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#800000]/20 rounded-full -ml-32 -mb-32 blur-3xl" />
      
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
        <div className="text-center mt-8">
          <span className="text-white/40 text-xs uppercase tracking-widest font-bold">— University Edition —</span>
        </div>
      </div>
    </div>
  );

  const SignUpScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#001f3f] p-8 pt-16 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
        <button onClick={() => navigateTo('welcome')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-8">
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
            By signing up you agree to our <span className="text-[#800000] font-bold">terms and conditions</span> and <span className="text-[#800000] font-bold">privacy policy</span>.
          </p>
          <p className="text-center mt-8 text-gray-600">
            Already have an account? <button onClick={() => navigateTo('home')} className="text-[#001f3f] font-bold">Login</button>
          </p>
        </div>
      </div>
    </div>
  );

  const VerificationScreen = () => (
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
          <div className="w-12 h-12 bg-[#800000]/10 rounded-xl flex items-center justify-center">
            <Settings className="w-6 h-6 text-[#800000]" />
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
            <div key={i} className={`w-14 h-16 rounded-xl border-2 flex items-center justify-center text-2xl font-bold ${val ? 'border-[#800000] bg-red-50 text-[#800000]' : 'border-gray-200 text-gray-300'}`}>
              {val}
            </div>
          ))}
        </div>

        <Button onClick={() => navigateTo('home')} className="w-full mb-8">Verify</Button>

        <div className="flex justify-between w-full text-sm">
          <button className="text-gray-400 font-medium">Didn't receive an email?</button>
          <button className="text-[#800000] font-bold">Resend in 45 seconds</button>
        </div>

        <div className="flex gap-2 mt-12">
          <div className="w-8 h-1 bg-gray-200 rounded-full" />
          <div className="w-8 h-1 bg-[#800000] rounded-full" />
          <div className="w-8 h-1 bg-gray-200 rounded-full" />
        </div>
      </motion.div>
    </div>
  );

  const HomeScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#001f3f]/5 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#001f3f]" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Daniel's Location</p>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#001f3f]">ETF Hostel, Block C</span>
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-[#001f3f] rounded-xl flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">
            2
          </div>
        </div>
      </header>

      <div className="p-6 flex flex-col gap-8">
        <h1 className="text-3xl font-black text-[#001f3f] leading-tight">
          Hey Daniel, what are you eating today?
        </h1>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            placeholder="Search for food, restaurants..."
            className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-6 shadow-sm focus:ring-2 focus:ring-[#800000] transition-all outline-none"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
          {['Rice', 'Swallow', 'Spaghetti', 'Drinks'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-[#001f3f] text-white' : 'bg-gray-200 text-gray-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative rounded-[32px] overflow-hidden aspect-[16/9] bg-[#001f3f] text-white p-8 flex flex-col justify-center">
          <img 
            src="https://picsum.photos/seed/jollof-party-rice/800/450" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <span className="bg-red-600 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block">Exclusive</span>
            <h3 className="text-3xl font-black italic leading-tight">50% OFF<br/>Jollof Fever</h3>
            <p className="text-white/60 text-sm mt-2">Valid only for UNILAG Students</p>
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <Bike className="w-6 h-6 text-white/40" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-[#001f3f]">Popular on Campus</h2>
          <button className="text-sm font-bold text-gray-400">See All</button>
        </div>

        <div className="flex flex-col gap-6">
          {RESTAURANTS.map(res => (
            <motion.div 
              key={res.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedRestaurant(res);
                navigateTo('restaurant');
              }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative aspect-[16/9]">
                <img src={res.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs font-bold">
                  <Clock className="w-3 h-3" /> {res.time}
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#800000]">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-black text-[#001f3f]">{res.name}</h3>
                  <div className="flex items-center gap-1 text-[#00A86B] font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" /> {res.rating}
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  {res.priceRange} • {res.categories.join(', ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#001f3f] rounded-[32px] p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-[60%]">
            <h3 className="text-xl font-black leading-tight mb-4">Craving late night snacks?</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">The Night Market is now open near ETF Hostel.</p>
            <button className="bg-white text-[#001f3f] px-6 py-3 rounded-xl font-bold text-sm">ORDER NOW</button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-40 h-40">
             <img src="https://picsum.photos/seed/cooked-beans/300/300" className="w-full h-full object-contain rotate-12" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-30">
        <button onClick={() => navigateTo('home')} className="flex flex-col items-center gap-1 text-[#001f3f]">
          <div className="w-12 h-12 bg-[#001f3f] rounded-full flex items-center justify-center text-white">
            <LayoutGrid className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
        </button>
        <button onClick={() => navigateTo('tracking')} className="flex flex-col items-center gap-1 text-gray-400">
          <History className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Orders</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Tag className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Offers</span>
        </button>
        <button onClick={() => setIsRiderMode(!isRiderMode)} className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
        </button>
      </nav>

      {/* Floating Action Buttons for Demo */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        <button 
          onClick={() => navigateTo('restaurant_alert')}
          className="w-12 h-12 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center"
          title="Demo: New Order Alert"
        >
          <Bell className="w-6 h-6" />
        </button>
        <button 
          onClick={() => navigateTo('rider_request')}
          className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
          title="Demo: New Delivery Request"
        >
          <Bike className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  const RestaurantDetailScreen = () => {
    if (!selectedRestaurant) return null;
    return (
      <div className="min-h-screen bg-gray-50 pb-32">
        <div className="relative h-80">
          <img src={selectedRestaurant.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
          <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
            <button onClick={() => navigateTo('home')} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h2 className="text-white font-black text-xl italic">{selectedRestaurant.name}</h2>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="px-6 -mt-12 relative z-10">
          <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/50">
            <h1 className="text-4xl font-black text-[#001f3f] mb-4">{selectedRestaurant.name}</h1>
            <p className="text-gray-500 font-medium leading-relaxed mb-6">{selectedRestaurant.description}</p>
            
            <div className="flex gap-3">
              <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-gray-600">
                <Star className="w-4 h-4 text-orange-400 fill-current" /> {selectedRestaurant.rating}
              </div>
              <div className="bg-[#800000] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-white">
                <Clock className="w-4 h-4" /> {selectedRestaurant.time}
              </div>
              <div className="bg-[#00A86B]/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-[#00A86B]">
                OPEN
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 mt-4">
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {['All', 'Rice', 'Proteins', 'Swallow', 'Drinks'].map((cat, i) => (
              <button 
                key={cat} 
                className={`px-8 py-3 rounded-2xl font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-[#001f3f] text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-6 mt-4">
            <div className="w-1 h-6 bg-[#800000] rounded-full" />
            <h2 className="text-2xl font-black text-[#001f3f]">Our Menu</h2>
          </div>

          <div className="flex flex-col gap-4">
            {selectedRestaurant.menu.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-[32px] flex gap-4 shadow-sm border border-gray-50">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <button 
                    onClick={() => addToCart(item)}
                    className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-[#800000]"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-[#001f3f]">{item.name}</h4>
                  <p className="text-xs text-gray-400 font-medium mt-1 mb-2 line-clamp-2">{item.description}</p>
                  <span className="font-black text-lg text-[#001f3f]">₦{item.price.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-8 left-6 right-6 z-40">
            <motion.button 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              onClick={() => navigateTo('checkout')}
              className="w-full bg-[#800000] text-white p-6 rounded-[32px] flex items-center justify-between shadow-2xl shadow-red-900/40"
            >
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">View Cart</span>
                <p className="font-bold text-sm">{cart.length} items from {selectedRestaurant.name}</p>
              </div>
              <span className="text-2xl font-black italic">₦{cartTotal.toLocaleString()}</span>
            </motion.button>
          </div>
        )}
      </div>
    );
  };

  const CheckoutScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <button onClick={() => navigateTo('restaurant')} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
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
          <button className="text-[#800000] font-black text-sm">Change</button>
        </div>

        <h3 className="text-xl font-black text-[#001f3f]">Your Items</h3>
        <div className="flex flex-col gap-3">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
              <span className="font-bold text-[#001f3f]">{item.name}</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full">
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400"><Minus className="w-4 h-4" /></button>
                  <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="text-[#800000]"><Plus className="w-4 h-4" /></button>
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
          <button className="bg-[#800000] text-white px-8 py-4 rounded-2xl font-bold text-sm">Apply</button>
        </div>

        <h3 className="text-xl font-black text-[#001f3f]">Payment Method</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white border-2 border-[#800000] rounded-[32px] p-6 flex flex-col items-center gap-3 relative">
            <div className="absolute top-3 right-3 w-5 h-5 bg-[#800000] rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <div className="w-12 h-12 bg-[#001f3f] rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-sm text-[#001f3f]">Pay with Card</span>
          </button>
          <button className="bg-white border-2 border-transparent rounded-[32px] p-6 flex flex-col items-center gap-3 shadow-sm">
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

  const TrackingScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-white p-6 pt-12 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <button onClick={() => navigateTo('home')} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-[#001f3f]" />
        </button>
        <h2 className="text-xl font-black text-[#001f3f]">Order Tracking</h2>
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <AlertCircle className="w-5 h-5 text-[#001f3f]" />
        </button>
      </header>

      <div className="p-8">
        <h1 className="text-4xl font-black text-[#001f3f] leading-tight mb-2">Your food is being prepared</h1>
        <div className="flex items-center gap-2 text-gray-400 font-bold">
          <Clock className="w-4 h-4" /> Order #CH7729-UNILAG
        </div>

        <div className="mt-12 bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#800000]/5 rounded-full -mr-16 -mt-16" />
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Arrival</span>
              <span className="text-4xl font-black text-[#800000] italic">18 minutes</span>
            </div>
            <div className="w-16 h-16 bg-[#800000]/10 rounded-2xl flex items-center justify-center">
              <Bike className="w-8 h-8 text-[#800000]" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 pl-4 relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200" />
          
          <div className="flex gap-6 items-start relative z-10">
            <div className="w-8 h-8 bg-[#001f3f] rounded-full flex items-center justify-center border-4 border-white shadow-md">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-black text-[#001f3f]">Order Confirmed</h4>
              <p className="text-sm text-gray-400 font-medium">We got your order</p>
            </div>
          </div>

          <div className="flex gap-6 items-start relative z-10">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-red-100 shadow-md">
              <div className="w-2.5 h-2.5 bg-[#800000] rounded-full" />
            </div>
            <div>
              <h4 className="font-black text-[#800000]">Being Prepared</h4>
              <p className="text-sm text-gray-400 font-medium">Mavise is cooking your food</p>
            </div>
          </div>

          <div className="flex gap-6 items-start relative z-10 opacity-30">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md">
              <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
            </div>
            <div>
              <h4 className="font-black text-gray-400">Rider On The Way</h4>
              <p className="text-sm text-gray-400 font-medium">Your rider is heading to you</p>
            </div>
          </div>

          <div className="flex gap-6 items-start relative z-10 opacity-30">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md">
              <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
            </div>
            <div>
              <h4 className="font-black text-gray-400">Delivered</h4>
              <p className="text-sm text-gray-400 font-medium">Enjoy your meal</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-6 rounded-[40px] shadow-lg border border-gray-50">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://picsum.photos/seed/tunde/100/100" className="w-16 h-16 rounded-2xl object-cover" referrerPolicy="no-referrer" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-[#001f3f] text-lg">Tunde</h4>
                <div className="flex items-center gap-1 text-orange-400 font-bold text-sm bg-orange-50 px-2 py-1 rounded-lg">
                  <Star className="w-3 h-3 fill-current" /> 4.8
                </div>
              </div>
              <p className="text-sm text-gray-400 font-medium">Your Delivery Hero</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" className="h-14">
              <Phone className="w-5 h-5" /> Call
            </Button>
            <Button variant="success" className="h-14">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </Button>
          </div>
        </div>

        <Button variant="primary" className="w-full h-20 mt-12 italic font-black text-lg">
          View Order Details <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-30">
        <button onClick={() => navigateTo('home')} className="flex flex-col items-center gap-1 text-gray-400">
          <LayoutGrid className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Search</span>
        </button>
        <button onClick={() => navigateTo('tracking')} className="flex flex-col items-center gap-1 text-[#800000]">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#800000]">
            <History className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Orders</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
        </button>
      </nav>
    </div>
  );

  const RiderRequestScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white w-full max-w-sm rounded-[40px] p-8 flex flex-col items-center shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-8">
          <Bell className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="font-black text-[#001f3f] uppercase tracking-widest text-sm">New Order Request</span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </div>

        <h1 className="text-3xl font-black text-[#001f3f] mb-2">New Delivery Request</h1>
        <p className="text-gray-400 font-medium mb-12">Accept before time runs out</p>

        <div className="w-full flex flex-col gap-8 mb-12 relative">
          <div className="absolute left-[23px] top-8 bottom-8 w-px border-l-2 border-dashed border-gray-200" />
          
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center relative z-10">
              <MapPin className="w-6 h-6 text-[#800000]" />
            </div>
            <div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pickup From</span>
              <h4 className="font-black text-[#001f3f] text-lg">Mavise Restaurant</h4>
              <p className="text-sm text-gray-400 font-medium">Faculty Area, UNILAG</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center relative z-10">
              <Bike className="w-6 h-6 text-[#001f3f]" />
            </div>
            <div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Deliver To</span>
              <h4 className="font-black text-[#001f3f] text-lg">ETF Hostel</h4>
              <p className="text-sm text-gray-400 font-medium">Block C, Room 204</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full mb-12">
          <div className="bg-gray-100 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
            <LayoutGrid className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-black text-[#001f3f]">0.8km</span>
          </div>
          <div className="bg-gray-100 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-black text-[#001f3f]">8 mins</span>
          </div>
          <div className="bg-green-50 p-3 rounded-xl flex flex-col items-center justify-center gap-1 border border-green-100">
            <Wallet className="w-4 h-4 text-[#00A86B]" />
            <span className="text-xs font-black text-[#00A86B]">₦300</span>
          </div>
        </div>

        <div className="relative w-32 h-32 mb-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#800000" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-[#001f3f]">25s</span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Left</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <Button variant="ghost" onClick={() => navigateTo('home')} className="h-16">Decline</Button>
          <Button variant="success" onClick={() => navigateTo('home')} className="h-16">
            Accept <CheckCircle2 className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );

  const RestaurantAlertScreen = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#001f3f] rounded-xl flex items-center justify-center">
            <Bike className="w-6 h-6 text-white" />
          </div>
          <span className="font-black text-[#001f3f] text-xl italic">CampusEats</span>
        </div>
        <div className="bg-green-50 text-[#00A86B] px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 border border-green-100">
          <div className="w-2 h-2 bg-[#00A86B] rounded-full" /> Online
        </div>
      </header>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#800000] text-white p-8 rounded-[40px] mb-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
        <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 block">Incoming Alert</span>
        <h1 className="text-4xl font-black italic mb-2">New Order</h1>
        <p className="text-white/60 font-bold">Order #CH7730-UNILAG</p>
      </motion.div>

      <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-gray-200/50 flex flex-col gap-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <LayoutGrid className="w-5 h-5 text-gray-400" />
          <h3 className="font-black text-[#001f3f] uppercase tracking-widest text-sm">Items Ordered</h3>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { name: 'Jollof Rice', qty: 1, price: 1500 },
            { name: 'Fried Rice and Chicken', qty: 1, price: 2000 },
            { name: 'Beef and Sauce', qty: 1, price: 800 },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-start">
              <div>
                <h4 className="font-black text-[#001f3f]">{item.name}</h4>
                <span className="text-xs text-gray-400 font-bold">Quantity: x{item.qty}</span>
              </div>
              <span className="font-black text-[#001f3f]">₦{item.price.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-100 my-2" />
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400 font-bold">Total Order Value</span>
          <span className="text-2xl font-black text-[#001f3f]">₦4,300</span>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-[32px] flex items-center gap-4 mb-12">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
          <User className="w-8 h-8 text-gray-300" />
        </div>
        <div>
          <h4 className="font-black text-[#001f3f] text-lg">Daniel</h4>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
            <MapPin className="w-3 h-3" /> ETF Hostel Block C Room 204
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-center text-xs font-black text-[#001f3f] uppercase tracking-widest mb-6">Estimated Prep Time</p>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {['10 mins', '15 mins', '20 mins'].map((time, i) => (
            <button 
              key={time} 
              className={`py-4 rounded-2xl font-bold text-sm transition-all ${i === 1 ? 'bg-[#800000] text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => navigateTo('home')} className="h-20 border-gray-200">Reject</Button>
          <Button variant="success" onClick={() => navigateTo('home')} className="h-20 text-lg">
            <CheckCircle2 className="w-6 h-6" /> Accept Order
          </Button>
        </div>
      </div>
    </div>
  );

  // --- Render ---

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative font-sans">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <WelcomeScreen />
          </motion.div>
        )}
        {currentScreen === 'signup' && (
          <motion.div key="signup" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <SignUpScreen />
          </motion.div>
        )}
        {currentScreen === 'verify' && (
          <motion.div key="verify" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}>
            <VerificationScreen />
          </motion.div>
        )}
        {currentScreen === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HomeScreen />
          </motion.div>
        )}
        {currentScreen === 'restaurant' && (
          <motion.div key="restaurant" initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 300, opacity: 0 }}>
            <RestaurantDetailScreen />
          </motion.div>
        )}
        {currentScreen === 'checkout' && (
          <motion.div key="checkout" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <CheckoutScreen />
          </motion.div>
        )}
        {currentScreen === 'tracking' && (
          <motion.div key="tracking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TrackingScreen />
          </motion.div>
        )}
        {currentScreen === 'rider_request' && (
          <motion.div key="rider_request" initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 300, opacity: 0 }}>
            <RiderRequestScreen />
          </motion.div>
        )}
        {currentScreen === 'restaurant_alert' && (
          <motion.div key="restaurant_alert" initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}>
            <RestaurantAlertScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
