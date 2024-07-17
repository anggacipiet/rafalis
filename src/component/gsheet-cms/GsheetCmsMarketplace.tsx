import React, { useEffect, useState } from 'react';
import { StoreProps } from '@/shared/props';

const GSheetCmsMarketplace: React.FC<StoreProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <div key={Math.random()} className="container mx-auto py-5 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
            {products.map(({ title, description, price, href, imgHref }) => (
              <div
                className="border border-gray-200 rounded overflow-hidden shadow-sm"
                key={title}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={imgHref}
                    alt={title}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p
                    className="text-gray-700 mb-2"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                  <span
                    className="text-gray-800 font-bold"
                    dangerouslySetInnerHTML={{ __html: price }}
                  ></span>
                  <button
                    className="bg-primary-600 hover:bg-primary-500 text-white mt-2 py-2 px-4 rounded"
                    onClick={() => window.open(href, '_blank')}
                  >
                    Konsultasi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { GSheetCmsMarketplace };