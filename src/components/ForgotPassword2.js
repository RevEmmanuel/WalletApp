import DefaultPage from "./DefaultPage";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function ForgotPassword2() {
  const imgsrc = "/walletimages/forgotPassword.jpg";
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();

  function handleClick() {
    if (email !== "") {
      navigate("/otppasswordforgot");
    } else {
      if (email === "") {
        emailRef.current.focus();
      }
    }
  }
  

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Forgot password">
      <div className="head">
        <p className="reset">Reset Password</p>
      </div>
      <div className="reset-image">
        <img src="walletimages/resetPassword.png" alt="" className="image" />
      </div>
      <p className="text-two">Enter Email Address to reset Password</p>
      <input
        type="email"
        placeholder="Email"
        className="input"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
        required
      />
      <button
        onClick={() => {
          handleClick();
        }}
        type="submit"
        className="btn"
      >
        Next
      </button>
      <a href="/" className="next">
        cancel
      </a>
    </DefaultPage>
  );
}

export default ForgotPassword2;
