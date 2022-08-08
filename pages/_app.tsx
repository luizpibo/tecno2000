import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../src/components/Organismos/NavBar";
import { useEffect } from "react";
import AOS from "aos";
// or only core styles
import "@splidejs/react-splide/css/core";
// Default theme
import "@splidejs/react-splide/css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);
  return (
    <div className="bg-gray-300">
      <Head>
        <title>TECNO2000 - Móveis de escritório | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="a melhor do brasil" />
      </Head>
      <NavBar />
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
      <footer className="h-12 bg-slate-900 text-white">
        <div className="container m-auto">direitos reservados</div>
      </footer>
    </div>
  );
}

export default MyApp;
