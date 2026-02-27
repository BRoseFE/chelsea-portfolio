import { artworks } from "data/artworks";
import { featuredIds } from "data/featured";
import styles from "./FeaturedWorks.module.css"
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function FeaturedWorks() {
    if (!artworks.length) {
        return <p>No artwork added yet</p>
    }

    const byId = new Map(artworks.map((art) => [art.id, art]));

    const featuredWorks = featuredIds
        .map((id) => byId.get(id))
        .filter(Boolean) //ignores bad/missing ids instead of crashing
        .slice(0, 6);

    if(!featuredWorks.length) {
        return <p>No featured artwork selected yet</p>
    }    

    return (
        <ul className={styles.FeaturedWorksGrid}>
            {featuredWorks.map(artwork => (
                <li key={artwork.id}>
                    <ArtworkCard {...artwork} variant="detailed"/>
                </li>
            ))}
        </ul>
    );
}

export default FeaturedWorks;