import React from "react";

import { TaskModel } from "../types/types";
import Button from "../Button";

import classes from "./Task.module.scss";

type TaskProps = TaskModel & {
  onDeleted: (id: number) => void;
};

const Task = ({ id, title, onDeleted }: TaskProps) => {
  return (
    <li className={classes.input}>
      <label className={classes.checkbox_wrapper}>
        <input type="checkbox" className={classes.checkbox}></input>
        <span>{title}</span>
      </label>
      <div>
        <Button title="Edit" type="edit" />
        <Button title="Delete" type="delete" onDeleted={() => onDeleted(id)} />
      </div>
    </li>
  );
};

export default Task;
