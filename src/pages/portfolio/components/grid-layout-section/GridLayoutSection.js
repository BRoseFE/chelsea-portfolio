import styles from "./GridLayoutSection.module.css";
import { artworks } from "data/artworks";
import ArtworkCard from "shared/components/artwork-card/ArtworkCard";

function GridLayoutSection() {


    return(
        <main className={styles.gridLayout}>
            {artworks.map(artwork => ( 
                <ArtworkCard key={artwork.slug} artwork={artwork} />
            ))}
        </main>
    );
}

export default GridLayoutSection;