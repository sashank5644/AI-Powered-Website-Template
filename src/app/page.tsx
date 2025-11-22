"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import SearchBar from '@/components/SearchBar';
import '@/styles/animations.css';

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setResponse("Sorry, I encountered an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={`${styles.title} gradient-text`}>
          Ask Anything about <br /> Nebula Dining
        </h1>
        <p className={styles.subtitle}>
          Experience the future of dining. Our AI concierge is here to help you with menus, reservations, and more.
        </p>

        <SearchBar onSearch={handleSearch} isSearching={loading} />

        {loading && (
          <div className={styles.chatResponse}>
            <p className="animate-pulse">Thinking...</p>
          </div>
        )}

        {response && (
          <div className={styles.chatResponse}>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
