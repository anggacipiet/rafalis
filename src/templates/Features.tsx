'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradient } from '@/component/background/BackgroundGradient';
import { Product } from '@/shared/products';

const Features = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <div className="text-center">
        <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">PRODUCT</p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {products.map((product) => (
            <div key={product.title} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    src={product.imgHref}
                    alt={product.title}
                    height={400}
                    width={400}
                    className="h-60 w-full object-cover rounded rounded-ss-lg"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{product.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{product.description}</p>
                  <Link href={product.href} className='mt-2'>
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/products"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Products
        </Link>
      </div>
    </div>
  );
}

export { Features };