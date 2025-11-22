import styles from '@/styles/pages.module.css';

export default function Locations() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.heading} gradient-text`}>Our Locations</h1>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>San Francisco (Flagship)</h2>
                    <p>123 Tech Plaza, San Francisco, CA 94105</p>
                    <p>Open Mon-Sat: 5pm - 2am</p>
                </div>
                <div className={styles.section}>
                    <h2>Neo-Tokyo</h2>
                    <p>456 Cyber Lane, Shibuya, Tokyo</p>
                    <p>Open Daily: 6pm - 4am</p>
                </div>
            </div>
        </div>
    );
}
