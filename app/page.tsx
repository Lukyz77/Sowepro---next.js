import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
