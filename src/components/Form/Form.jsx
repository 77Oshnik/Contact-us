import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const Form = () => {
  const viacall = () => {
    console.log("call clicked");
  };

  const viachat = () => [console.log("chat clicked")];

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[text,setText]=useState('')

  const onSubmit=(event)=>{
    event.preventDefault()
    setname(event.target[0].value)
    setemail(event.target[1].value)
    setText(event.target[2].value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage />}
            onClick={viachat}
          />
          <Button text="VIA CALL" icon={<IoIosCall />} onClick={viacall} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMessage />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>
          <div>{"name = " + name}</div>
          <div>{"email = " + email}</div>
          <div>{"text = " + text}</div>
        </form>
      </div>
      <div>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default Form;
