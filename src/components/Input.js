import React from "react";
import "../components/styles/style.css";

function Input(props) {

  
  if (props.type === "checkbox") {
    return (
      <label>
        <input
          type={`${props.type}`}
          name="remember"
          value="false"
          placeholder={`${props.ask}`}
        />
        Remember Me
      </label>
    );
  }
  return props.required === "true" ? (
    <input
      type={`${props.type}`}
      placeholder={`${props.ask}`}
      className="input"
      required
    />
  ) : (
    <input
      type={`${props.type}`}
      placeholder={`${props.ask}`}
      className="input"
    />
  );
}

export default Input;
