import React, { useState } from "react";
import { AiFillProject } from "react-icons/ai";
import PageHeaderContent from "../../components/pageHeader";
import { FilterData } from "./FilterData";
import { ProfileData } from "./ProfileData";
import "./styles.scss";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedPortFolioData =
    filterValue === 1
      ? ProfileData
      : ProfileData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {FilterData.map((option) => (
            <li
              className={option.id === filterValue && "active"}
              onClick={() => setFiltervalue(option.id)}
              key={option.id}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
              key={index}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.projectLink}>
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
