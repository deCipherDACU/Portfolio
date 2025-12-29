import { X } from 'lucide-react';

interface TuneInPlaceholderProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TuneInPlaceholder = ({ isOpen, onClose }: TuneInPlaceholderProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-8 right-8 p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
            >
                <X size={32} />
            </button>

            <div className="text-center space-y-8 animate-pulse">
                {/* Retro "Please Stand By" Aesthetic */}
                <div className="relative inline-block">
                    <div className="w-32 h-32 mx-auto rounded-full bg-yellow-500/20 flex items-center justify-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-yellow-500/40 flex items-center justify-center">
                            <div className="w-4 h-24 bg-yellow-500 rotate-45" />
                            <div className="w-4 h-24 bg-yellow-500 -rotate-45 absolute" />
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest font-display">
                    Please Stand By
                </h2>

                <p className="text-xl text-neutral-400 font-mono tracking-wider">
                    TRANSMISSION INCOMING...
                </p>

                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-4 bg-white rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
