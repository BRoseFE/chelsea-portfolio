import styles from "./AboutSection.module.css"
import Button from "shared/components/button/Button"
import chelsea from "assets/images/chelsea-placeholder.jpg"

function AboutSection({
        intro = "Hi, I'm Chelsea",
        description="I enjoy drawing.",
        img=chelsea,
        title 
    }) {
    return(
        <section className={styles.about}>
            <div className={styles.aboutInner}>
                <header className={styles.aboutHeader}>
                    <h2 className={styles.aboutHeaderTitle}>{title}</h2>
                </header>

                <div className={styles.aboutContent}>
                    <div className={styles.aboutImageContainer}>
                        <img
                            className={styles.aboutImage}
                            src={img}
                            alt="Chelsea Rose"
                            loading="lazy"
                        />
                    </div>

                    <div className={styles.aboutText}>
                        <h3 className={styles.aboutIntro}>{intro}</h3>
                        <p className={styles.aboutContentText}>{description}</p>

                        <div className={styles.aboutActions}>
                            <Button text="Contact Me" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;