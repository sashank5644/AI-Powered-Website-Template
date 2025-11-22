import styles from '@/styles/pages.module.css';

export default function Menu() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.heading} gradient-text`}>Molecular Menu</h1>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>Starters</h2>
                    <p><strong>Stardust Soup</strong> - $18<br />Glowing broth with edible gold stars.</p>
                    <p><strong>Anti-Gravity Salad</strong> - $22<br />Greens that float 2 inches off the plate.</p>
                </div>
                <div className={styles.section}>
                    <h2>Mains</h2>
                    <p><strong>Quantum Steak</strong> - $85<br />Sous-vide wagyu seared with a laser.</p>
                    <p><strong>Nebula Pasta</strong> - $34<br />Infused with bioluminescent algae (safe & delicious).</p>
                </div>
                <div className={styles.section}>
                    <h2>Desserts</h2>
                    <p><strong>Zero-G Mousse</strong> - $22<br />Chocolate mousse that literally floats.</p>
                </div>
            </div>
        </div>
    );
}
