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
                    Currently accepting new projects for Q1 2025. Whether you need a cinematic reel, social content, or AI-integrated production, let's talk.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
                    <Button className="rounded-full px-10 py-8 text-xl h-auto bg-white text-slate-950 hover:scale-105 transition-transform">
                        <Mail className="mr-3" size={24} /> Start a Conversation
                    </Button>
                    <div className="flex gap-4">
                        {[
                            { icon: Linkedin, label: 'LinkedIn' },
                            { icon: Twitter, label: 'Twitter' },
                            { icon: Youtube, label: 'YouTube' },
                        ].map(social => (
                            <Button key={social.label} variant="outline" size="lg" className="rounded-full w-20 h-20 border-white/10 p-0 hover:bg-white/5 transition-all">
                                <social.icon size={28} />
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
                    <div>© 2024 Portfolio.TV - All Rights Reserved</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
                        Back to Top <ArrowRight className="-rotate-90 group-hover:-translate-y-1 transition-transform" size={14} />
                    </div>
                </div>
            </div>
        </section>
    );
};
