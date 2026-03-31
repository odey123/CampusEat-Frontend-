import React from 'react';

export const Input = ({ 
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
        className={`w-full bg-gray-100 border-none rounded-2xl py-4 ${Icon ? 'pl-12' : 'px-6'} pr-6 focus:ring-2 focus:ring-[#C1121F] transition-all outline-none text-gray-800`}
      />
    </div>
  </div>
);
