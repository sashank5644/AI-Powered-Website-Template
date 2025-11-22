import styles from '@/styles/pages.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.heading} gradient-text`}>About Nebula Dining</h1>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2042, Nebula Dining was born from a desire to merge culinary arts with quantum physics.
                        Our chefs are not just cooks; they are scientists of flavor, crafting dishes that defy gravity and expectation.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>The Experience</h2>
                    <p>
                        Dining with us is an immersive journey. From the moment you step through our photon-gates,
                        you are transported to a world where light and taste converge.
                    </p>
                </div>
            </div>
        </div>
    );
}
