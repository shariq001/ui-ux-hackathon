import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";


type Product = {
    _id: string,
    name: string,
    slug: string,
    description: string,
    price: number,
    quantity: number,
    features: string[],
    tags: string[],
    dimensions: { name: string; title: string },
    imageUrl: string;
}

export default async function Home() {
    const products: Product[] = await sanityFetch({query: allproducts});

    return (
        <div>
            <h1 className="font-bold text-center">Products</h1>
            <div className="grid grid-cols-3 flex-wrap gap-[20px]">
                {products.map((product) => (
                    <div key={product._id} className="bg-[#bbb] text-black p-[20px] rouned-[10px] shadow-md shadow-black flex flex-col gap-[10px] items-center">
                        <Image src={product.imageUrl} alt={product.name} width={400} height={400} />
                        <h2 className="font-bold text-center">{product.name}</h2>
                        <p className="text-center">{product.description} </p>
                        <h3 className="text-center font-bold">${product.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    ) 
}