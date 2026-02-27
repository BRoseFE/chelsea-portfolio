/* 
import nameOfDrawing from "/assets/images/name-of-drawing.jpg"
{
id: "unique string",
title: "string",
year: number,
medium: "string",
imgSrc: "artwork/name-of-image.jpg",
imgAlt: "string" (or leave blank will default to title),
tags: ["descriptive-string", "descriptive-string"],    // This is for later data manipulation like grouping similar types
slug: "name-of-image", (ex: girl-drawing)
},

*/

export const artworks = [
    {
        id: "blankets",
        title: "Blankets",
        year: 2026,
        medium: "Stock Image",
        imgSrc: "/artwork/blankets.jpg",
        imgAlt: "Blankets stacked in an artistic way",
        tags: ["blankets", "stock-image"],
        slug: "blankets",
    },

    {
        id: "lake",
        title: "Lake",
        year: 2026,
        medium: "Stock Image",
        imgSrc: "/artwork/lake.jpg",
        imgAlt: "House on a lake",
        tags: ["lake", "stock-img"],
        slug: "lake",
    },

    {
        id: "sunflower",
        title: "sunflower",
        year: 2026,
        medium: "Stock Image",
        imgSrc: "/artwork/sunflowers.jpg",
        imgAlt: "Sunflowers in a field",
        tags: ["sunflowers", "stock-image"],
        slug: "sunflower",
    },
]

