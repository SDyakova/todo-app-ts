import React from "react";

import Task from "../Task";
import { mockData } from "../mocks/mocks";

import classes from "./TaskList.module.scss";
import { TaskModel } from "../types/types";

interface TaskListProps {
  taskItems: TaskModel[];
}

const TaskList = ({ taskItems }: TaskListProps) => {
  const list = taskItems.map(({ id, title }) => (
    <Task key={id} id={id} title={title} />
  ));
  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
