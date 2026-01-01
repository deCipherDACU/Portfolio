import { useEffect, useState } from 'react';

interface Snowflake {
    id: number;
    left: number;
    animationDuration: number;
    opacity: number;
    size: number;
    delay: number;
}

export const SnowEffect = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        const flakes: Snowflake[] = [];
        // Reduce count on mobile/small screens
        const count = window.innerWidth < 768 ? 50 : 200;

        for (let i = 0; i < count; i++) {
            flakes.push({
                id: i,
                left: Math.random() * 100, // Random horizontal position
                animationDuration: Math.random() * 10 + 10, // Slow fall: 10-20s
                opacity: Math.random() * 0.3 + 0.1, // Subtle opacity
                size: Math.random() * 3 + 1, // Small size 1-4px
                delay: Math.random() * 20, // Random start time
            });
        }
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute top-[-10px] bg-white rounded-full animate-fall"
                    style={{
                        left: `${flake.left}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        animationDuration: `${flake.animationDuration}s`,
                        animationDelay: `-${flake.delay}s`, // Negative delay to start mid-animation
                    }}
                />
            ))}
        </div>
    );
};
