import AboutSection from "shared/components/about/AboutSection";
import styles from "./About.page.module.css"

function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <header>
                <h1 className={styles.aboutPageTitle}>About Chelsea</h1>
            </header>

            <section className={styles.aboutSection}>
                <AboutSection
                    intro="Welcome to my portfolio"
                    description="I started drawing back in my early youth, took a break and now I am back at it."
                />
            </section>
        </div>
    );
}

export default AboutPage;