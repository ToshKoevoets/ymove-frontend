import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import useSWR from 'swr';

export default function Document() {

  return (
      <Html lang="en">
        <Head />
        <body className="bg-secondary">        
          <Main />
          <NextScript />
        </body>
      </Html>
  );
}
