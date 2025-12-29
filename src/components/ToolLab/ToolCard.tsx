import type { Tool } from '../../data/types';
import { Badge } from '../shared/Badge';

interface ToolCardProps {
    tool: Tool;
    onClick: () => void;
}

export const ToolCard = ({ tool, onClick }: ToolCardProps) => {
    return (
        <div
            className="group relative bg-surface-dark border border-white/5 rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] flex flex-col items-center text-center transform hover:-translate-y-1 overflow-hidden"
            onClick={onClick}
        >
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#FAC638]" />
            </div>

            <div className="w-20 h-20 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                <img src={tool.logoUrl} alt={tool.name} className="w-12 h-12 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{tool.name}</h3>
            <div className="flex flex-wrap justify-center gap-1 mt-auto">
                {tool.useCases.slice(0, 2).map((tag) => (
                    <Badge key={tag} className="text-[9px] py-0 px-2 bg-white/5">
                        {tag}
                    </Badge>
                ))}
            </div>
        </div>
    );
};
