import React from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  title: string;
  type: string;
}

const Button = ({ title, type }: ButtonProps) => {
  return (
    <button className={`${classes.btn} ${classes[type] ? classes[type] : ""}`}>
      {title}
    </button>
  );
};

export default Button;
