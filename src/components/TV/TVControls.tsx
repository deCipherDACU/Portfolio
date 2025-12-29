
import { Power, ChevronUp, ChevronDown, List, Info } from 'lucide-react';
import { Button } from '../shared/Button';

interface TVControlsProps {
    isPoweredOn: boolean;
    onTogglePower: () => void;
    onNextChannel: () => void;
    onPrevChannel: () => void;
    onShowList: () => void;
    onShowInfo: () => void;
}

export const TVControls = ({
    isPoweredOn,
    onTogglePower,
    onNextChannel,
    onPrevChannel,
    onShowList,
    onShowInfo,
}: TVControlsProps) => {
    return (
        <div className="mt-8 flex items-center gap-6 bg-slate-800 p-4 rounded-2xl border border-white/5 shadow-xl">
            <Button
                variant={isPoweredOn ? 'primary' : 'secondary'}
                className={`rounded-full p-4 ${isPoweredOn ? 'bg-red-500 text-white' : ''}`}
                onClick={onTogglePower}
                aria-label="Power button"
            >
                <Power size={24} />
            </Button>

            <div className="h-10 w-px bg-white/10" />

            <div className="flex items-center gap-2">
                <Button variant="secondary" className="rounded-full p-3" onClick={onPrevChannel} aria-label="Previous channel">
                    <ChevronDown size={20} />
                </Button>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Channel</span>
                <Button variant="secondary" className="rounded-full p-3" onClick={onNextChannel} aria-label="Next channel">
                    <ChevronUp size={20} />
                </Button>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div className="flex items-center gap-2">
                <Button variant="ghost" className="rounded-full p-3" onClick={onShowList} aria-label="Channel list">
                    <List size={20} />
                </Button>
                <Button variant="ghost" className="rounded-full p-3" onClick={onShowInfo} aria-label="Channel info">
                    <Info size={20} />
                </Button>
            </div>
        </div>
    );
};
