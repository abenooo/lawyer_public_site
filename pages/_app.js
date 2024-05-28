import "../styles/leaflet.css"
import "@/styles/globals.css";
import MyNavbar from "@/components/navbar";
import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import { IoLogoWhatsapp } from "react-icons/io5";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const phoneNumber = "+251944246334"; // Replace 'YourPhoneNumber' with your actual number
  const message = encodeURIComponent("Hello, Solomon Mulugeta Law Office. How can I help you?"); 
  return (
    <>
      <MyNavbar />
      {isHomePage && <Hero />}
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
            <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp className="h-20 w-20 bg-cyan-600 rounded-full shadow-lg hover:bg-green-700" />
            </a>
        </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
