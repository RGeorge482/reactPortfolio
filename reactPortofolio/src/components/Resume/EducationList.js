import React from "react";
import { EDUCATION_DATA } from "./education-data.js";
import classes from "./EducationList.module.css";

const EducationList = () => {
  return (
    <main className={classes.projects}>
      {EDUCATION_DATA.map((item, index) => {
        return (
          <div key={index} className={classes.item}>
              <div className={classes.info}>
                <p className={classes.title}>{item.title}</p>
                <p className={classes.discription}>{item.disr}</p>
                <p className={classes.year}>{item.year}</p>
              </div>
          </div>
        );
      })}
    </main>
  );
};

export default EducationList;