import { Carousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/navbar";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Section1 />
      <Section2 />
      <Section3 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
