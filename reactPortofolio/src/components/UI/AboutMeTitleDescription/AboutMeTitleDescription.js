import React from "react";

import classes from "./AboutMeTitleDescription.module.css";

function AboutMeTitleDescription(props) {
  let CSSClasses = [];
  CSSClasses.push(props.isMobile ? "isMobile" : null);
  return (
    <div className={classes.AboutMeTitleDescription}>
      <div className={classes.AboutTitle}>{props.title}</div>
      <div className={classes.AboutBody}>
        {props.title === "About Me" ? (
          <React.Fragment>
            <div>Open-mind about programming languages, I enjoy exploring new technologies and getting challenged. </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {}
            <div>Name</div>
            <div>Address</div>
            <div>Phone Number: </div>
            <div>Email:</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default AboutMeTitleDescription;
