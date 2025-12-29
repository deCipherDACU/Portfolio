import { SkillsRibbon } from '../shared/SkillsRibbon';

export const About = () => {
    return (
        <section id="about" className="py-32 bg-background-dark overflow-hidden relative border-t border-white/5">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 mb-24">
                <div className="flex items-center gap-4 mb-8 text-primary/60">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
                    <span className="text-sm font-bold uppercase tracking-[0.3em] font-display">Data Stream 01</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
                </div>

                <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12 leading-none font-display text-center">
                    VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 glow-text">SYSTEMS</span> ARCHITECT.
                </h2>

                <div className="text-xl text-neutral-light/80 leading-relaxed font-medium text-center max-w-2xl mx-auto">
                    <p className="mb-6">
                        I am a visual storyteller and creative technologist specalizing in high-impact video production and AI-driven workflows.
                    </p>
                    <p>
                        With over 8 years of experience across short-form content, cinematic documentaries, and motion graphics, I bridge the gap between traditional filmmaking and modern digital innovation.
                    </p>
                </div>
            </div>

            {/* Full Width Ribbons */}
            <div className="space-y-8 mb-24 relative z-10">
                <SkillsRibbon
                    items={[
                        'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Blender', 'Photoshop',
                        'Midjourney', 'Stable Diffusion', 'Runway Gen-2', 'ElevenLabs', 'Sora',
                        'Antigravity', 'n8n', 'Higgsfield', 'Nano Banana', 'Veo 3',
                        'Supabase', 'Figma', 'Canva'
                    ]}
                    direction="left"
                    speed={45}
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { label: 'Projects Completed', value: '250+' },
                        { label: 'Global Brands', value: '45+' },
                        { label: 'Total Views', value: '100M+' },
                        { label: 'AI Models Taught', value: '12' },
                    ].map(stat => (
                        <div key={stat.label} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-white/10 transition-colors text-center">
                            <div className="text-4xl font-black text-white mb-2 italic tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
