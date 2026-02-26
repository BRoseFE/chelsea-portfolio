import styles from "./Hero.module.css"

function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.heroText}>
                    <h2>Title</h2>
                    <p>Hello, I'm Chelsea, this is my portfolio website where I post all of my drawings.</p>
                </div>
                <div className={styles.heroMedia}>
                    <img src="" alt="" />
                </div>
            </div>

        </section>
    );
}

export default Hero;