import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline';
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
                variant === 'default'
                    ? 'border-transparent bg-white/10 text-white'
                    : 'border-white/20 text-white',
                className
            )}
            {...props}
        />
    );
};
