// Need to change so when art is clicked, it opens the full-size art, not the thumbnail that's currently being rendered in the artworks data module

import styles from "./Artwork.page.module.css"
import { useParams } from "react-router-dom";
import { artworks } from "data/artworks";
import { getFullPath } from "utils/imagePaths";

function ArtworkPage() {
    const { slug } = useParams();
    const artwork = artworks.find(art => art.slug === slug)

    if (!artwork) {
        return <p>Artwork not found.</p>
    }

    return(
        <main className={styles.artworkPage}>
            <img
                src={getFullPath(artwork.slug)}
                alt={`${artwork.title} (${artwork.year})`}
                className={styles.artworkPageImage}
            />
            <h2>{artwork.title}</h2>
            <p>{artwork.year}</p>
            <p>{artwork.description}</p>
        </main>
    );
}

export default ArtworkPage;