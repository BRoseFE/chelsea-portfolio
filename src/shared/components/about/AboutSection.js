import styles from "./AboutSection.module.css"
import Button from "shared/components/button/Button"
import chelsea from "assets/images/chelsea.webp"

function AboutSection({
    intro = "Hi, I'm Chelsea",
    description="I enjoy drawing.",
    img=chelsea,
    title
}) {

    const titleId = title ? "about-section-title" : undefined;

    return(
        <section
            className={styles.about}
            aria-labelledby={titleId}
        >
            <div className={styles.aboutInner}>

                {title && (
                    <header className={styles.aboutHeader}>
                        <h2 id={titleId} className={styles.aboutHeaderTitle}>
                            {title}
                        </h2>
                    </header>
                )}

                <div className={styles.aboutContent}>
                    <figure className={styles.aboutImageContainer}>
                        <img
                            className={styles.aboutImage}
                            src={img}
                            alt="Chelsea Rose"
                            loading="lazy"
                        />
                    </figure>

                    <div className={styles.aboutText}>
                        <p className={styles.aboutIntro}>{intro}</p>
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