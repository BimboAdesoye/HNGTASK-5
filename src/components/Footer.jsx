import "../styles/Footer.css";
import accentLogo from "../assets/Frame 1000002536.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cc-container">
        <img src={accentLogo} alt="" />
        <div className="footer-list">
          <ul>
            <li>Menu</li>
            <li>Home</li>
            <li>Converter</li>
            <li>How it Works</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Screen Record</li>
            <li>Browser Window</li>
            <li>Desktop</li>
            <li>Application</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
