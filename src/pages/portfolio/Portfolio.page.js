import styles from "./Portfolio.page.module.css"
import { artworks } from "data/artworks";
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function PortfolioPage() {
    return(
        <section className={styles.portfolioPage}>
            <header>
                <h1 className={styles.portfolioTitle}>Portfolio</h1>
            </header>

            <ul className={styles.portfolioGrid}>
                {artworks.map(artwork => (
                    <li key={artwork.slug} className={styles.portfolioPiece}>
                        <ArtworkCard artwork={artwork} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PortfolioPage;