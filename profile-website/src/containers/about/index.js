import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import Photo from "../../images/Photo.png";
import { personalData } from "../../Data/personalData";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900x)",
            }}
            end={{ transform: "translateX(0x)" }}
          >
            <h3>Full Stack Developer</h3>
            <p>
              A highly motivated and detail-oriented Full Stack Developer with 3
              years of hands-on experience in developing and maintaining
              enterprise-level portals. Demonstrates strong problem-solving
              skills and a passion for coding, continuously seeking to enhance
              technical expertise and contribute to the success of the
              organization. Adept at working in Agile environments, I am
              committed to delivering high-quality software solutions while
              staying updated with the latest industry trends. Enthusiastic
              about tackling complex challenges and driving technological
              advancements within a forward-thinking organization.
            </p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500x)" }}
            end={{ transform: "translateX(0x)" }}
          >
            <div className="about__content__personalWrapper__personalInfo">
              <div className="about__content__personalWrapper__personalInfo__details">
                <h3 className="personalInformationHeader">
                  Presonal Information
                </h3>
                <ul>
                  {personalData.map((item, index) => (
                    <li key={index}>
                      <span className="title">{item.label}:</span>
                      <span className="value">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about__content__personalWrapper__personalInfo__logo">
                <img src={Photo} />
              </div>
            </div>
          </Animate>
        </div>
        <div
          className="about__content__serviceWrapper"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--yellow-theme-main-colour)" size={60} />
                {/* <p className="service-text">Web Design</p> */}
              </div>
              <div>
                <FaDev color="var(--yellow-theme-main-colour)" size={60} />
                {/* <p className="service-text">Web Development</p> */}
              </div>
              <div>
                <FaDatabase color="var(--yellow-theme-main-colour)" size={60} />
                {/* <p className="service-text">Databases</p> */}
              </div>
              <div>
                <DiAndroid color="var(--yellow-theme-main-colour)" size={60} />
                {/* <p className="service-text">Android Developement</p> */}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
