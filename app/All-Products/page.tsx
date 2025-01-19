"use client"

import React, {useEffect, useState} from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";


const sanity = sanityClient({
    projectId: "4o2tsd03",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: true,
});

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    productImage: {
        assest: {
            _ref: string;
        }
    }
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
                *[type == product] {
                _id,
                title,
                price,
                description,
                discountPercentage,
                "iamgeUrl": productImage.assest->url,
                tags
                }
            `;

            const data = await sanity.fetch(query);
            setProducts(data);

        } catch (error) {
            console.error("Error Displaying Products:", error)
        }
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`);
    };

    const truncateDescription = (description: string | null | undefined) => {
        if (!description) return ""; // Return an empty string if description is null or undefined
        return description.length > 100
          ? description.substring(0, 100) + "..."
          : description;
      };

    useEffect(() => {
        fetchProducts();
    }, []);

    

    return (
        <div className="p-[50px]">
            <h1 className="text-center mx-[15px] ">Products From API&apos;s Data</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                {products.map((product) => (
                    <div key={product._id} className="bg-[#bbb] p-[10px] border-[2px] border-[#fff] rounded-[10px]">
                      <Image src={product.imageUrl} alt={product.title} width={300} height={300} className="w-full object-cover" />  
                      <div className="mt-[10px]">
                        <h2 className="font-semibold">{product.title}</h2>
                        <p className="text-slate-800">{truncateDescription(product.description)}</p>
                        <div className="flex justify-between items-center mt-[10px]">
                            <div>
                                <p className="text-slate-800 font-bold">{product.price}</p>
                                {product.discountPercentage > 0 && (
                                    <p className="text-green-600">{product.discountPercentage}% OFF</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-[15px] flex flex-wrap gap-[5px] items-center">
                            {product.tags && product.tags.length > 0 ? (
                                product.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-[12px] bg-slate-300 font-medium text-black rounded-[5px] px-[10px] py-[5px]"
                                >
                                    {tag}
                                </span>
                                ))
                            ) : (
                                <span className="text-[12px] text-gray-500">No tags available</span>
                            )}
                        </div>

                        {/* Cart Functionality */}

                        <button className="mt-[15px] w-full bg-red-600 text-white py-[8px] px-[12px] rounded-[5px] hover:bg-red-900 duration-500 hover:duration-500" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                      </div>
                    </div>
                ))}
            </div>

                {/* Cart Summary */}
                <div className="mt-[20px] bg-gray-400 p-[20px] rounded-[10px] ">
                    <h2 className="font-bold">Cart Items</h2>
                    {cart.length > 0 ? (
                        <ul className="space-y-4">
                            {cart.map((item, index) => (
                                <li key={index} className="flex justify-between items-center bg-white p-[15px] rounded-[10px]">
                                    <div>
                                        <p className="font-medium">{item.title}</p>
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>

                                    <Image src={item.imageUrl} width={50} height={50} alt={item.title} />
                                </li>
                            ))}
                        </ul>
                    ): (
                        <p>Your Cart is Empty Please Add some Products</p>
                    )}
                </div>
            
        </div>
    )
}

export default ProductCards;