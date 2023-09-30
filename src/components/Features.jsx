import "../styles/Features.css";
import picture1 from "../assets/Icon placeholder (1).svg";
import picture2 from "../assets/Icon placeholder (2).svg";
import picture3 from "../assets/Icon placeholder (3).svg";
import videoImg from "../assets/Video Repository.svg";

const Features = () => {
  return (
    <div className="features">
      <div className="cc-container">
        <div className="features-heading">
          <h2>Features</h2>
          <p>Key Highlights of Our Extension</p>
        </div>
        <div className="features-content">
          <div className="media-objects">
            <div className="media-object one">
              <img src={picture1} alt="" />
              <div>
                <h3>Simple Screen Recording</h3>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="media-object two">
              <img src={picture2} alt="" />
              <div>
                <h3>Easy-to-Share URL</h3>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="media-object">
              <img src={picture3} alt="" />
              <div>
                <h3>Revisit Recordings</h3>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <img src={videoImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
