import React from "react";
import "../components/styles/style.css";
import { useNavigate } from "react-router-dom";

function ClickButton(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${props.to}`);
  }

  return (
    <button onClick={handleClick} type="submit" className="btn">
      {props.display}
    </button>
  );
}

export default ClickButton;
