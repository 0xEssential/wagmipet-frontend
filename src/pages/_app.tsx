import '@/styles/tailwind.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

const meta = {
  title: 'NFTPet Menagerie',
  description: 'Take care of all of your NFT Pets that live on the blockchain',
  url: 'https://ethpet.m1guelpf.me',
  image: '/images/card.jpg',
};

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.url + meta.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.url + meta.image} />
    </Head>
    <div className="flex flex-col items-center min-h-screen dark:bg-black">
      <div className="flex flex-1 items-center justify-center mt-4">
        <Component {...pageProps} />
      </div>
      <div className="my-4">
        <p className="text-xl dark:text-white">
          A{' '}
          <a
            className="underline"
            href="https://twitter.com/0xessential"
            target="_blank"
            rel="noreferrer"
          >
            0xEssential
          </a>{' '}
          joint • Inspired by{' '}
          <a
            className="underline"
            href="https://twitter.com/m1guelpf"
            target="_blank"
            rel="noreferrer"
          >
            Miguel Piedrafita
          </a>
        </p>
      </div>
    </div>
  </>
);

export default App;
