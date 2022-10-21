import React from "react";

import Button from "../Button";
import TaskFilter from "../TaskFilter";

import classes from "./Footer.module.scss";

interface FooterProps {
  onFiltered: (title: string) => void;
}

const Footer = ({ onFiltered }: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <span>1 items left</span>
      <TaskFilter onFiltered={onFiltered} />
      <Button title="Clear completed" type="clear completed" />
    </footer>
  );
};

export default Footer;
