import React from 'react';
import clsx from 'clsx';

export type ChipVariant = 'success' | 'warning' | 'disabled';

interface ChipProps {
  label: string;
  variant: ChipVariant;
}

const variantStyles: Record<ChipVariant, string> = {
  success: 'bg-secondary-lighter text-primary-default',
  warning: 'bg-warning-lighter text-warning-default',
  disabled: 'bg-text-secondary-lighter text-text-secondary-default',
};

export const Chip: React.FC<ChipProps> = ({ label, variant }) => {
  return (
    <span
      className={clsx(
        'px-3 py-2 rounded typography-subtitle3 inline-block text-center',
        variantStyles[variant]
      )}
    >
      {label}
    </span>
  );
};
