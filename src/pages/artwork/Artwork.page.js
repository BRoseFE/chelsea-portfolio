import styles from "./Artwork.page.module.css"
import { useParams } from "react-router-dom";
import { artworks } from "data/artworks";

function ArtworkPage() {
    const { slug } = useParams();

    const artwork = artworks.find(art => art.slug === slug)

    if (!artwork) {
        return <p>Artwork not found.</p>
    }

    return(
        <main className={styles.ArtworkPage}>
            <h2>{artwork.title}</h2>
            <img src={artwork.imgSrc} alt={artwork.imgAlt} />
            <p>{artwork.year}</p>
            <p>{artwork.medium}</p>
        </main>
    );
}

export default ArtworkPage;