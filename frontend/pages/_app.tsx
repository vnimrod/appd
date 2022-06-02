import Head from 'next/head';
import type { AppProps } from 'next/app';
import { store, StoreContext } from '../services/store';
import '../styles/globals.scss';
import { MainLayout } from '../components/main-layout/main-layout';
import { Header } from '../components/header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={store}>
      <Head>
        <title>appdome | assignment | by Nimrod Weinstein</title>
      </Head>
      <Header />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreContext.Provider>
  );
}

export default CustomApp;
