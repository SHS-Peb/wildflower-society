import bgLeft from "./assets/bg-left.png";
import bgRight from "./assets/bg-right.png";
import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-#e2d2d2;">
      <Navbar />

      {/* Left background image */}
      <img
        src={bgLeft}
        alt=""
        className="pointer-events-none fixed left-0 top-0 h-full w-auto object-contain z-0"
      />

      {/* Right background image */}
      <img
        src={bgRight}
        alt=""
        className="pointer-events-none fixed right-0 top-0 h-full w-auto object-contain z-0"
      />

      <StarField count={20} />

      {/* Page content */}
      <main className="relative z-10 pt-5">
       <section id="home" className="min-h-[30vh] flex items-start justify-center pt-28">
      <h1 className="wildflower-title text-center">
        The Wildflower Society
      </h1>
    </section>
    <About />
    <Events />
    <Contact />
      </main>
<Footer />
    </div>
  );
}

