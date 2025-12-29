import { useState, useCallback } from 'react';
import { quotes } from '../data/quotes';

export const useChannelSwitch = (totalChannels: number) => {
    const [currentChannel, setCurrentChannel] = useState(0);
    const [isPoweredOn, setIsPoweredOn] = useState(true);
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
        if (!isPoweredOn || isTransitioning) return;
        triggerTransition(() => {
            setCurrentChannel((prev) => (prev + 1) % totalChannels);
        });
    }, [isPoweredOn, isTransitioning, totalChannels, triggerTransition]);

    const prevChannel = useCallback(() => {
        if (!isPoweredOn || isTransitioning) return;
        triggerTransition(() => {
            setCurrentChannel((prev) => (prev - 1 + totalChannels) % totalChannels);
        });
    }, [isPoweredOn, isTransitioning, totalChannels, triggerTransition]);

    const goToChannel = useCallback((index: number) => {
        if (!isPoweredOn || isTransitioning) return;
        triggerTransition(() => {
            setCurrentChannel(index);
        });
    }, [isPoweredOn, isTransitioning, triggerTransition]);

    const togglePower = useCallback(() => {
        setIsPoweredOn((prev) => {
            const newState = !prev;
            if (newState) {
                // Turning ON
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                setCurrentQuote(randomQuote.text); // Note: Simplified to just text for now, can expand state to object if needed
                setShowPowerOnQuote(true);

                setTimeout(() => {
                    setShowPowerOnQuote(false);
                }, 3500);
            }
            return newState;
        });
    }, []);

    return {
        currentChannel,
        isPoweredOn,
        isTransitioning,
        nextChannel,
        prevChannel,
        goToChannel,

        togglePower,
        showPowerOnQuote,
        currentQuote,
    };
};
