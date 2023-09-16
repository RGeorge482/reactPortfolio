import React from "react";
import { CERTIFICATION } from "./certification.js";
import styles from "./Certification.module.css";

const Certification = () => {
  return (
    <main className={styles.certificates}>
      {CERTIFICATION.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <a
              className={styles.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles["certificate-img"]}>
                <img src={item.imgUrl} alt={`Certificate ${index + 1}`} />
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

export default Certification;