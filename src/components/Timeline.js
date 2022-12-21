import "./Timeline.css";

function Timeline() {
  return (
    <>
      <div className="title">
        <h1>OstoraMap</h1>
        Pre-Mint
      </div>

      <div className="timeline">
        <div className="container left-container">
          <div className="text-box">
            <p>Create our tokenomics for GADA $</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <p>Launch staking for GADA</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="text-box">
            <p>Drop GADA on exchange</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <p>
              Start the OSTORA LEAGUE preparation with the annoucement of the
              streamers that will broadcast the games.
              <br />
              Announcing the 16 starting teams & sponsors
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
          <div className="text-box">
            <p>Start of the Ostora league & competion</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <p>Annouce the GADA plateform for the REV share</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
          <div className="text-box">
            <p>
              In addition to the sub brands(Ostora Studio/League) whitepaper &
              the visual roadmap
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <p>
              The Ostora league plateform to support Cardano and Solana wallet
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
