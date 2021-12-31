import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const [background, setBackground] = useState(null);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const bg = `url(img/fondo${getRandomInt(1, 12)}.jpg)`;
    setBackground(bg);
  }, []);

  return (
    <div id="content" style={{ backgroundImage: background ? background : "" }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster />
    </div>
  );
}

export default MyApp;
