import { Menu, X, Tv } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../shared/Button';

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'Channels', href: '#channels' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background-dark/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-surface-dark border border-white/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(250,198,56,0.1)] group overflow-hidden">
                        {/* Wolf Logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-primary transition-colors duration-300 z-10">
                            <path d="M12 2L6 8L2 14C2 17 4 22 12 22C20 22 22 17 22 14L18 8L12 2Z" />
                            <path d="M6 8L12 12L18 8" />
                            <path d="M9 16C9 16 10 18 12 18C14 18 15 16 15 16" />
                            <path d="M9 12L10 14" />
                            <path d="M15 12L14 14" />
                        </svg>
                        <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold font-display tracking-wider text-white leading-none">
                            DACUMAN<span className="text-white/40 font-normal">.TV</span>
                        </h1>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[9px] font-bold text-white/50 tracking-[0.2em] uppercase">Live Signal</span>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['WORK', 'ABOUT', 'CONTACT'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-widest relative group font-display"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full box-border shadow-[0_0_8px_#FAC638]" />
                        </a>
                    ))}
                </div>

                {/* Buttons Removed */}
            </div>
            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-20 z-40 bg-slate-950 flex flex-col items-center justify-center gap-10 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-4xl font-black text-white uppercase tracking-tighter italic hover:text-blue-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="primary" className="rounded-full px-12 py-6 text-xl mt-4">
                        Work With Me
                    </Button>
                </div>
            )}
        </nav>
    );
};
