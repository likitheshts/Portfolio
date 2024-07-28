import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeader";
import { skillsData } from "../../Data/skillsData";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item) => (
          <div
            className="skills__content-wrapper__inner-content"
            key={item.label}
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skill) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={skill.skillName}>
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-colour)"
                        strokeLinecap="square"
                        trailWidth="2"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
