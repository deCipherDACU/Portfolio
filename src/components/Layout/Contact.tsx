import { Mail, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-background-dark relative overflow-hidden border-t border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold font-display text-white uppercase tracking-tighter mb-8">
                    Initialize <span className="text-primary glow-text">Connection</span>
                </h2>

                <p className="text-xl text-neutral-light/70 max-w-2xl mx-auto mb-16">
                    Currently looking to explore AI-based filmmaking, cinematic reels, social content, and automation. If you need dynamic visuals or AI-integrated production, let's talk.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
                    <a href="mailto:dacuman29@gmail.com">
                        <Button className="rounded-full px-10 py-8 text-xl h-auto bg-white text-slate-950 hover:scale-105 transition-transform">
                            <Mail className="mr-3" size={24} /> Start a Conversation
                        </Button>
                    </a>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/dacuman/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="rounded-full w-20 h-20 border-white/10 p-0 hover:bg-white/5 transition-all" title="LinkedIn">
                                <Linkedin size={28} />
                            </Button>
                        </a>
                        <a href="https://x.com/DacumanG" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="rounded-full w-20 h-20 border-white/10 p-0 hover:bg-white/5 transition-all text-2xl font-bold" title="@DacumanG">
                                {/* X Logo (Custom or Text) */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Footer Removed */}
            </div>
        </section>
    );
};
