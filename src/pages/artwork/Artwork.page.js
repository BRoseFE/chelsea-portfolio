import styles from "./Artwork.page.module.css"
import { Link, useParams } from "react-router-dom";
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
            <div className={styles.artworkPageInner}>
                <Link to="/portfolio" className={styles.backLink}>
                    ← Back to gallery
                </Link>
                
                <section className={styles.artworkCard}>
                    <div className={styles.imageWrap}>
                        <img
                            src={getFullPath(artwork.slug)}
                            alt={`${artwork.title} (${artwork.year})`}
                            className={styles.artworkPageImage}
                        />
                    </div>

                    <p className={styles.artworkMetaSignature}>© Chelsea Rose</p>
                    <div className={styles.artworkMeta}>
                        <h2 className={styles.artworkMetaTitle}>{artwork.title}</h2>
                        <p className={styles.artworkMetaYear}>{artwork.year}</p>
                        <p className={styles.artworkMetaDescription}>{artwork.description}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ArtworkPage;