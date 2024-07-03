import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({ text, icon, isOutline, ...rest }) => {
  return (
    <button className={isOutline ? styles.sec_btn : styles.btn} {...rest}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
