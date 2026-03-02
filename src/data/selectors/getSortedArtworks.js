import { artworks } from "data/artworks";

export function getSortedArtworks() {
    return [...artworks].sort((a, b) => {
        const yearA = a.year ?? 0;
        const yearB = b.year ?? 0;

        if (yearB !== yearA) return yearB - yearA;
        return (a.title ?? "").localeCompare(b.title ?? "");
    });
} 



