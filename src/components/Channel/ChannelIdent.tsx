import type { Channel } from '../../data/types';

interface ChannelIdentProps {
    channel: Channel;
}

export const ChannelIdent = ({ channel }: ChannelIdentProps) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img
                src={channel.identMedia}
                alt={channel.name}
                className="w-full h-full object-cover"
            />
        </div>
    );
};
