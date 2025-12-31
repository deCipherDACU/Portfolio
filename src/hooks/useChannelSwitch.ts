import { useState, useCallback } from 'react';
import { quotes } from '../data/quotes';

export const useChannelSwitch = (totalChannels: number) => {
    const [currentChannel, setCurrentChannel] = useState(0);
    const [isPoweredOn, setIsPoweredOn] = useState(true);
    const [isTurningOff, setIsTurningOff] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showPowerOnQuote, setShowPowerOnQuote] = useState(false);
    const [currentQuote, setCurrentQuote] = useState('');

    const triggerTransition = useCallback((action: () => void) => {
        setIsTransitioning(true);
        setTimeout(() => {
            action();
            setTimeout(() => {
                setIsTransitioning(false);
            }, 300); // Crossfade / Fade out static
        }, 150); // Static peak
    }, []);

    const nextChannel = useCallback(() => {
        if (!isPoweredOn || isTransitioning || isTurningOff) return;
        triggerTransition(() => {
            setCurrentChannel((prev) => (prev + 1) % totalChannels);
        });
    }, [isPoweredOn, isTransitioning, isTurningOff, totalChannels, triggerTransition]);

    const prevChannel = useCallback(() => {
        if (!isPoweredOn || isTransitioning || isTurningOff) return;
        triggerTransition(() => {
            setCurrentChannel((prev) => (prev - 1 + totalChannels) % totalChannels);
        });
    }, [isPoweredOn, isTransitioning, isTurningOff, totalChannels, triggerTransition]);

    const goToChannel = useCallback((index: number) => {
        if (!isPoweredOn || isTransitioning || isTurningOff) return;
        triggerTransition(() => {
            setCurrentChannel(index);
        });
    }, [isPoweredOn, isTransitioning, isTurningOff, triggerTransition]);

    const togglePower = useCallback(() => {
        if (isPoweredOn) {
            // Turning OFF sequence
            setIsTurningOff(true);
            setTimeout(() => {
                setIsPoweredOn(false);
                setIsTurningOff(false);
            }, 600); // Wait for CRT animation
        } else {
            // Turning ON sequence
            setIsPoweredOn(true);
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setCurrentQuote(randomQuote.text);
            setShowPowerOnQuote(true);

            setTimeout(() => {
                setShowPowerOnQuote(false);
            }, 3500);
        }
    }, [isPoweredOn]);

    return {
        currentChannel,
        isPoweredOn,
        isTurningOff,
        isTransitioning,
        nextChannel,
        prevChannel,
        goToChannel,

        togglePower,
        showPowerOnQuote,
        currentQuote,
    };
};
