import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/navbar/Hero";
export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  <Hero/>
  </>
  )
};
