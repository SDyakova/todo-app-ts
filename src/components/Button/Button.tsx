import React from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  title: string;
  type: string;
  onDeleted?: (id: React.MouseEvent<HTMLElement>) => void;
  handleButtonEditClick?: () => void;
  onFiltered?: (title: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  title,
  type,
  onDeleted,
  handleButtonEditClick,
  onFiltered,
}: ButtonProps) => {
  return (
    <button
      className={`${classes.btn} ${classes[type] ? classes[type] : ""}`}
      onClick={onDeleted || handleButtonEditClick || onFiltered}
    >
      {title}
    </button>
  );
};

export default Button;
