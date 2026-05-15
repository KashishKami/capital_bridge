import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import PhotoGallery from "./pages/PhotoGallery";
import ServicePage from "./pages/ServicePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Footer from "./components/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = ({ lenis }: { lenis: Lenis | null }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};

function App() {
  const [showHero, setShowHero] = useState(false);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    setLenisInstance(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handlePreLoaderComplete = () => {
    setShowHero(true);
  };

  return (
    <Router>
      <div className="app-container">
        <ScrollToTop lenis={lenisInstance} />
        <Navbar />

        {!showHero && <PreLoader onComplete={handlePreLoaderComplete} />}

        {showHero && (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/our-team" element={<Team />} />
              <Route path="/gallery" element={<PhotoGallery />} />

              {/* Dynamic Service/Solution Routes */}
              <Route
                path="/solutions/:id"
                element={<ServicePage type="solutions" />}
              />
              <Route
                path="/services/:id"
                element={<ServicePage type="industries" />}
              />

              {/* Legal Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
