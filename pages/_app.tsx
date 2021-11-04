import 'sanitize.css';
import type { AppProps } from 'next/app';
import Header from 'components/header';
import React from 'react';
import Footer from 'components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
