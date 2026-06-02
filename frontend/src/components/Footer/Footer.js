import "./Footer.css";

const Footer = () => {

  return <div className="footer">

    <a
    href="https://www.youtube.com/@Polyverge"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
  >
    <img
      src="https://cdn.simpleicons.org/youtube/white"
      alt="YouTube"
      className="social-icon"
    />
  </a>

  <a
    href="https://www.instagram.com/polyverge"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <img
      src="https://cdn.simpleicons.org/instagram/white"
      alt="Instagram"
      className="social-icon"
    />
  </a>

  {/* <a
    src="https://cdn.simpleicons.org/facebook/white"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
      alt="Facebook"
      className="social-icon"
    />
  </a> */}
  </div>;
}
export default Footer;
