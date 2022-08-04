import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";
import { NavBar } from "../src/components/Moleculas/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>TECNO2000 - Móveis de escritório | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="a melhor do brasil" />
      </Head>
      <NavBar />
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
      <footer className="h-40 bg-zinc-900 text-white">
        <div className="container m-auto">direitos reservados</div>
      </footer>
    </div>
  );
}

export default MyApp;
