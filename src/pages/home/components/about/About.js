import styles from "./About.module.css"
import Button from "shared/components/button/Button"

function About() {
    return(
        <section className={styles.about}>
            <div className={styles.aboutInner}>
                <header className={styles.aboutHeader}>
                    <h2 className={styles.aboutHeaderTitle}>Chelsea Rose</h2>
                </header>
                <div className={styles.aboutContent}>
                    <img src="" alt="Chelsea Rose"/>
                    <p className={styles.aboutContentText}></p>
                    <Button
                        text="Contact Me"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;