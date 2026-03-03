import { artworks } from "data/artworks";
import styles from "./FeaturedWorks.module.css"
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function FeaturedWorks() {
    if (!artworks.length) {
        return <p>No artwork added yet</p>
    }

    const featuredWorks = artworks
        .filter((a) => typeof a.featuredRank === "number")
        .sort((a, b) => a.featuredRank - b.featuredRank)
        .filter(Boolean) //ignores bad/missing ids instead of crashing
        .slice(0, 6);

    if(!featuredWorks.length) {
        return <p>No featured artwork selected yet</p>
    }    

    return (
        <section className={styles.featuredWorks}>
            {featuredWorks.map((artwork) => (
                <ArtworkCard key={artwork.slug} artwork={artwork} />
            ))}
        </section>
    );
}

export default FeaturedWorks;