import "@/styles/theme.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function MyApp({
  Component,
  pageProps: pageProps,
}: AppProps) {
  console.log('ADADADADA')
  return (
    <div className={``}>
      <Component {...pageProps} />
    </div>
  );
}
