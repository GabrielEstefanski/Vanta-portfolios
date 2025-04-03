import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/app/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'black' | 'outline';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'white',
  rounded = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 font-medium transition-all duration-200 cursor-pointer';
  
  const variants = {
    white: 'bg-white text-black hover:bg-white/90',
    black: 'bg-black text-white hover:bg-black/90',
    outline: 'bg-transparent border border-white/10 text-white hover:bg-white/5 hover:border-white/20'
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        roundedStyles[rounded],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 