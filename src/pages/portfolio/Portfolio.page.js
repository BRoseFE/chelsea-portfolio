import styles from "./Portfolio.page.module.css"
import { artworks } from "data/artworks";
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function PortfolioPage() {
    return(
        <main className={styles.portfolioPage}>
            <h2 className={styles.portfolioTitle}>Portfolio</h2>
            <ul className={styles.portfolioGrid}>
                {artworks.map(artwork => ( 
                    <li key={artwork.slug} className={styles.portfolioPiece}>
                        <ArtworkCard artwork={artwork} />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default PortfolioPage;