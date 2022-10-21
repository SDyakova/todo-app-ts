import React from "react";
import Button from "../Button";

import classes from "./TaskFilter.module.scss";

interface TaskFilterProps {
  onFiltered: (title: string) => void;
  currentFilter: string;
}

const TaskFilter = ({ onFiltered, currentFilter }: TaskFilterProps) => {
  const taskFilterBtns = [
    { title: "All", id: "b1" },
    { title: "Active", id: "b2" },
    { title: "Completed", id: "b3" },
  ];

  const btnsList = taskFilterBtns.map(({ title, id }) => (
    <Button
      title={title}
      type="filter"
      key={id}
      onFiltered={() => onFiltered(title)}
      isSelected={currentFilter === title}
    />
  ));
  return <div>{btnsList}</div>;
};

export default TaskFilter;
