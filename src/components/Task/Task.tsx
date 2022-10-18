import React from "react";
import { TaskModel } from "../types/types";

import classes from "./Task.module.scss";

const Task = ({ id, title }: TaskModel) => {
  return (
    <li className={classes.input}>
      <label className={classes.checkbox_wrapper}>
        <input type="checkbox" className={classes.checkbox}></input>
        <span>{title}</span>
      </label>
    </li>
  );
};

export default Task;
