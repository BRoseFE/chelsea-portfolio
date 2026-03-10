import styles from "./ArtworkCard.module.css"
import { Link } from "react-router-dom"
import { getThumbPath } from "utils/imagePaths";

function ArtworkCard({ artwork }) {
    const { slug, title, year } = artwork;

    if (!slug || !title) return null;

    return(
        <article className={styles.artworkCard}>
            <Link to={`/artwork/${slug}`} className={styles.artworkCardLink}>
                <img
                    src={getThumbPath(slug)}
                    alt={`${title} (${year})`}
                    loading="lazy"
                    decoding="async"
                    className={styles.artworkCardImage}
                />
            </Link>
        </article>
    );
}

export default ArtworkCard;