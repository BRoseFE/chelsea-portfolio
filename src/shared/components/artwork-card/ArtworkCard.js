import styles from "./ArtworkCard.module.css"
import { Link } from "react-router-dom"

function ArtworkCard({
    title,
    year,
    medium,
    imgSrc,
    imgAlt = title,
    slug
}) {
    if (!title || !slug) return null;

    return(
        <article className={styles.ArtworkCard}>
            <Link to={`/artwork/${slug}`}>
                {imgSrc && <img src={imgSrc} alt={imgAlt} />}
                <header className={styles.ArtworkCardHeader}>
                    <h3 className={styles.ArtworkCardTitle}>{title}</h3>
                </header>
                 <div className={styles.ArtworkCardMeta}>
                    {year && <p>{year}</p>}
                    {medium && <p>{medium}</p>}
                </div>
            </Link>
        </article>
    );
}

export default ArtworkCard;