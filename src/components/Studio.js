import "./Studio.css";
import a from "../assets/header.jpg";
import b from "../assets/1.jpg";

function Studio() {
  return (
    <>
      <div className="card">
        <h1>What is Ostora Studio?</h1>
        <p>
          Ostora Studios is here to help Individuels & Project team in the art
          Conception/Upgrade , Social media designs as well and everything
          related with visual art .<br />
          Here is an Thread 🧵for our art conception :
        </p>
        <div className="CardCard ">
          <div className="t-card one">
            <div className="t-image">
              <img src={a} alt="image" />
            </div>
            <h4>1/ @OstoraDAO initial Art </h4>
            <p>
              That was the first sketch in our journey draw only on a phone
              device ;)
            </p>
          </div>
        </div>
        <div className="CardCard uno">
          <div className="t-card one">
            <div className="t-image alpha">
              <img src={b} alt="image" />
            </div>
            <h4>1/ @OstoraDAO initial Art </h4>
            <p>
              That was the first sketch in our journey draw only on a phone
              device ;)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
<></>;
export default Studio;
