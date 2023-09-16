import React from "react";

import styles from "./SideDrawer.module.css";

import Navigation from "../../Navigation/Navigation";

const SideDrawer = (props) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  } else {
    //
  }
  return (
    <div>
      <div className={attachedStyles.join(" ")} onClick={props.closed}>
        <nav className={styles.MobileNavBar}>
          <Navigation />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
