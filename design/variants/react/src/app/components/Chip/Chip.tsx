// design/variants/react/Button.tsx
import React from 'react';
import { designTokens } from '@vertifyui/design/primitives';

const variantClasses: Record<string, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border border-gray-600 text-gray-700 hover:bg-gray-100',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  testID?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  testID,
}) => {
  const baseClasses = 'rounded focus:outline-none focus:ring transition';
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <button
      data-testid={testID}
      onClick={onPress}
      disabled={disabled}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      Primary Button
    </button>
  );
};
