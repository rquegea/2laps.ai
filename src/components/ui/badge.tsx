import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'positive' | 'negative' | 'neutral' | 'source';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = 'default', ...props }, ref) => {
    const variantStyles = {
      default: 'bg-gray-100 text-gray-800',
      positive: 'bg-green-100 text-green-800',
      negative: 'bg-red-100 text-red-800',
      neutral: 'bg-yellow-100 text-yellow-800',
      source: 'bg-blue-100 text-blue-800',
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantStyles[variant]} ${className}`}
        style={{ fontFamily: "'Switzer', sans-serif" }}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
