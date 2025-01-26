import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";


type Product = {
    _id: string,
    name: string,
    slug: {
        _type: "slug"
        current: string
    },
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
        <div className='my:p-[100px] flex flex-col gap-[50px] sm:px-[20px] sm:py-[50px] md:px-[30px]'>
            <h1 className="text-[32px] clash text-[#2a254b]">API Fetched Products</h1>
            <div className="flex justify-between w-full text-[#2a254b] sm:flex-wrap sm:gap-[30px] items-center">
                {products.map((product) => (
                    <div key={product._id} className="flex flex-col gap-[5px] my:w-[305px] sm:w-[280px] lg:w-[200px]">
                        <Link href={`/product/${product.slug.current}`}>
                            <Image src={product.imageUrl} alt={product.name} width={400} height={400} className='sm:w-[250px] sm:h-[201px] my:w-[305px] my:h-[375px] lg:w-[200px]'/>
                            <h2 className="text-[20px] clash mt-[10px]">{product.name}</h2>
                            <p className="text-[14px]">{product.description} </p>
                            <h3 className="text-[18px] satoshi">${product.price}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            
        </div>
    ) 
}