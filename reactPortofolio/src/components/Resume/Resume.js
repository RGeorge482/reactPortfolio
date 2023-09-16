import React from "react";

import ProjectList from "./ProjectList";
import CertificationList from "./CertificationList";
import EducationList from "./EducationList";
import ConferenceList from "./ConferenceList";
import classes from "./Resume.module.css";


function Resume(props) {
  return (
    <div className={classes.Resume} id="resume">

      <div className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <div className={classes.ResumeWrapperTitle}>{"Education"}</div>
        <div className={classes.ResumeWrapperBody}>
          <EducationList />
        </div>
      </div>

      <div className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <div className={classes.ResumeWrapperTitle}>{"Work"}</div>
        <div className={classes.ResumeWrapperBody}>
          <ProjectList />
        </div>
      </div>

      <div className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <div className={classes.ResumeWrapperTitle}>{"Certifications"}</div>
        <div className={classes.ResumeWrapperBody}>
          <CertificationList />
        </div>
      </div>

      <div className={props.isMobile ? classes.ResumeWrapperMobile : classes.ResumeWrapperDesktop}>
        <div className={classes.ResumeWrapperTitle}>{"Conferences"}</div>
        <div className={classes.ResumeWrapperBody}>
          <ConferenceList />
        </div>
      </div>

    </div>
  );
}

export default Resume;
