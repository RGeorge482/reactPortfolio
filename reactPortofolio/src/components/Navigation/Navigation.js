import React from "react";

import classes from "./Navigation.module.css";

import NavItem from "../UI/NavItem/NavItem";

import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <BrowserRouter>
      <HashLink className={classes.NavLink} smooth to="#home">
        <NavItem text={"Home"} />
      </HashLink>
      <HashLink className={classes.NavLink} smooth to="#about">
        <NavItem text={"About"} />
      </HashLink>
      <HashLink className={classes.NavLink} smooth to="#resume">
        <NavItem text={"Resume"} />
      </HashLink>
    </BrowserRouter>
  );
}

export default Navigation;
