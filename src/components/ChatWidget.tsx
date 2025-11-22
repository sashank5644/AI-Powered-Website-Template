"use client";

import React from 'react';
import { MessageSquare } from 'lucide-react';
import styles from './ChatWidget.module.css';
import { useRouter, usePathname } from 'next/navigation';

const ChatWidget = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== '/') {
            router.push('/');
        } else {
            // If already on home, scroll to top or focus search
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Optional: Focus the input if we could access it, but scrolling is good for now.
            // A more robust way would be to use a global context or event, but simple is better.
            const input = document.querySelector('input[type="text"]') as HTMLInputElement;
            if (input) input.focus();
        }
    };

    return (
        <button className={styles.widget} onClick={handleClick} aria-label="Open Chat">
            <MessageSquare className={styles.icon} size={28} />
        </button>
    );
};

export default ChatWidget;
