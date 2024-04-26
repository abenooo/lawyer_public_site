import "../styles/leaflet.css";
import "@/styles/globals.css";
import MyNavbar from "@/components/navbar";
import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <MyNavbar />
      {isHomePage && <Hero />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
