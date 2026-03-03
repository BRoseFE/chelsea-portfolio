import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer id="footer" className={styles.footer} aria-label="Footer">
            <div classname={styles.footerInner}>
                <a 
                    className={styles.footerLink}
                    href="mailto:chelsea_brooks@outlook.com"
                    aria-label="Email Chelsea Rose"
                >
                    Email
                </a>
                <div className={styles.footerCopyrightContainer}>
                    <p className={styles.footerCopyright}>Drawings © Chelsea Rose.</p>
                    <p className={styles.footerCopyright}>© 2026 Branson Rose — Website design and development.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;