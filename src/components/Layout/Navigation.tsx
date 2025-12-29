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
                    <div className="w-10 h-10 rounded bg-surface-dark border border-white/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(250,198,56,0.1)] group">
                        <Tv className="text-white/80 group-hover:text-primary transition-colors duration-300" size={20} />
                        <div className="absolute inset-0 bg-scanlines opacity-50" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold font-display tracking-wider text-white leading-none">
                            PORTFOLIO<span className="text-white/40 font-normal">.TV</span>
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

                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden md:flex border-white/10 text-white/70 hover:text-white hover:bg-white/5 font-display tracking-wide text-xs"
                    >
                        RESUME
                    </Button>
                    <Button
                        size="sm"
                        className="bg-primary text-black font-bold hover:bg-primary/90 shadow-[0_0_20px_rgba(250,198,56,0.25)] border border-white/10 tracking-wide font-display text-xs"
                    >
                        TUNE IN
                    </Button>
                </div>
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
