import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerCopyright}>
                    <p>
                        © {new Date().getFullYear()} Chelsea Rose - Drawings
                    </p>
                    <p>
                        © Branson Rose - Website design and development
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;