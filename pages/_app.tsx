import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tecno2000</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="a melhor do brasil" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
