import React from "react";
import { CONFERENCE } from "./conference.js";
import styles from "./Conference.module.css";

const Conference = () => {
  return (
    <main className={styles.conferences}>
      {CONFERENCE.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <a
              className={styles.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles["conference-img"]}>
                <img src={item.imgUrl} alt={`Conference ${index + 1}`} />
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.discription}>{item.disr}</p>
              </div>
            </a>
          </div>
        );
      })}
    </main>
  );
};

export default Conference;