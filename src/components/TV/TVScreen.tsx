import { useState, useEffect, useRef } from 'react';
import type { Channel } from '../../data/types';
import { quotes } from '../../data/quotes';
import { Button } from '../shared/Button';
import { Power } from 'lucide-react';
import { PowerOnQuote } from './PowerOnQuote';
import '../../styles/tv-effects.css';

interface TVScreenProps {
    channel: Channel;
    isPoweredOn: boolean;
    isTurningOff?: boolean;
    onExplore: () => void;
    onTurnOn: () => void;
}

export const TVScreen = ({ channel, isPoweredOn, isTurningOff, onTurnOn }: TVScreenProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [randomQuote, setRandomQuote] = useState(quotes[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isPoweredOn) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setRandomQuote(quotes[randomIndex]);
            setIsPlaying(false);
            setHasError(false);
        }
    }, [isPoweredOn]);

    useEffect(() => {
        const isVideo = channel.mediaType === 'video' || (typeof channel.identMedia === 'string' && !!channel.identMedia.match(/\.(mp4|webm)(\?.*)?$/i));

        if (isPoweredOn && isVideo) {
            setIsLoading(true);
            setHasError(false);
            setIsPlaying(false);

            if (videoRef.current) {
                videoRef.current.load();
                const playPromise = videoRef.current.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log("Video playing successfully:", channel.identMedia);
                            setIsPlaying(true);
                            setIsLoading(false);
                        })
                        .catch(error => {
                            console.warn("Autoplay prevented or failed:", error);
                            setIsPlaying(false);
                            setIsLoading(false);
                            // Don't set error here, just show play button
                        });
                }
            }
        }
    }, [channel.identMedia, channel.mediaType, isPoweredOn]);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(e => console.error("Manual play failed:", e));
        }
    };

    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        console.error("Video error:", e.currentTarget.error, channel.identMedia);
        setHasError(true);
        setIsLoading(false);
    };

    return (
        <div className={`relative w-full h-full bg-slate-900 tv-scanlines screen-flicker ${isTurningOff ? 'animate-crt-off' : ''}`}>
            {/* Channel Content */}
            {isPoweredOn && (
                <>
                    {/* Channel Media */}
                    {(channel.mediaType === 'video' || (typeof channel.identMedia === 'string' && !!channel.identMedia.match(/\.(mp4|webm)(\?.*)?$/i))) ? (
                        <>
                            <video
                                ref={videoRef}
                                key={channel.identMedia}
                                src={channel.identMedia}
                                className={`w-full h-full object-cover opacity-80 ${hasError ? 'hidden' : ''}`}
                                loop
                                muted
                                playsInline
                                onPlaying={() => { setIsPlaying(true); setIsLoading(false); }}
                                onWaiting={() => setIsLoading(true)}
                                onError={handleVideoError}
                            />
                            {/* Fallback Play Button / Error State */}
                            {(!isPlaying && !hasError && !isLoading) && (
                                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                                    <button
                                        onClick={handlePlayClick}
                                        className="pointer-events-auto bg-black/50 hover:bg-black/70 text-primary border-2 border-primary rounded-full p-6 transition-all transform hover:scale-110 group"
                                    >
                                        <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            {/* Error State */}
                            {hasError && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-30 text-red-500 font-mono p-4 text-center">
                                    <div className="text-4xl mb-2">⚠</div>
                                    <div className="text-xl uppercase tracking-widest">Signal Lost</div>
                                    <div className="text-xs mt-2 opacity-70">Unable to load media feed</div>
                                    <div className="text-[10px] mt-1 opacity-50">{channel.identMedia.split('/').pop()}</div>
                                </div>
                            )}
                        </>
                    ) : (
                        <img
                            src={channel.identMedia}
                            alt={channel.name}
                            className="w-full h-full object-cover opacity-80"
                        />
                    )}

                    {/* Overlay UI */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none">
                        <div className="flex justify-between items-start">
                            <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-sm border-l-4 border-primary">
                                <span className="text-2xl md:text-4xl font-display font-bold text-white tracking-widest shadow-black drop-shadow-lg">
                                    {channel.number}
                                </span>
                            </div>
                            <div className="text-right">
                                <h2 className="text-xl md:text-3xl font-bold font-display text-white uppercase tracking-tighter drop-shadow-lg">
                                    {channel.name}
                                </h2>
                                <div className={`text-[10px] uppercase tracking-[0.3em] font-bold bg-black/50 px-2 py-0.5 inline-block mt-1 ${hasError ? 'text-red-500' : 'text-primary'}`}>
                                    {hasError ? 'CONNECTION ERR' : (isLoading ? 'ACQUIRING...' : 'SIGNAL LOCKED')}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center group mb-8">
                            {/* Tune In Button Removed */}
                        </div>
                    </div>

                    {/* CRT Bloom Effect Layer */}
                    <div className="absolute inset-0 tv-bloom pointer-events-none" />
                </>
            )}

            {/* Power Off/On Transition Overlay */}
            <PowerOnQuote
                isVisible={!isPoweredOn}
                quote={randomQuote.text}
                author={randomQuote.author}
            >
                <Button
                    onClick={onTurnOn}
                    className="bg-transparent border border-green-900/50 text-green-500 hover:bg-green-900/20 hover:text-green-400 hover:border-green-500/50 text-sm md:text-xl px-4 py-2 md:px-8 md:py-4 font-mono uppercase tracking-widest transition-all duration-300"
                >
                    <Power className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                    Initialize System
                </Button>
            </PowerOnQuote>
        </div>
    );
};
