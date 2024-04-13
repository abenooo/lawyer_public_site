import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  <Hero/>
  </>
  )
};
