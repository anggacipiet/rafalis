import Image from "next/image";
import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/component/card/3d-card";
import { Meta } from '@/component/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { useProducts } from '@/shared/ProductsContext';

const Products = () => {
  const { products, error } = useProducts();

  if (error) return <div>{error}</div>;

  return (
    <div className="py-12 bg-gray-900">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar/>
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All products ({products.length})</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <CardContainer key={index} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 text-white"
              >
                {product.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
              >
                {product.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={product.imgHref}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={product.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Spesifikasi →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  Konsultasi
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export { Products };