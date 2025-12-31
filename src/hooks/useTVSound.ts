import { useCallback, useRef } from 'react';

export const useTVSound = () => {
    const audioContextRef = useRef<AudioContext | null>(null);



    // Initialize Audio Context on first user interaction
    const initAudio = useCallback(() => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
    }, []);

    const playStatic = useCallback((duration = 150) => {
        initAudio();
        if (!audioContextRef.current) return;

        const ctx = audioContextRef.current;
        const bufferSize = ctx.sampleRate * 2; // 2 seconds buffer
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true; // Use loop if we want continuous, but we will stop it

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.05, ctx.currentTime);

        // Envelope
        gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (duration / 1000));

        noise.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();
        noise.stop(ctx.currentTime + (duration / 1000));
    }, [initAudio]);

    const playClick = useCallback(() => {
        initAudio();
        if (!audioContextRef.current) return;

        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    }, [initAudio]);

    const playSwitch = useCallback(() => {
        initAudio();
        if (!audioContextRef.current) return;

        // Simulates a heavier switch clunk
        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.frequency.setValueAtTime(100, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }, [initAudio]);

    return { playStatic, playClick, playSwitch };
};
