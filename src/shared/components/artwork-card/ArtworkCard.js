import styles from "./ArtworkCard.module.css"
import { Link } from "react-router-dom"

function ArtworkCard({
    title,
    year,
    medium,
    imgSrc,
    imgAlt = "Artwork",
    slug,
    variant = "detailed" // "detailed" will be for Featured, "thumbnail" will be for PortfolioPage grid
}) {
    if (!slug || !imgSrc) return null;

    return(
        <article className={styles.ArtworkCard}>
            <Link to={`/artwork/${slug}`} className={styles.ArtworkCardLink}>
                <img src={imgSrc} alt={imgAlt} />

                {variant === "detailed" && (
                    <>
                        {title && (
                            <header className={styles.ArtworkCardHeader}>
                                <h3 className={styles.ArtworkCardTitle}>{title}</h3>
                            </header>
                        )}

                        <div className={styles.ArtworkCardMeta}>
                            {year && <p>{year}</p>}
                            {medium && <p>{medium}</p>}
                        </div>
                    </>
                )}
            </Link>
        </article>
    );
}

export default ArtworkCard; 