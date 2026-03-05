import styles from "./About.module.css"
import Button from "shared/components/button/Button"
import chelsea from "assets/images/chelsea-placeholder.jpg"

function About() {
    return(
        <section className={styles.about} aria-labelledby="about-title">
            <div className={styles.aboutInner}>
                <header className={styles.aboutHeader}>
                    <h2 id="about-title" className={styles.aboutHeaderTitle}>About Me</h2>
                </header>

                <div className={styles.aboutContent}>
                    <div className={styles.aboutImageContainer}>
                        <img
                            className={styles.aboutImage}
                            src={chelsea}
                            alt="Chelsea Rose"
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.aboutText}>
                        <h3 className={styles.aboutIntro}>Hi, I'm Chelsea</h3>
                        <p className={styles.aboutContentText}>I enjoy drawing.</p>

                        <div className={styles.aboutActions}>
                            <Button text="Contact Me" disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;