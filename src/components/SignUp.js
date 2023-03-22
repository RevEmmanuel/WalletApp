import React, { useRef, useState } from "react";
import DefaultPage from "./DefaultPage";
import { Link, useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function SignUp() {
  const imgsrc = "/walletimages/webpixsignup.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const navigate = useNavigate();

  function handleClick() {
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== ""
    ) {
      document.getElementById("verify").style.display = "flex";
      setTimeout(() => {
        navigate("/otpinput");
      }, 3000);
    } else {
      if (firstName === "") {
        firstNameRef.current.focus();
      } else if (lastName !== "") {
        lastNameRef.current.focus();
      } else if (email !== "") {
        emailRef.current.focus();
      } else if (password !== "") {
        passwordRef.current.focus();
      }
    }
  }

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Tick boxes">
      <div id="verify">
        Kindly Check your mail to see your OTP number
        <br />
        for Account Verification
        <br />
        Reloading Page, please wait
      </div>
      <div className="half_two_inner">
        <h3 className="welcome">Welcome!</h3>
        <p className="welcome_under">
          Sign up by entering the information below
        </p>
        <form className="half_two_inner">
          <input
            type="text"
            placeholder="First Name"
            className="input"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ref={firstNameRef}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            ref={lastNameRef}
            required
          />
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
          <div className="lower sign">
            <p className="donthave">Already have an account?</p>
            <Link to="/" className="link">
              Login
            </Link>
          </div>
          <button
            onClick={() => {
              handleClick();
            }}
            type="submit"
            className="btn"
          >
            Sign Up
          </button>
        </form>
      </div>
    </DefaultPage>
  );
}

export default SignUp;
