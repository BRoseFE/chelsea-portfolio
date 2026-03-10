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
        <article className={styles.artworkPage}>
            <div className={styles.artworkPageInner}>

                <nav className={styles.artworkPageNav}>
                    <Link to="/" className={styles.artworkPageNavLink}>
                        ← Home
                    </Link>

                    <Link to="/portfolio" className={styles.artworkPageNavLink}>
                        ← Back to portfolio
                    </Link>
                </nav>

                <figure className={styles.artworkCard}>
                    <div className={styles.imageWrap}>
                        <img
                            src={getFullPath(artwork.slug)}
                            alt={`${artwork.title} (${artwork.year})`}
                            className={styles.artworkPageImage}
                        />
                    </div>
                    <figcaption className={styles.artworkMetaSignature}>
                        © Chelsea Rose
                    </figcaption>

                    <section className={styles.artworkMeta}>
                        <h2 className={styles.artworkMetaTitle}>{artwork.title}</h2>
                        <p className={styles.artworkMetaYear}>{artwork.year}</p>
                        <p className={styles.artworkMetaDescription}>{artwork.description}</p>
                    </section>
                </figure>
            </div>
        </article>
    );
}

export default ArtworkPage;