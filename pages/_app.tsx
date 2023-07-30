import { BuilderProvider } from '@/components/BuilderContext';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <BuilderProvider>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </BuilderProvider>
   );
}
