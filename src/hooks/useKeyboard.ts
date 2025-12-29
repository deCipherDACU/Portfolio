import { useEffect } from 'react';

interface KeyHandlers {
    [key: string]: () => void;
}

export const useKeyboard = (handlers: KeyHandlers, active: boolean = true) => {
    useEffect(() => {
        if (!active) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (handlers[event.key]) {
                handlers[event.key]();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlers, active]);
};
