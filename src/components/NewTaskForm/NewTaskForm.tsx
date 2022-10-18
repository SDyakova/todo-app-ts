import React from "react";

import classes from "./NewTaskForm.module.scss";

interface NewTaskFormProps {
  addTask: (e: any) => void;
}

const NewTaskForm = ({ addTask }: NewTaskFormProps) => {
  return (
    <input
      className={classes.input}
      placeholder="What needs to be done?"
      onKeyUp={addTask}
    ></input>
  );
};

export default NewTaskForm;
