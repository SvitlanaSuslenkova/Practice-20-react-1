import "./Buttonlink.css";
//import React from "react";
import { useState } from "react";

function Buttonlink(props) {
  const [text, setText] = useState(props.buttonName);
  const clicked = function (event) {
    event.currentTarget.classList.add("linkbutton");
    setText(props.linkText);
  };

  return (
    <a className="alink" onClick={clicked}>
      {text}
    </a>
  );
}
export default Buttonlink;
