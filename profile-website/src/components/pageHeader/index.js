import React from "react";
import "./styles.scss";

const PageHeaderContent = (props) => {
  return (
    <div className="wrapper">
      <h2>{props.headerText}</h2>
      <span>{props.icon}</span>
    </div>
  );
};

export default PageHeaderContent;
