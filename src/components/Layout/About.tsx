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

                <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12 leading-none font-display text-center">
                    VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 glow-text">SYSTEMS</span> ARCHITECT.
                </h2>

                <div className="text-xl text-neutral-light/80 leading-relaxed font-medium text-center max-w-3xl mx-auto">
                    <p className="mb-6">
                        I'm Shubham Pal, a 21-year-old creative from Varanasi, now living in Hebbal, Bengaluru, crafting visual stories since 2019. My freelancing journey began in 2023, and I now drive growth at YAAS (YouTube as a Service), constantly learning and evolving.
                    </p>
                    <p>
                        Deeply passionate about AI filmmaking and automation, I am also pursuing a BS in Data Science and Applications from IIT Madras, bridging the gap between artistic expression and data-driven innovation.
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
                <div className="grid md:grid-cols-5 gap-8">
                    {[
                        { label: 'Project Completed', value: '120+' },
                        { label: 'Global Brands', value: '4+' },
                        { label: 'Years Experience', value: '2+' },
                        { label: 'Total Views', value: '30M+' },
                        { label: 'AI Tools used', value: '15+' },
                    ].map(stat => (
                        <div key={stat.label} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-white/10 transition-colors text-center">
                            <div className="text-4xl font-black text-white mb-2 italic tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Brand Logos */}
                <div className="mt-24 pt-12 border-t border-white/5">
                    <p className="text-center text-sm font-bold text-white/30 uppercase tracking-[0.2em] mb-12">Worked with Global brands</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
                        {[
                            { name: 'Vi', src: '/vi.png', height: 'h-16' },
                            { name: 'Cleartrip', src: '/cleartrip-logo.png', height: 'h-24' },
                            { name: 'Aevy', src: '/aevy.png', height: 'h-14' },
                            { name: 'Vi Movies', src: '/vi-movies.png', height: 'h-36' },
                            { name: 'Trvl Pass', src: '/trvlpass.png', height: 'h-14' },
                        ].map((brand) => (
                            <div key={brand.name} className="group relative">
                                <img
                                    src={brand.src}
                                    alt={brand.name}
                                    className={`${brand.height} w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
