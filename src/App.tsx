import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen, Restaurant, CartItem, MenuItem } from './types';

// Import Screens
import { WelcomeScreen } from './screens/customer/WelcomeScreen';
import { SignUpScreen } from './screens/customer/SignUpScreen';
import { VerificationScreen } from './screens/customer/VerificationScreen';
import { HomeScreen } from './screens/customer/HomeScreen';
import { RestaurantDetailScreen } from './screens/customer/RestaurantDetailScreen';
import { CheckoutScreen } from './screens/customer/CheckoutScreen';
import { TrackingScreen } from './screens/customer/TrackingScreen';
import { OrderHistoryScreen } from './screens/customer/OrderHistoryScreen';
import { RatingScreen } from './screens/customer/RatingScreen';
import { ProfileScreen } from './screens/customer/ProfileScreen';

import { RiderRequestScreen } from './screens/rider/RiderRequestScreen';
import { RiderEarningsScreen } from './screens/rider/RiderEarningsScreen';

import { RestaurantAlertScreen } from './screens/vendor/RestaurantAlertScreen';
import { VendorSignUpScreen } from './screens/vendor/VendorSignUpScreen';
import { VendorDashboardScreen } from './screens/vendor/VendorDashboardScreen';
import { VendorMenuScreen } from './screens/vendor/VendorMenuScreen';
import { VendorAddItemScreen } from './screens/vendor/VendorAddItemScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [editingMenuItem, setEditingMenuItem] = useState<any>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isRiderMode, setIsRiderMode] = useState(false);

  // Navigation Helper
  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  // Cart Helpers
  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
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

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = 300;
  const total = cartTotal + deliveryFee;

  return (
    <div className="min-h-screen md:bg-gray-200 flex flex-col items-center justify-center font-sans text-gray-800 md:py-8">
      <div className="w-full bg-white min-h-screen md:min-h-0 md:h-[844px] md:w-[390px] md:rounded-[40px] md:shadow-[0_0_40px_rgba(0,0,0,0.1)] md:overflow-hidden md:[transform:translateZ(0)] relative flex flex-col">
        <div className="w-full flex-1 md:overflow-y-auto md:overflow-x-hidden no-scrollbar bg-gray-50 relative">
          <AnimatePresence mode="wait">
            {currentScreen === 'welcome' && (
          <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <WelcomeScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'signup' && (
          <motion.div key="signup" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <SignUpScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'verify' && (
          <motion.div key="verify" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <VerificationScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HomeScreen 
              navigateTo={navigateTo} 
              isRiderMode={isRiderMode} 
              setIsRiderMode={setIsRiderMode} 
              setSelectedRestaurant={setSelectedRestaurant} 
              cartCount={cartCount}
            />
          </motion.div>
        )}
        {currentScreen === 'restaurant' && (
          <motion.div key="restaurant" initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 300, opacity: 0 }}>
            <RestaurantDetailScreen 
              selectedRestaurant={selectedRestaurant} 
              navigateTo={navigateTo} 
              cart={cart} 
              addToCart={addToCart} 
              cartTotal={cartTotal} 
            />
          </motion.div>
        )}
        {currentScreen === 'checkout' && (
          <motion.div key="checkout" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <CheckoutScreen 
              navigateTo={navigateTo} 
              cart={cart} 
              cartTotal={cartTotal} 
              deliveryFee={deliveryFee} 
              total={total} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
            />
          </motion.div>
        )}
        {currentScreen === 'tracking' && (
          <motion.div key="tracking" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
            <TrackingScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'history' && (
          <motion.div key="history" initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }}>
            <OrderHistoryScreen navigateTo={navigateTo} setSelectedRestaurant={setSelectedRestaurant} />
          </motion.div>
        )}
        {currentScreen === 'rating' && (
          <motion.div key="rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <RatingScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'profile' && (
          <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProfileScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'rider_request' && (
          <motion.div key="rider_request" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <RiderRequestScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'rider_earnings' && (
          <motion.div key="rider_earnings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <RiderEarningsScreen navigateTo={navigateTo} isRiderMode={isRiderMode} setIsRiderMode={setIsRiderMode} />
          </motion.div>
        )}
        {currentScreen === 'restaurant_alert' && (
          <motion.div key="restaurant_alert" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <RestaurantAlertScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'vendor_signup' && (
          <motion.div key="vendor_signup" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <VendorSignUpScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'vendor_dashboard' && (
          <motion.div key="vendor_dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <VendorDashboardScreen navigateTo={navigateTo} />
          </motion.div>
        )}
        {currentScreen === 'vendor_menu' && (
          <motion.div key="vendor_menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <VendorMenuScreen navigateTo={navigateTo} setEditingMenuItem={setEditingMenuItem} />
          </motion.div>
        )}
        {currentScreen === 'vendor_add_item' && (
          <motion.div key="vendor_add_item" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <VendorAddItemScreen navigateTo={navigateTo} editingItem={editingMenuItem} />
          </motion.div>
        )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default App;
