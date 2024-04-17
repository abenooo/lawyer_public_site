import "@/styles/globals.css";
import MyNavbar from "@/components/navbar";
import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import ContactUs from "@/components/ContactUs";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <MyNavbar />
      {isHomePage && <Hero />}
      <Component {...pageProps} />
      <ContactUs/>
    </>
  );
}
