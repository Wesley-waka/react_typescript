import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      data-bs-dismiss
    >
      {children}
    </button>
  );
};

export default Button;
