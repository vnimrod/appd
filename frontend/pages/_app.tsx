import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { MainLayout } from '../components/main-layout/main-layout';
import { Header } from '../components/header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>appdome | assignment | by Nimrod Weinstein</title>
      </Head>
      <Header />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default CustomApp;
