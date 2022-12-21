import img1 from "../assets/1.jpg";
import "./intro.css";
import IntroData from "./IntroData";

const Intro = () => {
  return (
    <div className="intro">
      <h1>An introduction</h1>
      <p>
        Building one of the biggest gaming tournaments on web3, accommodating
        both web2 (traditional technology) as well as Web3 (Crypto & Blockchain
        Technology). We have already tested this thesis with a six team (NFT
        project) tournament that has been running for four weeks with a 500
        dollar prize pool which has already been a huge success.{" "}
      </p>

      <IntroData
        classname="first-des"
        heading="HOW WE MOVE FORWARD"
        text="We believe that tapping into the conventional gaming industry is pivotal in the showcase of potential that the NFT space has. This is why we are looking to hire well known streamers within the congenital gaming and streaming stages as well as curating teams from projects within the Solana, Ethereum, Cardano and Aptos ecosystems playing games that people already know and love."
        img1={img1}
        img2={img1}
      />
      <IntroData
        classname="first-des-rev"
        heading="HOW WE MOVE FORWARD"
        text="We believe that tapping into the conventional gaming industry is pivotal in the showcase of potential that the NFT space has. This is why we are looking to hire well known streamers within the congenital gaming and streaming stages as well as curating teams from projects within the Solana, Ethereum, Cardano and Aptos ecosystems playing games that people already know and love."
        img1={img1}
        img2={img1}
      />
    </div>
  );
};

export default Intro;
