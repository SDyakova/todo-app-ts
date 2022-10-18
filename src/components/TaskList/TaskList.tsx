import React from "react";

import Task from "../Task";
import { mockData } from "../mocks/mocks";

import classes from "./TaskList.module.scss";

const TaskList = () => {
  const list = mockData.map(({ id, title }) => (
    <Task key={id} id={id} title={title} />
  ));
  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
