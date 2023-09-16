import React from "react";

import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn, Facebook, Instagram} from "@material-ui/icons";

import styles from "./SocialItems.module.css";

function SocialItems() {
  return (
    <div className={styles.SocialItems}>
      <IconButton
        color="primary"
        aria-label="Github Link"
        href={"https://github.com/"}
      >
        <GitHub fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="LinkedIn Link"
        href={"https://www.linkedin.com/"}
      >
        <LinkedIn fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Facebook Link"
        href={"https://www.facebook.com"}
      >
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Instagram Link"
      >
        <Instagram fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SocialItems;
