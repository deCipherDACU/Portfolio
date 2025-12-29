import { Power, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '../shared/Button';

interface RemoteControlProps {
    isPoweredOn: boolean;
    onTogglePower: () => void;
    onNextChannel: () => void;
    onPrevChannel: () => void;
}

export const RemoteControl = ({
    isPoweredOn,
    onTogglePower,
    onNextChannel,
    onPrevChannel,
}: RemoteControlProps) => {
    return (
        <div className="fixed bottom-8 right-8 z-50 animate-slide-up flex flex-col items-end gap-2">
            <div className="text-primary text-[10px] font-bold tracking-[0.2em] font-display uppercase mr-2 opacity-80">
                System Control
            </div>

            <div className="bg-black border border-white/20 rounded-lg p-3 shadow-2xl flex items-center gap-3 backdrop-blur-md">

                {/* Power Section */}
                <div className="flex flex-col items-center border-r border-white/20 pr-3 mr-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onTogglePower}
                        className={`
                            relative overflow-hidden transition-all duration-300 w-12 h-12 rounded-md border border-white/10
                            ${isPoweredOn
                                ? 'text-black bg-primary border-primary shadow-[0_0_15px_#FAC638]'
                                : 'text-white/40 hover:text-white hover:bg-white/10'
                            }
                        `}
                    >
                        <Power size={20} className={isPoweredOn ? "drop-shadow-sm" : ""} />
                    </Button>
                    <span className="text-[9px] text-white/40 font-display tracking-widest mt-1 uppercase">Pwr</span>
                </div>

                {/* Channel Control */}
                <div className="grid grid-cols-2 gap-2">
                    <Button
                        variant="ghost"
                        className="h-10 w-14 rounded-sm bg-stone-950 border border-white/10 hover:border-primary hover:text-primary transition-all text-white"
                        onClick={onPrevChannel}
                    >
                        <ChevronDown size={18} />
                    </Button>
                    <Button
                        variant="ghost"
                        className="h-10 w-14 rounded-sm bg-stone-950 border border-white/10 hover:border-primary hover:text-primary transition-all text-white"
                        onClick={onNextChannel}
                    >
                        <ChevronUp size={18} />
                    </Button>
                </div>

                {/* Info / Guide */}
                <div className="border-l border-white/10 pl-3 ml-1 flex flex-col gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-full h-8 rounded-sm text-xs font-display font-medium text-white/50 hover:text-primary hover:bg-white/5"
                    >
                        GUIDE
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-full h-8 rounded-sm text-xs font-display font-medium text-white/50 hover:text-white hover:bg-white/5"
                    >
                        MENU
                    </Button>
                </div>
            </div>
        </div>
    );
};
