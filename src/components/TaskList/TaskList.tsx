import React from "react";

import Task from "../Task";
import { TaskModel } from "../types/types";

import classes from "./TaskList.module.scss";

interface TaskListProps {
  taskItems: TaskModel[];
  onDeleted: (id: number) => void;
  onEditingTask: (id: number, title: string) => void;
  onCompleted: (id: number) => void;
}

const TaskList = ({
  taskItems,
  onDeleted,
  onEditingTask,
  onCompleted,
}: TaskListProps) => {
  const list = taskItems.map(({ id, title, isCompleted }) => (
    <Task
      key={id}
      id={id}
      title={title}
      isCompleted={isCompleted}
      onDeleted={onDeleted}
      onEditingTask={onEditingTask}
      onCompleted={() => onCompleted(id)}
    />
  ));
  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
