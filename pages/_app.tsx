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
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
        className="bg-gradient-to-b from-gray-200 to-gray-300"
      >
        <Head>
          <title>TECNO2000 - Móveis de escritório | Home</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="a melhor do brasil" />
        </Head>
        <NavBar />
        <div className="min-h-screen overflow-hidden">
          <Component {...pageProps} />
        </div>
        <footer className="h-12 grid items-center justify-center bg-slate-900 text-white">
          <div className="container m-auto">Todos direitos reservados | TECNO2000</div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
