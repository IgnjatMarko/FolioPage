//import reactLogo from "./assets/react.svg";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Team } from "./components/Team";
//import viteLogo from "/vite.svg";

//import { Header } from "./components/Header";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Hero />
      <Features />
      <Contact />
      <Partners />
      <Team />
      <Footer />
    </>
  );
}

export default App;
