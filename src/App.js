import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import HiremeBanner from "./components/HiremeBanner";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Stack />
      <Portfolio />
      <HiremeBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
