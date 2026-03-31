import React from 'react';

export const Button = ({ 
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
    primary: "bg-[#C1121F] text-white shadow-lg shadow-red-900/20 hover:bg-[#600000]",
    secondary: "bg-[#001f3f] text-white hover:bg-[#00152b]",
    outline: "border-2 border-[#C1121F] text-[#C1121F] hover:bg-red-50",
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
