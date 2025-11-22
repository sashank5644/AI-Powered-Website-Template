import styles from '@/styles/pages.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.heading} gradient-text`}>Contact Us</h1>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>Get in Touch</h2>
                    <p>
                        Have a question or want to book a private event?
                        Ask our AI concierge on the home page or reach out directly.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2>Direct Line</h2>
                    <p>Phone: (555) 019-2834</p>
                    <p>Email: reservations@nebuladining.com</p>
                </div>
            </div>
        </div>
    );
}
