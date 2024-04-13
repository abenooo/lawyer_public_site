import "@/styles/globals.css";
import MyNavbar from "@/components/navbar";
import Hero from "@/components/Hero";
export default function App({ Component, pageProps }) {
  return (
  <>
  <MyNavbar />
  <Component {...pageProps} />
  <Hero/>
  </>
  )
};
