import { useState, useMemo } from 'react';
import type { Channel, Project } from '../../data/types';
import { Modal } from '../shared/Modal';
import { ProjectCard } from '../Project/ProjectCard';
import { ProjectDetail } from '../Project/ProjectDetail';

interface ChannelGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    channel: Channel;
    projects: Project[];
}

export const ChannelGallery = ({ isOpen, onClose, channel, projects }: ChannelGalleryProps) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach((p) => {
            p.typeTags.forEach((t) => tags.add(t));
            p.softwareTags.forEach((t) => tags.add(t));
            p.aiToolTags.forEach((t) => tags.add(t));
        });
        return Array.from(tags).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (!selectedTag) return projects;
        return projects.filter((p) =>
            p.typeTags.includes(selectedTag) ||
            p.softwareTags.includes(selectedTag) ||
            p.aiToolTags.includes(selectedTag)
        );
    }, [projects, selectedTag]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={channel.name}>
            <div className="flex flex-col h-full bg-black text-white">
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-950">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-primary glow-text">{channel.name}</h2>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto custom-scrollbar">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mr-4 self-center">Filter Sequence:</span>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                className={`
                                    px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider border transition-all duration-300
                                    ${selectedTag === tag
                                        ? 'bg-primary text-black border-primary shadow-[0_0_15px_#FAC638]'
                                        : 'bg-black text-white/60 border-white/10 hover:border-primary/50 hover:text-white'
                                    }
                                `}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-white/30 text-sm font-mono uppercase tracking-widest">
                            No data found for selected filter sequence.
                        </div>
                    )}
                </div>

                <ProjectDetail
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    accentColor={channel.accentColor}
                />
            </div>
        </Modal>
    );
};
