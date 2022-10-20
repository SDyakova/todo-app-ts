import React from "react";

import Task from "../Task";
import { mockData } from "../mocks/mocks";

import classes from "./TaskList.module.scss";
import { TaskModel } from "../types/types";

interface TaskListProps {
  taskItems: TaskModel[];
  onDeleted: (id: number) => void;
  onEditingTask: (id: number, title: string) => void;
}

const TaskList = ({ taskItems, onDeleted, onEditingTask }: TaskListProps) => {
  const list = taskItems.map(({ id, title }) => (
    <Task
      key={id}
      id={id}
      title={title}
      onDeleted={onDeleted}
      onEditingTask={onEditingTask}
    />
  ));
  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
