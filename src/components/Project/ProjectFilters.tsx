import { Button } from '../shared/Button';

interface ProjectFiltersProps {
    filters: string[];
    activeFilters: string[];
    onToggleFilter: (filter: string) => void;
    onClear: () => void;
    accentColor: string;
}

export const ProjectFilters = ({
    filters,
    activeFilters,
    onToggleFilter,
    onClear,
    accentColor,
}: ProjectFiltersProps) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mr-2">Filter by</span>
            {filters.map((filter) => {
                const isActive = activeFilters.includes(filter);
                return (
                    <Button
                        key={filter}
                        variant={isActive ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => onToggleFilter(filter)}
                        className={`rounded-full border-white/10 ${isActive ? `bg-gradient-to-r ${accentColor} border-none` : ''
                            }`}
                    >
                        {filter}
                    </Button>
                );
            })}
            {activeFilters.length > 0 && (
                <Button variant="ghost" size="sm" onClick={onClear} className="text-slate-400 hover:text-white">
                    Clear All
                </Button>
            )}
        </div>
    );
};
