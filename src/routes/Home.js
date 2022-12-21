import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import HomeImg from "../assets/starter.PNG";
import Intro from "../components/Intro";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
function Home() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="WE ARE OSTORA"
        text="WE ARE UNIQUE"
        btnText="Home button"
        url="#"
        btnClass="hide"
      />
      <Intro />
      <Timeline />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
