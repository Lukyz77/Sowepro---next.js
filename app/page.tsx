import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getPageData } from "../lib/GetPageData";


export const revalidate = 3600;


export default async function Home() {

  const data = await getPageData();
  return (
    <>
      <ToastContainer />
      <main className="overflow-hidden">
        <Navbar data={data.navbar} />
        <Hero data={data.hero}/>
        <About data={data.about}/>
        <Services data={data.services}/>
        <WhyUs data={data.whyus}/>
        <Portfolio data={data.portfolio}/>
        <Contact data={data.contact}/>
        <Footer data={data.footer} />
      </main>
    </>
  );
}
