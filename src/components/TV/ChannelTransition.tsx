
import '../../styles/animations.css';

interface ChannelTransitionProps {
    isTransitioning: boolean;
}

export const ChannelTransition = ({ isTransitioning }: ChannelTransitionProps) => {
    if (!isTransitioning) return null;

    return (
        <div className="absolute inset-0 z-40 bg-slate-900 pointer-events-none overflow-hidden">
            {/* Static Noise */}
            <div className="absolute inset-0 static-noise opacity-30" />

            {/* Scanline Swipe */}
            <div className="scanline-swipe bg-white/30" />

            {/* Flicker Flash */}
            <div className="absolute inset-0 bg-white/10 animate-pulse duration-75" />
        </div>
    );
};
