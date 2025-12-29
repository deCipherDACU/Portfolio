import { useState, useCallback, useEffect, useRef } from 'react';
import { portfolioContent, type DesignProject } from '../../data/content';
import { PosterDetailOverlay } from './PosterDetailOverlay';


export function DesignCarousel3D() {
    const posters = portfolioContent.designPortfolio;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [dragOffset, setDragOffset] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastMoveTime = useRef<number>(0);
    const lastMoveX = useRef<number>(0);
    const wheelTimeout = useRef<number | null>(null);

    const getCardTransform = useCallback((index: number, dragDelta: number = 0) => {
        // Calculate virtual index position relative to current
        // Used for continuous scrolling math, though we clamp navigation
        const diff = index - currentIndex + (dragDelta / 400);
        const absD = Math.abs(diff);

        // 3D positioning
        // x: spread cards out horizontally
        // z: push non-active cards back
        // rotateY: angle cards towards center
        const translateX = diff * 320;
        const translateZ = -absD * 250;
        const rotateY = diff * -15;
        const scale = Math.max(0.6, 1 - absD * 0.15);

        // Opacity and blur based on distance and velocity
        const opacity = Math.max(0.2, 1 - absD * 0.4);

        // Dynamic motion blur calculation
        // Base blur from distance + Velocity blur from movement
        const velocityBlur = Math.min(Math.abs(velocity) * 2, 10);
        const distanceBlur = absD * 4; // Further cards are blurrier (DOF)
        const totalBlur = distanceBlur + (absD < 0.5 ? velocityBlur : 0);

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity,
            filter: `blur(${totalBlur}px) brightness(${1 - absD * 0.3})`,
            zIndex: 100 - Math.round(absD * 10),
            transition: dragStart === null ? 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
        };
    }, [currentIndex, velocity, dragStart]);

    const navigateTo = useCallback((index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        // Calculate direction for velocity effect
        setVelocity(index > currentIndex ? 5 : -5);
        setCurrentIndex(index);

        setTimeout(() => {
            setVelocity(0);
            setIsAnimating(false);
        }, 400);
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
        setVelocity(0); // Reset velocity
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (dragStart === null) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const delta = clientX - dragStart;
        setDragOffset(delta);

        // Calculate velocity for motion blur
        const now = Date.now();
        const dt = now - lastMoveTime.current;
        if (dt > 0) {
            const dx = clientX - lastMoveX.current;
            // Weighted average for smoother velocity
            const instantVel = (dx / dt) * 20;
            setVelocity(instantVel);
        }
        lastMoveX.current = clientX;
        lastMoveTime.current = now;
    };

    const handleDragEnd = (_e: React.MouseEvent | React.TouchEvent) => {
        if (dragStart === null) return;

        const threshold = 50; // Lower threshold but combined with move check

        if (dragOffset > threshold) {
            handlePrev();
        } else if (dragOffset < -threshold) {
            handleNext();
        }

        setDragStart(null);
        setDragOffset(0);
        setTimeout(() => setVelocity(0), 150); // Fade out blur
    };

    // Use native event listener for wheel to allow { passive: false }
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheelNative = (e: WheelEvent) => {
            // Check if we should intercept the scroll
            // Intercept if there's significant horizontal or vertical scrolling
            if (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10) {
                e.preventDefault(); // Stop page scroll ALWAYS if we are over the carousel

                if (isAnimating || selectedProject || wheelTimeout.current) return;

                if (e.deltaX > 0 || e.deltaY > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }

                wheelTimeout.current = window.setTimeout(() => {
                    wheelTimeout.current = null;
                }, 300);
            }
        };

        container.addEventListener('wheel', handleWheelNative, { passive: false });
        return () => container.removeEventListener('wheel', handleWheelNative);
    }, [isAnimating, selectedProject, handleNext, handlePrev]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (_e: KeyboardEvent) => {
            // Only capture keys if element or parent is hovered/focused to avoid hijacking page scroll too aggressively
            // But for this prominent section, we might want global keys when visible. 
            // For now, let's keep it simple and safe.
        };
        // Adding event listener to window might conflict with other carousels if not careful.
        // Considering this replaces the only main gallery, it might be fine, but let's stick to click/drag for safety unless requested.
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);


    // const activeProject = posters[currentIndex];

    return (
        <div className="relative w-full py-20 overflow-hidden select-none bg-black/50">
            {/* 3D Scene Container */}
            <div
                ref={containerRef}
                className="relative h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing perspective-container touch-none"
                style={{ perspective: '1200px' }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {/* Carousel Track */}
                <div
                    className="relative w-full h-full flex items-center justify-center transform-style-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {posters.map((poster, index) => (
                        <div
                            key={poster.id}
                            onClick={(_e) => {
                                // If it's a side card, navigate to it
                                if (index !== currentIndex) {
                                    navigateTo(index);
                                } else if (Math.abs(dragOffset) < 10) {
                                    // If it's the active card and NOT a significant drag, open details
                                    setSelectedProject(poster);
                                }
                            }}
                            className={`absolute origin-center will-change-transform cursor-pointer transition-shadow duration-300 ${index === currentIndex ? 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]' : ''}`}
                            style={getCardTransform(index, dragOffset)}
                        >
                            {/* Card Content */}
                            <div className="group relative w-[350px] md:w-[450px] aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl border border-white/10">

                                {/* Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={poster.image}
                                        alt={poster.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        draggable={false}
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                </div>

                                {/* Content Info */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 border border-primary/30 w-fit px-2 py-1 bg-black/50 backdrop-blur-sm">
                                        {poster.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display leading-tight shadow-black drop-shadow-lg">
                                        {poster.title}
                                    </h3>
                                    <p className="text-white/70 text-sm line-clamp-2 mb-6 font-light">
                                        {poster.description}
                                    </p>

                                    {/* Action Button Removed */}
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-50">
                {posters.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => navigateTo(index)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${index === currentIndex
                            ? 'w-12 bg-primary shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* Detail Overlay */}
            <PosterDetailOverlay
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}
