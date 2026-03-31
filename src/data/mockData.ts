import { MenuItem, Restaurant } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Jollof Rice',
    description: 'Classic Nigerian party rice with aromatic spices.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?fit=crop&w=400&h=400&q=80',
    category: 'Rice'
  },
  {
    id: 'm2',
    name: 'Fried Rice and Chicken',
    description: 'Savory fried rice served with a large piece of grilled chicken.',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?fit=crop&w=400&h=400&q=80',
    category: 'Rice'
  },
  {
    id: 'm3',
    name: 'White Rice and Stew',
    description: 'Fluffy white rice served with our signature tomato-based stew.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?fit=crop&w=400&h=400&q=80',
    category: 'Rice'
  },
  {
    id: 'm4',
    name: 'Beef and Sauce',
    description: 'Tender beef chunks in a spicy pepper sauce.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?fit=crop&w=400&h=400&q=80',
    category: 'Proteins'
  }
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'Mavise',
    description: 'Popular campus spot. Rice, Stew, Proteins and more.',
    rating: 4.5,
    time: '20 min',
    priceRange: '₦1,500 - ₦3,000',
    categories: ['African', 'Rice'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?fit=crop&w=800&h=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?fit=crop&w=800&h=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fit=crop&w=800&h=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fit=crop&w=800&h=600&q=80',
    menu: MENU_ITEMS
  }
];
