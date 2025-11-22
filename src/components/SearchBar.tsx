"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, Send } from 'lucide-react';
import styles from './SearchBar.module.css';
import TypingEffect from './TypingEffect';
import '@/styles/animations.css'; // Import global animations

interface SearchBarProps {
    onSearch: (query: string) => void;
    isSearching?: boolean;
}

const EXAMPLES = [
    "What are your opening hours?",
    "Do you have vegan options?",
    "Where are you located?",
    "Tell me about the Quantum Steak.",
    "Can I book a table for Friday?"
];

const SearchBar = ({ onSearch, isSearching }: SearchBarProps) => {
    const [query, setQuery] = useState('');
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isTyping) {
            const timeout = setTimeout(() => {
                setPlaceholderIndex((prev) => (prev + 1) % EXAMPLES.length);
                setIsTyping(true);
            }, 3000); // Wait 3 seconds before next example
            return () => clearTimeout(timeout);
        }
    }, [isTyping]);

    const handleTypingComplete = () => {
        setIsTyping(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            setQuery('');
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.inputWrapper}>
                <Search className={styles.icon} size={24} />
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsTyping(false)} // Stop typing animation on focus
                    onBlur={() => {
                        if (!query) setIsTyping(true); // Resume if empty
                    }}
                />

                {/* Placeholder Animation Overlay */}
                {!query && isTyping && (
                    <div className={styles.placeholderOverlay}>
                        <TypingEffect
                            text={EXAMPLES[placeholderIndex]}
                            speed={50}
                            onComplete={handleTypingComplete}
                        />
                        <span className="cursor-blink" style={{ marginLeft: '2px', borderLeft: '2px solid var(--primary)', height: '1.2em' }}></span>
                    </div>
                )}

                {/* Static Placeholder when waiting between animations */}
                {!query && !isTyping && (
                    <div className={styles.placeholderOverlay}>
                        {EXAMPLES[placeholderIndex]}
                        <span className="cursor-blink" style={{ marginLeft: '2px', borderLeft: '2px solid var(--primary)', height: '1.2em' }}></span>
                    </div>
                )}

                {query && (
                    <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}>
                        <Send size={20} />
                    </button>
                )}
            </form>
        </div>
    );
};

export default SearchBar;
