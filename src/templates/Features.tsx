'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradient } from '@/component/background/BackgroundGradient';
import { useProducts } from '@/shared/ProductsContext';

const Features = () => {
  const { products, error } = useProducts();

  if (error) return <div>{error}</div>;

  return (
    <div className="py-12 bg-black">
      <div className="text-center">
        <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">FEATURED PRODUCTS</p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {products.map((product) => (
            <div key={product.title} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    src={product.imgHref}
                    alt={product.title}
                    height={400}
                    width={400}
                    className="h-60 w-full object-cover rounded rounded-ss-lg"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 text-neutral-200">{product.title}</p>
                  <p className="text-sm text-neutral-600 text-neutral-400 flex-grow">{product.description}</p>
                  <Link href={product.href} className='mt-2'>
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Features };