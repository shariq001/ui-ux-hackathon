"use client"

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "@/types/product";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Props type for ProductPage
interface ProductPageProps {
  params: { slug: string };
}

// Fetch product data on the server
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      _type,
      price,
      image,
      description,
      features,
      dimensions {
        width,
        height,
        depth
      }
    }`,
    { slug }
  );
}

// Client Component for Amount Selection
function ProductAmountSelector() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <div className="py-[50px] pt-0 flex my:flex-row justify-between my:w-[602px] my:items-center sm:flex-col sm:items-start sm:gap-[20px] sm:w-[280px]">
      <div className="flex justify-center items-center">
        <h3 className="clash text-[#2a254b]">Amount:</h3>
        <div className="bg-[#f9f9f9] p-[15px] ml-[15px] flex justify-between w-[122px] rounded-sm">
          <button type="button" onClick={decrement} className="text-[#cac6da]">
            -
          </button>
          <p className="satoshi">{count}</p>
          <button type="button" onClick={increment} className="text-[#cac6da]">
            +
          </button>
        </div>
      </div>
      <Link href="/Cart">
        <button className="bg-[#2a254b] text-white satoshi w-[143px] py-[16px] px-[32px]">
          Add to cart
        </button>
      </Link>
    </div>
  );
}

// Main Component
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="my:min-w-[1440px] flex sm:justify-center my:flex-row w-full lg:items-center sm:flex-col sm:items-start lg:flex-row lg:justify-center lg:gap-[50px]">
      {/* Product Image */}
      <div>
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={500}
            height={500}
            className="sm:w-[full] sm:h-[380px] my:w-[full] my:h-[full] md:w-[full] md:h-[400px] lg:w-[500px] lg:h-[550px]"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="my:p-[100px] sm:px-[20px] sm:py-[50px] md:py-0">
        <h1 className="my:text-[36px] clash text-[#2a254b] sm:text-[24px]">
          {product.name}
        </h1>
        <h3 className="my:text-[24px] satoshi text-[#12131a] mb-[30px] sm:text-[20px]">
          &pound;{product.price}
        </h3>

        {/* Description and Features */}
        <div className="lg:w-[500px] flex flex-col gap-[20px] sm:w-[280px]">
          <h4 className="text-[16px] clash text-[#2a254b]">Description</h4>
          <p className="my:text-[16px] satoshi text-[#505977] sm:text-[14px]">
            {product.description}
          </p>
          <ul className="my:text-[16px] list-disc satoshi text-[#505977] ml-[30px] sm:text-[14px]">
            {product.features.map((feature: string, index: number) => (
              <li key={index} className="list-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Dimensions */}
        <div className="sm:my-[50px] md:mt-2 lg:mb-0">
          <h4 className="clash text-[16px] text-[#2a254b]">Dimensions</h4>
          <table className="p-[20px]">
            <thead>
              <tr className="clash text-[#2a254b] text-[14px]">
                <th className="p-[10px]">Height</th>
                <th className="p-[10px]">Width</th>
                <th className="p-[10px]">Depth</th>
              </tr>
            </thead>
            <tbody>
              <tr className="satoshi text-[#505977]">
                <td className="p-[10px]">{product.dimensions.width}</td>
                <td className="p-[10px]">{product.dimensions.height}</td>
                <td className="p-[10px]">{product.dimensions.depth}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Amount Selector */}
        <ProductAmountSelector />
      </div>
    </div>
  );
}
