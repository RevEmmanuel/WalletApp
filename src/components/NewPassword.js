import DefaultPage from "./DefaultPage";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function NewPassword() {
  const imgsrc = "/walletimages/forgotPassword.jpg";
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const navigate = useNavigate();

  function handleClick() {
    if (password !== "") {
      navigate("/");
    } else {
      if (password === "") {
        passwordRef.current.focus();
      }
    }
  }

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Forgot password">
      <div id="verify">Success!</div>
      <div className="reset-image">
        <img src="walletimages/resetPassword.png" alt="" className="image" />
      </div>
      <p className="text-two">Enter New Password </p>
      <input
        type="password"
        placeholder="Password"
        className="input"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
        required
      />
      <button
        onClick={() => {
          handleClick();
        }}
        type="submit"
        className="btn"
      >
        Reset
      </button>
      <a href="/" className="next">
        Cancel
      </a>
    </DefaultPage>
  );
}

export default NewPassword;
