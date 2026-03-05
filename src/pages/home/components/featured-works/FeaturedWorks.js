import { artworks } from "data/artworks";
import styles from "./FeaturedWorks.module.css"
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function FeaturedWorks() {

    const featuredWorks = artworks
        .filter((a) => a?.slug && typeof a.featuredRank === "number")
        .sort((a, b) => a.featuredRank - b.featuredRank)
        .slice(0, 6);

    if(!featuredWorks.length) {
        return <p>No featured artwork selected yet</p>
    }

    return (
        <section className={styles.featuredWorks} aria-labelledby="featured-works-title">
            <h2 id="featured-works-title" className={styles.featuredTitle}>Featured Works</h2>
            <div className={styles.featuredGrid}>
                {featuredWorks.map((artwork) => (
                <ArtworkCard key={artwork.slug} artwork={artwork} />
            ))}
            </div>
        </section>
    );
}

export default FeaturedWorks;