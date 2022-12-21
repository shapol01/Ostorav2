import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/i.png";
import Footer from "../components/Footer";
import NamiWallet from "../components/NamiWallet";
function Service() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Set-up your wallet"
        btnClass="hide"
      />
      <NamiWallet/>
      <Footer />
    </>
  );
}

export default Service;
