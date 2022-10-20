import React from "react";

import Button from "../Button";
import TaskFilter from "../TaskFilter";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>1 items left</span>
      <TaskFilter />
      <Button title="Clear completed" type="clear completed" />
    </footer>
  );
};

export default Footer;
