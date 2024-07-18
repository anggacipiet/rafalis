import { AppProps } from 'next/app';
import { ProductsProvider } from '@/shared/ProductsContext';

import '@/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ProductsProvider>
    <Component {...pageProps} />
  </ProductsProvider>
);

export default MyApp;