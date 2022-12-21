import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Ostora</h1>
          <p>We're unique</p>
        </div>
        <div>
          <a href="https://discord.com/invite/PNqqzgHwtp" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://magiceden.io/marketplace/ostora_dao" target="_blank">
            <i className="fa-brands fa-artstation"></i>
          </a>
          <a href="https://twitter.com/OstoraStudios" target="_blank">
            <i className="fa-solid fa-paintbrush"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">p1</a>
          <a href="/">p2</a>
          <a href="/">p3</a>
          <a href="/">p4</a>
        </div>
        <div>
          <h4>community</h4>
          <a href="/">p1</a>
          <a href="/">p2</a>
          <a href="/">p3</a>
          <a href="/">p4</a>
        </div>
        <div>
          <h4>help</h4>
          <a href="/">p1</a>
          <a href="/">p2</a>
          <a href="/">p3</a>
          <a href="/">p4</a>
        </div>
        <div>
          <h4>other</h4>
          <a href="/">p1</a>
          <a href="/">p2</a>
          <a href="/">p3</a>
          <a href="/">p4</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
