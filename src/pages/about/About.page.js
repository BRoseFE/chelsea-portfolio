import AboutSection from "shared/components/about/AboutSection";
import styles from "./About.page.module.css"

function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            <h2 className={styles.aboutPageTitle}>About Chelsea</h2>
            <section className={styles.aboutSection}>
                <AboutSection 
                    intro="Welcome to my portfolio"
                    description="I started drawing back in my early youth, took a break and now I am back at it."
                />
            </section>
        </main>
    );
}

export default AboutPage;