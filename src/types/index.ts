export type Screen = 
  | 'welcome' 
  | 'signup' 
  | 'verify' 
  | 'home' 
  | 'restaurant' 
  | 'checkout' 
  | 'tracking' 
  | 'rider_request' 
  | 'restaurant_alert'
  | 'history'
  | 'rating'
  | 'rider_earnings'
  | 'profile'
  | 'vendor_signup'
  | 'vendor_dashboard'
  | 'vendor_menu'
  | 'vendor_add_item';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
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

export interface CartItem extends MenuItem {
  quantity: number;
}
