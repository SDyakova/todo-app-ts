import React from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  title: string;
  type: string;
  onDeleted?: (id: React.MouseEvent<HTMLElement>) => void;
  handleButtonEditClick?: () => void;
  onFiltered?: (title: React.MouseEvent<HTMLElement>) => void;
  onClearCompleted?: () => void;
  isSelected?: boolean;
}

const Button = ({
  title,
  type,
  isSelected,
  onDeleted,
  handleButtonEditClick,
  onFiltered,
  onClearCompleted,
}: ButtonProps) => {
  return (
    <button
      className={`${classes.btn} ${classes[type] ? classes[type] : ""} ${
        isSelected ? classes.active : ""
      }`}
      onClick={
        onDeleted || handleButtonEditClick || onFiltered || onClearCompleted
      }
    >
      {title}
    </button>
  );
};

export default Button;
