import type { Tool } from '../../data/types';
import { ToolCard } from './ToolCard';

interface ToolGridProps {
    tools: Tool[];
    onSelectTool: (tool: Tool) => void;
}

export const ToolGrid = ({ tools, onSelectTool }: ToolGridProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} onClick={() => onSelectTool(tool)} />
            ))}
        </div>
    );
};
