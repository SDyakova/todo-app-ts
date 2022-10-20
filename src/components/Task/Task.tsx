import React, { useState } from "react";

import { TaskModel } from "../types/types";
import Button from "../Button";

import classes from "./Task.module.scss";

type TaskProps = TaskModel & {
  onDeleted: (id: number) => void;
  onEditingTask: (id: number, title: string) => void;
  onCompleted: (id: React.MouseEvent<HTMLElement>) => void;
};

const Task = ({
  id,
  title,
  isCompleted,
  onDeleted,
  onEditingTask,
  onCompleted,
}: TaskProps) => {
  const initialState = {
    isEditing: false,
    inputValue: title,
  };
  const [taskState, setTaskState] = useState(initialState);

  const { isEditing, inputValue } = taskState;

  const handleButtonEditClick = () => {
    setTaskState((taskState) => ({ ...taskState, isEditing: true }));
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    setTaskState((taskState) => ({ ...taskState, inputValue: e.target.value }));
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isEditing && e.key === "Enter") {
      onEditingTask(id, taskState.inputValue);
      setTaskState((taskState) => ({ ...taskState, isEditing: false }));
    }
  };

  const editingField = (
    <input
      type="text"
      value={inputValue}
      className={classes.edit}
      onChange={handleInputChange}
      onKeyUp={handleKeyUp}
    ></input>
  );

  return !isEditing ? (
    <li>
      <label className={classes.input}>
        <div className={classes.checkbox_wrapper}>
          <input
            type="checkbox"
            className={classes.checkbox}
            onClick={onCompleted}
          ></input>
          <span className={isCompleted ? classes.completed : ""}>{title}</span>
        </div>
        <div>
          <Button
            title="Edit"
            type="edit"
            handleButtonEditClick={handleButtonEditClick}
          />
          <Button
            title="Delete"
            type="delete"
            onDeleted={() => onDeleted(id)}
          />
        </div>
      </label>
    </li>
  ) : (
    editingField
  );
};

export default Task;
