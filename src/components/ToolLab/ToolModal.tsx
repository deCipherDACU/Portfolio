import type { Tool } from '../../data/types';
import { Modal } from '../shared/Modal';
import { Badge } from '../shared/Badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '../shared/Button';

interface ToolModalProps {
    tool: Tool | null;
    onClose: () => void;
}

export const ToolModal = ({ tool, onClose }: ToolModalProps) => {
    if (!tool) return null;

    return (
        <Modal isOpen={!!tool} onClose={onClose} title={tool.name}>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-3xl bg-neutral-dark border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
                        <img src={tool.logoUrl} alt={tool.name} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {tool.useCases.map(tag => (
                            <Badge key={tag} className="bg-white/10 text-white border-none">{tag}</Badge>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        {tool.links.map(link => (
                            <Button key={link.label} variant="outline" className="w-full justify-between hover:border-secondary hover:text-secondary" onClick={() => window.open(link.url, '_blank')}>
                                {link.label}
                                <ExternalLink size={14} className="opacity-50" />
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="md:w-2/3">
                    <section className="mb-8">
                        <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3 italic">What I use it for</h4>
                        <p className="text-neutral-light text-lg leading-relaxed">{tool.description}</p>
                    </section>

                    <section className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                        <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4 italic">Typical Workflow</h4>
                        <p className="text-neutral-light/80 leading-relaxed italic border-l-2 border-brand/50 pl-4">{tool.workflow}</p>
                    </section>

                    <section>
                        <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4 italic">Example Output</h4>
                        <div className="grid grid-cols-3 gap-3">
                            {tool.exampleThumbs.map((thumb, idx) => (
                                <div key={idx} className="aspect-square bg-slate-800 rounded-lg overflow-hidden border border-white/5 group relative">
                                    <img src={thumb} alt={`Example ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Modal>
    );
};
