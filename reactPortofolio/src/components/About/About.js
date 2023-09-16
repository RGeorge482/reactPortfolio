import React from "react";

import AboutMeTitleDescription from "../UI/AboutMeTitleDescription/AboutMeTitleDescription";
import PortfolioImage from "../UI/PortfolioImage/PortfolioImage";

import classes from "./About.module.css";

function About(props) {
  return (
    <div className={props.mobileView ? classes.AboutMobileView : classes.AboutDesktopView} id="about">
      <div className={classes.AboutPortfolio}>
        <PortfolioImage />
      </div>
      <div className={classes.AboutTitleDescription}>
        <AboutMeTitleDescription
          title="About Me"
          isMobile={props.mobileView}
        />
        <AboutMeTitleDescription
          title="Contact Details"
          isMobile={props.mobileView}
        />
      </div>
    </div>
  );
}

export default About;
