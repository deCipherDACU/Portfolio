import type { Project } from '../../data/types';
import { X, Play, FileText } from 'lucide-react';
import { Button } from '../shared/Button';
import { Badge } from '../shared/Badge';

interface ProjectDetailProps {
    project: Project | null;
    onClose: () => void;
    accentColor: string;
}

export const ProjectDetail = ({ project, onClose, accentColor }: ProjectDetailProps) => {
    if (!project) return null;

    return (
        <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-slate-900 border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out ${project ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Project Detail</h2>
                    <Button variant="ghost" size="sm" onClick={onClose}>
                        <X size={24} />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-8">
                    <div className="aspect-video bg-black rounded-xl mb-8 overflow-hidden shadow-2xl relative group">
                        <img src={project.thumbUrl} alt={project.title} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Button className={`rounded-full p-6 bg-gradient-to-r ${accentColor}`}>
                                <Play size={32} className="fill-white" />
                            </Button>
                        </div>
                    </div>

                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{project.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-8">{project.brief}</p>

                    <div className="grid grid-cols-2 gap-8 mb-8 text-sm">
                        <div>
                            <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-3">Role</h4>
                            <p className="text-white text-lg font-medium">{project.role}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-3">Year</h4>
                            <p className="text-white text-lg font-medium">{project.year}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-4">Tool Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.softwareTags.map(tag => (
                                <Badge key={tag} className="py-1.5 px-3 bg-slate-800 border-white/5 text-slate-300">
                                    {tag}
                                </Badge>
                            ))}
                            {project.aiToolTags.map(tag => (
                                <Badge key={tag} className={`py-1.5 px-3 bg-gradient-to-r ${accentColor} border-none text-white`}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-4">Deliverables</h4>
                        <ul className="space-y-2">
                            {project.deliverables.map(item => (
                                <li key={item} className="flex items-center gap-3 text-slate-400">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentColor}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                        <Button variant="primary" className={`w-full bg-gradient-to-r ${accentColor} border-none`}>
                            <Play size={18} className="mr-2" /> Watch Project
                        </Button>
                        <Button variant="outline" className="w-full border-white/10">
                            <FileText size={18} className="mr-2" /> Case Study
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
