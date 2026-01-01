import type { ReactNode } from 'react';

interface TVShellProps {
    children: ReactNode;
    isPoweredOn?: boolean;
    onChannelChange?: () => void;
    onVolumeChange?: (direction: 'up' | 'down') => void;
    onTogglePower?: () => void;
}

interface TVShellProps {
    children: ReactNode;
    isPoweredOn?: boolean;
    onChannelUp?: () => void;
    onChannelDown?: () => void;
    onVolumeClick?: () => void;
    onTogglePower?: () => void;
}

export const TVShell = ({ children, isPoweredOn = true, onChannelUp, onChannelDown, onVolumeClick, onTogglePower }: TVShellProps) => {
    return (
        <div className="relative z-10 w-full md:w-[70%] mx-auto transform transition-transform duration-1000 px-4">
            {/* Vintage TV Casing - Rounded Retro Style (Yellow) */}
            <div className={`
                relative bg-tv-bezel p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-all duration-700
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-black/20 before:rounded-[2rem] md:before:rounded-[3rem] before:pointer-events-none
                after:absolute after:inset-0 after:bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] after:opacity-20 after:mix-blend-overlay after:rounded-[2rem] md:after:rounded-[3rem] after:pointer-events-none
                ${isPoweredOn ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)] brightness-90'}
            `}>
                {/* Vintage Chrome Trim */}
                <div className="absolute inset-0 border-[4px] md:border-[8px] border-black/10 rounded-[2rem] md:rounded-[3rem] pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Screen Area */}
                    <div className="flex-grow relative bg-black rounded-[1.5rem] md:rounded-[2rem] border-[8px] md:border-[16px] border-[#1a1a1a] shadow-[inset_0_0_20px_rgba(0,0,0,1)] overflow-hidden aspect-[4/3] md:aspect-video">
                        <div className="w-full h-full relative overflow-hidden rounded-xl">
                            {children}

                            {/* Screen Glare & Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl" />
                        </div>
                    </div>

                    {/* Side Control Panel (Desktop Only) */}
                    <div className="hidden md:flex flex-col justify-between w-24 py-4 pr-4">
                        {/* Speaker Grille */}
                        <div className="flex flex-col gap-1.5 opacity-50 mb-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-full h-1 bg-black/80 rounded-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                            ))}
                        </div>

                        {/* Control Dials */}
                        <div className="flex flex-col gap-6 items-center mt-auto mb-8">
                            {/* Volume Control (Knob) */}
                            <div className="flex flex-col items-center gap-1 group">
                                <span className="text-[9px] font-bold text-black/50 uppercase tracking-widest">VOL</span>
                                <div
                                    onClick={onVolumeClick}
                                    className="w-16 h-16 rounded-full bg-neutral-800 border-4 border-black shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] relative transform rotate-45 active:rotate-90 transition-transform duration-200 cursor-pointer"
                                    title="Adjust Volume"
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-black rounded-full transform -rotate-45" />
                                </div>
                            </div>

                            {/* Channel Changer (Rocker Switch) */}
                            <div className="flex flex-col items-center gap-1 group">
                                <span className="text-[9px] font-bold text-black/50 uppercase tracking-widest">CH</span>
                                <div className="flex flex-col gap-0.5 bg-neutral-900 p-0.5 rounded-lg border-2 border-black shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
                                    <button
                                        onClick={onChannelUp}
                                        className="w-12 h-8 bg-neutral-800 rounded-t-md border-b border-black/50 active:bg-neutral-700 active:inner-shadow transition-colors flex items-center justify-center group/btn"
                                        aria-label="Channel Up"
                                    >
                                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-neutral-500 group-hover/btn:border-b-neutral-300" />
                                    </button>
                                    <button
                                        onClick={onChannelDown}
                                        className="w-12 h-8 bg-neutral-800 rounded-b-md border-t border-white/5 active:bg-neutral-700 active:inner-shadow transition-colors flex items-center justify-center group/btn"
                                        aria-label="Channel Down"
                                    >
                                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-neutral-500 group-hover/btn:border-t-neutral-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Power Button */}
                            <div className="flex flex-col items-center gap-1 mt-2">
                                <span className="text-[9px] font-bold text-black/50 uppercase tracking-widest">PWR</span>
                                <button
                                    onClick={onTogglePower}
                                    className={`
                                        w-12 h-12 rounded-lg border-b-4 active:border-b-0 active:translate-y-1 transition-all duration-100 ease-out shadow-lg flex items-center justify-center
                                        ${isPoweredOn
                                            ? 'bg-red-600 border-red-800 text-red-900'
                                            : 'bg-neutral-800 border-black text-black'}
                                    `}
                                    aria-label="Power"
                                >
                                    <div className="w-4 h-4 rounded-full border-2 border-current opacity-50 absolute" />
                                    <div className="w-0.5 h-2 bg-current opacity-50 absolute top-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Lights */}
                <div className="absolute bottom-6 md:bottom-10 right-8 md:right-12 flex gap-3 md:gap-4">
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isPoweredOn ? 'bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]' : 'bg-red-900'} border border-black/50`} />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black/50 border border-black/50" />
                </div>
            </div>

            {/* Mobile Controls Bar */}
            <div className="md:hidden mt-6 mx-auto w-full max-w-sm bg-neutral-900 rounded-2xl p-4 border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Texture overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none" />

                <div className="relative flex items-center justify-between gap-4">
                    {/* Power */}
                    <button
                        onClick={onTogglePower}
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-all ${isPoweredOn ? 'bg-red-600 border-red-800 text-white' : 'bg-neutral-800 border-neutral-700 text-neutral-500'}`}
                        aria-label="Power"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                            <line x1="12" y1="2" x2="12" y2="12" />
                        </svg>
                    </button>

                    {/* Channel Rocker */}
                    <div className="flex-1 flex items-center justify-center gap-1 bg-black/40 p-1.5 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mr-2">CH</span>
                        <div className="flex bg-neutral-800 rounded-lg border border-black/50 overflow-hidden shadow-inner">
                            <button
                                onClick={onChannelDown}
                                className="w-14 h-10 flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-950 transition-colors border-r border-black/50"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={onChannelUp}
                                className="w-14 h-10 flex items-center justify-center hover:bg-neutral-700 active:bg-neutral-950 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Volume Placeholder */}
                    <button
                        onClick={onVolumeClick}
                        className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white/50 active:scale-95 transition-transform"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Vintage Legs (Desktop Only) */}
            <div className="hidden md:flex justify-between px-20 -mt-8 relative z-0">
                <div className="w-4 h-16 bg-neutral-900 -skew-x-12 origin-top rounded-b-lg shadow-lg border-l border-white/10" />
                <div className="w-4 h-16 bg-neutral-900 skew-x-12 origin-top rounded-b-lg shadow-lg border-r border-white/10" />
            </div>
        </div>
    );
};
