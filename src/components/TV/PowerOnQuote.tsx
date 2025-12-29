
import { useEffect, useState } from 'react';
import '../../styles/tv-effects.css';

interface PowerOnQuoteProps {
    isVisible: boolean;
    quote: string;
    author?: string;
    children?: React.ReactNode;
}

export const PowerOnQuote = ({ isVisible, quote, author, children }: PowerOnQuoteProps) => {
    const [shouldRender, setShouldRender] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            // Small delay to allow render before fading in
            setTimeout(() => setOpacity(1), 50);
        } else {
            setOpacity(0);
            // Wait for fade out before unmounting
            const timer = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-500 overflow-hidden tv-scanlines"
            style={{ opacity }}
        >
            <div className="relative z-10 max-w-2xl px-8 text-center">
                <div className="mb-6 chromatic-aberration">
                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight uppercase italic font-mono screen-flicker">
                        "{quote}"
                    </h2>
                </div>

                {author && (
                    <div className="text-xl text-neutral-light font-mono tracking-widest uppercase opacity-80 decoration-brand underline decoration-2 underline-offset-4">
                        — {author}
                    </div>
                )}

                {children && (
                    <div className="mt-12">
                        {children}
                    </div>
                )}
            </div>

            {/* Background Static/Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none" />
        </div>
    );
};
