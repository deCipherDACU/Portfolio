import { Play } from 'lucide-react';
import { Button } from '../shared/Button';
import { portfolioContent } from '../../data/content';
import { useState } from 'react';
import { DesignCarousel3D } from '../ToolLab/DesignCarousel3D';

export const Work = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);


    return (
        <section id="work" className="py-20 px-[5vw] max-w-7xl mx-auto bg-black min-h-screen">
            <h2 className="text-[10vw] md:text-6xl font-bold font-display text-primary mb-16 tracking-tighter uppercase relative inline-block">
                Selected Works
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-primary/20">
                    <div className="h-full w-1/3 bg-primary animate-pulse" />
                </div>
            </h2>

            {/* VIDEO PRODUCTION SECTION */}
            <div className="mb-24">
                <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                    <h3 className="text-[length:var(--font-size-xl)] font-bold text-white uppercase tracking-widest flex items-center">
                        <span className="w-2 h-8 bg-primary mr-4" />
                        Video Design Lab
                    </h3>
                    <div className="text-white/40 font-mono text-[length:var(--font-size-sm)]">REC ● 00:04:20:12</div>
                </div>

                {/* Featured Video - Now Interactive */}
                <div className="relative aspect-video bg-neutral-dark rounded-sm border border-white/10 overflow-hidden group mb-16">
                    {activeVideo === portfolioContent.featuredVideo.id ? (
                        portfolioContent.featuredVideo.videoSrc ? (
                            <video
                                src={portfolioContent.featuredVideo.videoSrc}
                                className="w-full h-full object-cover"
                                controls
                                autoPlay
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        ) : (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${portfolioContent.featuredVideo.youtubeId}?autoplay=1`}
                                title={portfolioContent.featuredVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )
                    ) : (
                        <>
                            {portfolioContent.featuredVideo.videoSrc ? (
                                <video
                                    src={portfolioContent.featuredVideo.videoSrc}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${portfolioContent.featuredVideo.youtubeId}/maxresdefault.jpg)` }}
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-10 left-10 z-10 transition-transform duration-500 group-hover:translate-x-2">
                                <span className="inline-block bg-primary text-black px-2 py-1 text-[length:var(--font-size-xs)] md:text-xs font-bold uppercase tracking-widest mb-4">
                                    {portfolioContent.featuredVideo.category}
                                </span>
                                <h1 className="text-[5vw] md:text-7xl font-bold text-white font-display uppercase tracking-tighter leading-none mb-2 drop-shadow-xl">
                                    {portfolioContent.featuredVideo.title}
                                </h1>
                                <p className="text-white/60 max-w-lg mb-8 font-light hidden md:block">
                                    {portfolioContent.featuredVideo.description || "Interactive showreel featuring commercial, narrative, and experimental works."}
                                </p>
                                <Button
                                    className="bg-white text-black hover:bg-primary hover:text-black border-none px-3 py-2 md:px-8 md:py-6 text-[length:var(--font-size-sm)] md:text-lg font-bold uppercase tracking-widest"
                                    onClick={() => setActiveVideo(portfolioContent.featuredVideo.id)}
                                >
                                    <Play className="mr-2 h-3 w-3 md:h-5 md:w-5 fill-current" />
                                    Play Video
                                </Button>
                            </div>
                        </>
                    )}
                </div>

                {/* Horizontal Video Grid (16:9) */}
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-l-2 border-primary pl-3">Horizontal Works (16:9)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {portfolioContent.horizontalVideos?.map((video) => (
                        <div
                            key={video.id}
                            className="group relative aspect-video bg-neutral-dark border border-white/5 cursor-pointer overflow-hidden"
                            onClick={() => {
                                if (video.videoSrc) {
                                    window.open(video.videoSrc, '_blank');
                                } else {
                                    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
                                }
                            }}
                        >
                            {video.videoSrc ? (
                                <video
                                    src={video.videoSrc}
                                    poster={video.thumbnail}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                                    muted
                                    loop
                                    onMouseOver={e => e.currentTarget.play()}
                                    onMouseOut={e => {
                                        e.currentTarget.pause();
                                        e.currentTarget.currentTime = 0;
                                    }}
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            ) : (
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Play className="text-primary w-12 h-12 fill-current" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                                <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{video.category}</div>
                                <div className="text-white font-bold leading-tight">{video.title}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vertical Video Grid (9:16) */}
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6 border-l-2 border-primary pl-3">Vertical Shorts (9:16)</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {portfolioContent.verticalVideos?.map((video) => (
                        <div
                            key={video.id}
                            className="group relative aspect-[9/16] bg-neutral-dark border border-white/5 cursor-pointer overflow-hidden"
                            onClick={() => {
                                if (video.platform === 'instagram' && video.url) {
                                    window.open(video.url, '_blank');
                                } else if (video.youtubeId) {
                                    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
                                }
                            }}
                        >
                            {video.platform === 'instagram' ? (
                                video.thumbnail ? (
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                                    />
                                ) : (
                                    // Instagram Placeholder (Gradient since no auth for thumbnails)
                                    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-pink-700 to-orange-500 opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <div className="text-4xl mb-2">📸</div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-white">View on Instagram</div>
                                        </div>
                                    </div>
                                )
                            ) : (
                                // YouTube Thumbnail
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                                />
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Play className="text-primary w-12 h-12 fill-current" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                                <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{video.category}</div>
                                <div className="text-white font-bold leading-tight text-lg">{video.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* VISUAL DESIGN CAROUSEL */}
            <div>
                <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                    <h3 className="text-[length:var(--font-size-xl)] font-bold text-white uppercase tracking-widest flex items-center">
                        <span className="w-2 h-8 bg-white mr-4" />
                        Visual Design Lab
                    </h3>
                    <div className="text-white/40 font-mono text-[length:var(--font-size-xs)] hidden md:block">
                        DRAG OR SWIPE TO NAVIGATE
                    </div>
                </div>

                {/* 3D Carousel Viewport */}
                <DesignCarousel3D />
            </div>
        </section>
    );
};
