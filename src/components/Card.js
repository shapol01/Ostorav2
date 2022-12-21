import "./Card.css";
import CardData from "./CardData";
import CardImg from "../assets/1.jpg";

function Card() {
  return (
    <div className="card">
      <h1>Card title</h1>
      <p>paragraph</p>
      <div className="CardCard">
        <CardData image={CardImg} heading="random heading" text="random text" />
        <CardData image={CardImg} heading="random heading" text="random text" />
        <CardData image={CardImg} heading="random heading" text="random text" />
      </div>
    </div>
  );
}

export default Card;
