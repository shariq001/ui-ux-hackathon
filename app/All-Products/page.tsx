

type products = {
    _id: string,
    name: string,
    slug: any,
    description: string,
    price: number,
    quantity: number,
    features: string[],
    tags: string[],
    dimensions: { name: string; title: string },
    image: Image;
}

interface Image {
    url: string; // URL of the image
    altText?: string; // Optional alternative text for accessibility
    dimensions: { width: string; height: string }; // Object for dimensions
  }