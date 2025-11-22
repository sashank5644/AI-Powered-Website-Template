"use client";

import { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
}

const TypingEffect = ({ text, speed = 100, onComplete }: TypingEffectProps) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, onComplete]);

    return <span>{displayedText}</span>;
};

export default TypingEffect;
