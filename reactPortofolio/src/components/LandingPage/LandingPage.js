import React from "react";

import SocialItems from "../UI/SocialItems/SocialItems";

import styles from "./LandingPage.module.css";

import { Card, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  name: {
    fontWeight: "600",
    paddingBottom: "30px",
  },
  card: {
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    color: "#FFF",
    borderRadius: "30px",
    verticalAlign: "middle",
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    minWidth: "350px",
  }
});

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <div className={styles.LandingPage} id="home">
      <ThemeProvider theme={props.theme}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h1" align="center" className={classes.name}>
              {"I am Gheorghita,"}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              display="block"
              style={{fontSize: props.isMobile ? '16px' : '30px'}}
              className={classes.Description} >
              {"A junior software web developer, in the third year at Bachelor of Science in Computing and IT at CCT College Dublin"}
            </Typography>
          </CardContent>
          <SocialItems />
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default LandingPage;
