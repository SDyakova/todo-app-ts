import React from "react";
import Button from "../Button";

import classes from "./TaskFilter.module.scss";

const TaskFilter = () => {
  const taskFilterBtns = [
    { title: "All", id: "b1" },
    { title: "Active", id: "b2" },
    { title: "Completed", id: "b3" },
  ];

  const btnsList = taskFilterBtns.map(({ title, id }) => (
    <Button title={title} type="filter" key={id} />
  ));
  return <div>{btnsList}</div>;
};

export default TaskFilter;
