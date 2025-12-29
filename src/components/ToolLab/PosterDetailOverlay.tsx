import { X } from 'lucide-react';
import type { DesignProject } from '../../data/content';
import { useEffect, useState } from 'react';

interface PosterDetailOverlayProps {
    project: DesignProject | null;
    onClose: () => void;
}

export const PosterDetailOverlay = ({ project, onClose }: PosterDetailOverlayProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (project) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [project]);

    if (!project) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Content Container */}
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all border border-white/10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 h-1/3 md:h-full relative bg-black flex items-center justify-center p-8">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                    />
                    {/* Background Glow */}
                    <div
                        className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at center, ${project.details?.colorPalette[1] || '#ffffff'} 0%, transparent 70%)`
                        }}
                    />
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 h-2/3 md:h-full overflow-y-auto p-8 md:p-12 bg-neutral-900/50 relative">
                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            {project.details?.theme || 'Design Project'}
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-display leading-tight">
                            {project.title}
                        </h2>
                        <p className="text-xl text-white/60 font-medium leading-relaxed border-l-2 border-primary pl-6">
                            "{project.description}"
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-12">

                        {/* Process Section */}
                        <div className="group">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-slate-600"></span>
                                The Process
                            </h3>
                            <p className="text-slate-300 leading-8 font-light text-lg">
                                {project.details?.process || "Process details coming soon."}
                            </p>
                        </div>

                        {/* Color Palette */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-slate-600"></span>
                                Color Palette
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {project.details?.colorPalette.map((color, idx) => (
                                    <div key={idx} className="group">
                                        <div
                                            className="w-16 h-16 rounded-lg shadow-lg mb-3 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                            style={{ backgroundColor: color }}
                                        />
                                        <div className="text-xs font-mono text-slate-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                            {color}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools Used (Static for now as mostly Photoshop is implied) */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-slate-600"></span>
                                Tools
                            </h3>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-blue-900/20 text-blue-400 border border-blue-500/30 rounded text-xs font-bold uppercase">Photoshop</span>
                                <span className="px-3 py-1 bg-purple-900/20 text-purple-400 border border-purple-500/30 rounded text-xs font-bold uppercase">Generative AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
