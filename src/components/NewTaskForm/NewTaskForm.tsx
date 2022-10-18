import React from "react";

import classes from "./NewTaskForm.module.scss";

const NewTaskForm = () => {
  return (
    <input
      className={classes.input}
      placeholder="What needs to be done?"
    ></input>
  );
};

export default NewTaskForm;
