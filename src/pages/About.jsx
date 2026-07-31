import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import AboutIntro from "../components/About/AboutIntro";
import StrategicFramework from "../components/About/StrategicFramework";
import CoreFunctions from "../components/About/CoreFunctions";
import OurTeam from "../components/About/OurTeam";

function About() {
  return (
    <>
      <Navbar />

      <main>

        <AboutIntro />

        <StrategicFramework />

        <CoreFunctions />

        <OurTeam />

      </main>

      <Footer />
    </>
  );
}

export default About;