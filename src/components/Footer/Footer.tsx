import React from "react";

import Button from "../Button";
import TaskFilter from "../TaskFilter";
import { TaskModel } from "../types/types";

import classes from "./Footer.module.scss";

interface FooterProps {
  onFiltered: (title: string) => void;
  onClearCompleted: () => void;
  taskItems: TaskModel[];
  currentFilter: string;
}

const Footer = ({
  onFiltered,
  onClearCompleted,
  taskItems,
  currentFilter,
}: FooterProps) => {
  let leftItems = taskItems.filter((task) => !task.isCompleted).length;
  return (
    <footer className={classes.footer}>
      <span>{leftItems} items left</span>
      <TaskFilter onFiltered={onFiltered} currentFilter={currentFilter} />
      <Button
        title="Clear completed"
        type="clear completed"
        onClearCompleted={onClearCompleted}
      />
    </footer>
  );
};

export default Footer;
