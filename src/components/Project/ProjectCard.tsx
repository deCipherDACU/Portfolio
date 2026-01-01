import type { Project } from '../../data/types';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
    return (
        <div
            className="group relative bg-zinc-900 border border-white/10 rounded-sm overflow-hidden cursor-pointer hover:border-primary transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            onClick={onClick}
        >
            {/* Thumbnail */}
            <div className="aspect-video bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay z-10" />
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700 font-mono text-[length:var(--font-size-xs)]">
                    [NO SIGNAL]
                </div>
                {/* Thumb Image (if available) - mimicking the structure but using placeholder style for now if needed, 
                    or using the actual image if provided in project data. 
                    Given the previous context, I'll stick to the placeholder style requested by the theme pivot 
                    BUT also include the actual image rendering if valid, to be safe. 
                */}
                {project.thumbUrl && (
                    <img
                        src={project.thumbUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0"
                    />
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <h3 className="text-[length:var(--font-size-xl)] font-bold text-white uppercase tracking-tighter text-center mb-2">{project.title}</h3>
                </div>
            </div>

            {/* Info Footer */}
            <div className="p-4 bg-black border-t border-white/10 flex justify-between items-end">
                <div>
                    <h3 className="text-[length:var(--font-size-base)] font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-2 mt-2">
                        {[...project.typeTags, ...project.softwareTags].slice(0, 2).map(tag => (
                            <span key={tag} className="text-[length:var(--font-size-xs)] font-bold uppercase tracking-wider text-black bg-white/80 px-1.5 py-0.5 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-[length:var(--font-size-xs)] font-mono text-white/40 group-hover:text-primary">
                    {project.year}
                </div>
            </div>
        </div>
    );
};
