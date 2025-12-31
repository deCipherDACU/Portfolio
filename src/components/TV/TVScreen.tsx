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

    useEffect(() => {
        if (isPoweredOn && channel.identMedia.match(/\.(mp4|webm)$/i) && videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, [channel.identMedia, isPoweredOn]);

    return (
        <div className={`relative w-full h-full bg-slate-900 tv-scanlines screen-flicker ${isTurningOff ? 'animate-crt-off' : ''}`}>
            {/* Channel Content */}
            {isPoweredOn && (
                <>
                    {/* Channel Media */}
                    {/* Channel Media - Supports Video or Image */}
                    {channel.identMedia.match(/\.(mp4|webm)$/i) ? (
                        <video
                            ref={videoRef}
                            key={channel.identMedia}
                            src={channel.identMedia}
                            className="w-full h-full object-cover opacity-80"
                            loop
                            muted
                            playsInline
                            autoPlay
                        />
                    ) : (
                        <img
                            src={channel.identMedia}
                            alt={channel.name}
                            className="w-full h-full object-cover opacity-80"
                        />
                    )}

                    {/* Overlay UI */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black via-black/20 to-transparent">
                        <div className="flex justify-between items-start">
                            <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-sm border-l-4 border-primary">
                                <span className="text-4xl font-display font-bold text-white tracking-widest shadow-black drop-shadow-lg">
                                    {channel.number}
                                </span>
                            </div>
                            <div className="text-right">
                                <h2 className="text-3xl font-bold font-display text-white uppercase tracking-tighter drop-shadow-lg">
                                    {channel.name}
                                </h2>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold bg-black/50 px-2 py-0.5 inline-block mt-1">
                                    Signal Locked
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
                    className="bg-transparent border border-green-900/50 text-green-500 hover:bg-green-900/20 hover:text-green-400 hover:border-green-500/50 text-xl px-8 py-4 font-mono uppercase tracking-widest transition-all duration-300"
                >
                    <Power className="w-5 h-5 mr-3" />
                    Initialize System
                </Button>
            </PowerOnQuote>
        </div>
    );
};
