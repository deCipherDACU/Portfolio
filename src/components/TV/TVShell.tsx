import type { ReactNode } from 'react';

interface TVShellProps {
    children: ReactNode;
    isPoweredOn?: boolean;
    onChannelChange?: () => void;
    onVolumeChange?: (direction: 'up' | 'down') => void;
    onTogglePower?: () => void;
}

export const TVShell = ({ children, isPoweredOn = true, onChannelChange, onVolumeChange, onTogglePower }: TVShellProps) => {
    return (
        <div className="relative z-10 w-[70%] mx-auto transform transition-transform duration-1000 px-4">
            {/* Vintage TV Casing - Rounded Retro Style (Yellow) */}
            <div className={`
                relative bg-tv-bezel p-8 rounded-[3rem] shadow-2xl transition-all duration-700
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-black/20 before:rounded-[3rem] before:pointer-events-none
                after:absolute after:inset-0 after:bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] after:opacity-20 after:mix-blend-overlay after:rounded-[3rem] after:pointer-events-none
                ${isPoweredOn ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)] brightness-90'}
            `}>
                {/* Vintage Chrome Trim */}
                <div className="absolute inset-0 border-[8px] border-black/10 rounded-[3rem] pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Screen Area */}
                    <div className="flex-grow relative bg-black rounded-[2rem] border-[16px] border-[#1a1a1a] shadow-[inset_0_0_20px_rgba(0,0,0,1)] overflow-hidden aspect-[4/3] md:aspect-video">
                        <div className="w-full h-full relative overflow-hidden rounded-xl">
                            {children}

                            {/* Screen Glare & Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl" />
                        </div>
                    </div>

                    {/* Side Control Panel (Vintage Details) */}
                    <div className="hidden md:flex flex-col justify-between w-24 py-4 pr-4">
                        {/* Speaker Grille */}
                        <div className="flex flex-col gap-1.5 opacity-50 mb-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-full h-1 bg-black/80 rounded-full shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                            ))}
                        </div>

                        {/* Control Dials */}
                        <div className="flex flex-col gap-6 items-center mt-auto mb-8">
                            {/* Channel Changer */}
                            <div className="flex flex-col items-center gap-1 group">
                                <span className="text-[9px] font-bold text-black/50 uppercase tracking-widest">CH</span>
                                <div
                                    onClick={onChannelChange}
                                    className="w-16 h-16 rounded-full bg-neutral-800 border-4 border-black shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] relative transform rotate-45 active:rotate-90 transition-transform duration-200 cursor-pointer"
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-black rounded-full transform -rotate-45" />
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-primary transition-colors" />
                                </div>
                            </div>

                            {/* Volume Control (Rocker Switch) */}
                            <div className="flex flex-col items-center gap-1 group">
                                <span className="text-[9px] font-bold text-black/50 uppercase tracking-widest">VOL</span>
                                <div className="flex flex-col gap-0.5 bg-neutral-900 p-0.5 rounded-lg border-2 border-black shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
                                    <button
                                        onClick={() => onVolumeChange?.('up')}
                                        className="w-12 h-8 bg-neutral-800 rounded-t-md border-b border-black/50 active:bg-neutral-700 active:inner-shadow transition-colors flex items-center justify-center group/btn"
                                        aria-label="Volume Up"
                                    >
                                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-neutral-500 group-hover/btn:border-b-neutral-300" />
                                    </button>
                                    <button
                                        onClick={() => onVolumeChange?.('down')}
                                        className="w-12 h-8 bg-neutral-800 rounded-b-md border-t border-white/5 active:bg-neutral-700 active:inner-shadow transition-colors flex items-center justify-center group/btn"
                                        aria-label="Volume Down"
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
                <div className="absolute bottom-10 right-12 flex gap-4">
                    <div className={`w-3 h-3 rounded-full ${isPoweredOn ? 'bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]' : 'bg-red-900'} border border-black/50`} />
                    <div className="w-3 h-3 rounded-full bg-black/50 border border-black/50" />
                </div>
            </div>

            {/* Vintage Legs */}
            <div className="flex justify-between px-20 -mt-8 relative z-0">
                <div className="w-4 h-16 bg-neutral-900 -skew-x-12 origin-top rounded-b-lg shadow-lg border-l border-white/10" />
                <div className="w-4 h-16 bg-neutral-900 skew-x-12 origin-top rounded-b-lg shadow-lg border-r border-white/10" />
            </div>
        </div>
    );
};
