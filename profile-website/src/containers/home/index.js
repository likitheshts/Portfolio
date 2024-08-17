import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles.scss";
import Likithesh_Resume from "../../resumeSample/Likithesh_TS.pdf";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Likithesh <br />
          Full Stack Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-me">
            <div className="contact-me__buttons-wrapper">
              <button onClick={() => navigate("/contact")}>Let's Talk</button>
              <a href={Likithesh_Resume} download="Likithesh_Resume.pdf">
                Download Resume
              </a>
            </div>
            <div className="contact-me__socials-wrapper">
              <a href="https://www.linkedin.com/in/likithesh-ts-1430401b3/">
                <FaLinkedin size={32} />
              </a>
              <a href="https://github.com/likitheshts">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
