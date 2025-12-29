import React from 'react';
import { X } from 'lucide-react';

import { useFocusTrap } from '../../hooks/useFocusTrap';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    const containerRef = useFocusTrap(isOpen);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-dark/80 backdrop-blur-sm">
            <div
                ref={containerRef as React.RefObject<HTMLDivElement>}
                className="relative w-full max-w-7xl h-[90vh] bg-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 rounded-sm"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-zinc-950 select-none">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <h2 className="text-sm font-bold font-display uppercase tracking-[0.2em] text-white/90">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-white/10 hover:text-primary transition-colors text-white/50"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-hidden relative">
                    {children}
                </div>
            </div>
        </div>
    );
};
