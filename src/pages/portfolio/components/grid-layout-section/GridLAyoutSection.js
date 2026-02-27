import styles from "./GridLayoutSection.module.css";
import { getSortedArtworks } from "data/selectors/getSortedArtworks";
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function GridLayoutSection() {

    const sortedArtworks = getSortedArtworks();

    return(
        <main className={styles.gridLayout}>
            <ul className={styles.gridLayoutList}>
                {sortedArtworks.map(artwork => ( 
                        <li key={artwork.id}>
                            <ArtworkCard
                                {...artwork}
                                variant="thumbnail"
                            />
                        </li>
                    ))}
            </ul>
        </main>
    );
}

export default GridLayoutSection;