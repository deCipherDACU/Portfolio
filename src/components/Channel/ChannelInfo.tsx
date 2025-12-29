import type { Channel } from '../../data/types';
import { Badge } from '../shared/Badge';

interface ChannelInfoProps {
    channel: Channel;
}

export const ChannelInfo = ({ channel }: ChannelInfoProps) => {
    return (
        <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${channel.accentColor}`} />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Channel Overview
                </span>
            </div>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 underline decoration-white/10 underline-offset-8">
                {channel.name}
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {channel.description}
            </p>
            <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-white/20">Production</Badge>
                <Badge variant="outline" className="border-white/20">Creative</Badge>
                <Badge variant="outline" className="border-white/20">Technical</Badge>
            </div>
        </div>
    );
};
