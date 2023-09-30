import "../styles/HowItWorks.css";
import image from "../assets/Vector.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="cc-container">
        <h2>How it works</h2>
        <div className="content">
          <div className="component">
            <div className="number">
              <img src={icon1} alt="" />
            </div>
            <h3>Record Screen</h3>
            <p>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={image} alt="" />
          </div>
          <div className="component">
            <div className="number">
              <img src={icon2} alt="" />
            </div>
            <h3>Share Your Recording</h3>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={image} alt="" />
          </div>
          <div className="component">
            <div className="number">
              <img src={icon3} alt="" />
            </div>
            <h3>Learn Effortlessly</h3>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
