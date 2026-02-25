import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer id="footer" className={styles.footer} aria-label="Footer">
            <div classname={styles.footerInner}>
                <a
                    class={styles.footerLink}
                    href="https://www.instagram.com/chc_rose/"
                    aria-label="Chelsea Rose on Instagram"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Instagram
                </a>
                <a 
                    className={styles.footerLink}
                    href="mailto:chelsea_brooks@outlook.com"
                    aria-label="Email Chelsea Rose"
                >
                    Email
                </a>
                <p className={styles.footerCopyright}>© 2026 Branson Rose — Website design and development.</p>
                <p className={styles.footerCopyright}>Drawings © Chelsea Rose.</p>
            </div>
        </footer>
    );
}

export default Footer;