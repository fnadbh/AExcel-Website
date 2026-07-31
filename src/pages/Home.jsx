import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedInsight from "../components/FeaturedInsight/FeaturedInsight";
import LatestSection from "../components/LatestSection/LatestSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedInsight />
      <LatestSection />
      <Footer />
    </>
  );
}

export default Home;