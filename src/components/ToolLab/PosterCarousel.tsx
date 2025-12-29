import { useState, useCallback, useEffect, useRef } from 'react';

interface Poster {
    id: number;
    title: string;
    category: string;
    gradient: string;
    accent: string;
}

const posters: Poster[] = [
    { id: 1, title: 'Neon Dreams', category: 'Typography', gradient: 'from-fuchsia-600 via-purple-600 to-violet-700', accent: '#e879f9' },
    { id: 2, title: 'Organic Flow', category: 'Abstract', gradient: 'from-emerald-500 via-teal-500 to-cyan-600', accent: '#2dd4bf' },
    { id: 3, title: 'Urban Pulse', category: 'Editorial', gradient: 'from-orange-500 via-red-500 to-rose-600', accent: '#fb923c' },
    { id: 4, title: 'Minimal Edge', category: 'Branding', gradient: 'from-slate-600 via-zinc-700 to-neutral-800', accent: '#a1a1aa' },
    { id: 5, title: 'Cosmic Drift', category: 'Illustration', gradient: 'from-indigo-600 via-blue-600 to-sky-500', accent: '#818cf8' },
    { id: 6, title: 'Retro Wave', category: 'Motion', gradient: 'from-pink-500 via-rose-500 to-red-500', accent: '#f472b6' },
    { id: 7, title: 'Nature\'s Code', category: 'Generative', gradient: 'from-lime-500 via-green-500 to-emerald-600', accent: '#84cc16' },
];

export function PosterCarousel() {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(posters.length / 2));
    const [isAnimating, setIsAnimating] = useState(false);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [dragOffset, setDragOffset] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastMoveTime = useRef<number>(0);
    const lastMoveX = useRef<number>(0);

    const getCardTransform = useCallback((index: number, dragDelta: number = 0) => {
        const diff = index - currentIndex + (dragDelta / 300);
        const absD = Math.abs(diff);

        // 3D positioning
        const translateX = diff * 260;
        const translateZ = -absD * 200;
        const rotateY = diff * -25;
        const scale = Math.max(0.5, 1 - absD * 0.18);

        // Opacity and blur based on distance
        const opacity = Math.max(0, 1 - absD * 0.35);
        const motionBlur = Math.min(absD * 3 + Math.abs(velocity) * 0.5, 8);

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity,
            filter: absD > 0 ? `blur(${motionBlur}px)` : `blur(${Math.abs(velocity) * 0.3}px)`,
            zIndex: 100 - Math.round(absD * 10),
            transition: dragStart === null ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
        };
    }, [currentIndex, velocity, dragStart]);

    const navigateTo = useCallback((index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setVelocity(index > currentIndex ? 5 : -5);
        setCurrentIndex(index);

        setTimeout(() => {
            setVelocity(0);
            setIsAnimating(false);
        }, 600);
    }, [currentIndex, isAnimating]);

    const handlePrev = () => {
        navigateTo(currentIndex > 0 ? currentIndex - 1 : posters.length - 1);
    };

    const handleNext = () => {
        navigateTo(currentIndex < posters.length - 1 ? currentIndex + 1 : 0);
    };

    // Mouse/Touch drag handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragStart(clientX);
        lastMoveX.current = clientX;
        lastMoveTime.current = Date.now();
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (dragStart === null) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const delta = clientX - dragStart;
        setDragOffset(delta);

        // Calculate velocity
        const now = Date.now();
        const dt = now - lastMoveTime.current;
        if (dt > 0) {
            const dx = clientX - lastMoveX.current;
            setVelocity(dx / dt * 10);
        }
        lastMoveX.current = clientX;
        lastMoveTime.current = now;
    };

    const handleDragEnd = () => {
        if (dragStart === null) return;

        const threshold = 100;
        if (dragOffset > threshold) {
            handlePrev();
        } else if (dragOffset < -threshold) {
            handleNext();
        }

        setDragStart(null);
        setDragOffset(0);
        setTimeout(() => setVelocity(0), 300);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const activePoster = posters[currentIndex];

    return (
        <div className="relative w-full py-8 select-none">
            {/* Ambient glow background */}
            <div
                className="absolute inset-0 opacity-30 blur-3xl transition-all duration-1000"
                style={{
                    background: `radial-gradient(ellipse at center, ${activePoster.accent}40 0%, transparent 70%)`,
                }}
            />

            {/* 3D Carousel Stage */}
            <div
                ref={containerRef}
                className="relative h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{ perspective: '1500px' }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {/* Carousel track */}
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {posters.map((poster, index) => (
                        <div
                            key={poster.id}
                            onClick={() => !isAnimating && navigateTo(index)}
                            className="absolute origin-center will-change-transform"
                            style={getCardTransform(index, dragOffset)}
                        >
                            {/* Poster Card - A4 Ratio */}
                            <div
                                className={`
                  relative w-[300px] h-[424px] rounded-2xl overflow-hidden
                  shadow-2xl shadow-black/50
                  bg-gradient-to-br ${poster.gradient}
                  group
                `}
                            >
                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-between p-8">
                                    {/* Top badge */}
                                    <div className="flex justify-between items-start">
                                        <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white/90 text-[10px] font-mono uppercase tracking-widest">
                                            {poster.category}
                                        </span>
                                        <span className="text-white/50 font-mono text-xs">
                                            {String(poster.id).padStart(2, '0')}/07
                                        </span>
                                    </div>

                                    {/* Center visual element */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="relative">
                                            {/* Decorative rings */}
                                            <div className="absolute inset-0 -m-8 rounded-full border border-white/10 animate-pulse" />
                                            <div className="absolute inset-0 -m-16 rounded-full border border-white/5" />

                                            {/* Central icon */}
                                            <div
                                                className="w-24 h-24 rounded-2xl bg-black/20 backdrop-blur-xl 
                                   flex items-center justify-center
                                   border border-white/10 shadow-inner"
                                            >
                                                <span className="text-4xl font-black text-white/90 font-mono">
                                                    {poster.id}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom info */}
                                    <div>
                                        <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                                            {poster.title}
                                        </h3>
                                        <p className="text-white/50 text-xs font-mono uppercase tracking-wider">
                                            Visual Design • 2024
                                        </p>
                                    </div>
                                </div>

                                {/* Interactive hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${poster.accent}30 0%, transparent 60%)`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Info Panel */}
            <div className="text-center mt-8 mb-6">
                <div
                    className="inline-block px-4 py-1 rounded-full mb-3 text-xs font-mono uppercase tracking-widest"
                    style={{ backgroundColor: `${activePoster.accent}20`, color: activePoster.accent }}
                >
                    {activePoster.category}
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight">
                    {activePoster.title}
                </h2>
                <p className="text-slate-500 text-sm mt-2 font-mono">
                    Drag or use arrow keys to navigate
                </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6">
                <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="group relative w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 
                     border border-white/10 hover:border-white/20
                     transition-all duration-300 disabled:opacity-50"
                >
                    <svg className="w-5 h-5 mx-auto text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Dot indicators */}
                <div className="flex gap-2">
                    {posters.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => navigateTo(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="group relative w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 
                     border border-white/10 hover:border-white/20
                     transition-all duration-300 disabled:opacity-50"
                >
                    <svg className="w-5 h-5 mx-auto text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
