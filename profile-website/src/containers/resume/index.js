import React from "react";
import { MdWork } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./styles.scss";
import "react-vertical-timeline-component/style.min.css";
import { Resumedata } from "../../Data/resumeData";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="Resume" icon={<MdWork size={40} />} />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="">
            {Resumedata.experience.map((item) => (
              <VerticalTimelineElement
                visible={true}
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-colour)",
                  border: "1.5px solid var(--yellow-theme-main-colour)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.date}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-colour)",
                }}
                icon={<MdWork />}
                dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="">
            {Resumedata.education.map((item) => (
              <VerticalTimelineElement
                visible={true}
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-colour)",
                  border: "1.5px solid var(--yellow-theme-main-colour)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={item.date}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-colour)",
                }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
