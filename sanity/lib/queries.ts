import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "product"]{
    _id,
    name,
    slug,
    description,
    price,
    quantity,
    features,
    tags,
    dimensions,
    "imageUrl": image.asset->url
    }
    `
)