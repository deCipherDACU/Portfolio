// React imports not needed for this component as we changed logic to CSS only
import { } from 'react';

interface SkillsRibbonProps {
    items: string[];
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

export const SkillsRibbon = ({
    items,
    direction = 'left',
    speed = 40,
    className = ''
}: SkillsRibbonProps) => {
    // Duplicate items to ensure seamless loop
    const doubledItems = [...items, ...items, ...items];

    return (
        <div className={`relative overflow-hidden w-full ${className}`}>
            {/* Gradient Masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r from-background-dark to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l from-background-dark to-transparent pointer-events-none" />

            <div
                className={`flex gap-4 md:gap-8 w-max hover:pause-animation py-4`}
                style={{
                    animation: `scroll-${direction} ${speed}s linear infinite`,
                }}
            >
                {doubledItems.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        className="
                            flex-shrink-0 px-6 py-3 
                            bg-white/5 border border-white/10 rounded-full backdrop-blur-sm
                            text-sm md:text-base font-bold uppercase tracking-wider text-slate-300
                            hover:bg-primary/10 hover:border-primary/50 hover:text-white hover:scale-105
                            transition-all duration-300 cursor-default shadow-lg
                        "
                    >
                        {item}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.33%); }
                }
                @keyframes scroll-right {
                    from { transform: translateX(-33.33%); }
                    to { transform: translateX(0); }
                }
                .hover\\:pause-animation:hover {
                    animation-play-state: paused !important;
                }
            `}</style>
        </div>
    );
};
