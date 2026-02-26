import { artworks } from "data/artworks";
import styles from "./FeaturedWorks.module.css"
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function FeaturedWorks() {
    if (!artworks.length) {
        return <p>No artwork added yet</p>
    }

    return (
        <ul className={styles.FeaturedWorksGrid}>
            {artworks.map(artwork => (
                <li key={artwork.slug}>
                    <ArtworkCard {...artwork} />
                </li>
            ))}
        </ul>
    );
}

export default FeaturedWorks;