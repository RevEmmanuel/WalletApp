import React, { useRef, useState } from "react";
import DefaultPage from "./DefaultPage";
import "../components/styles/style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function WebLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  function handleClick(event) {
    if (email !== "" && password !== "") {
      navigate("/signup");
    } else {
      event.preventDefault();
      if (email === "") {
        emailRef.current.focus();
      } else {
        passwordRef.current.focus();
      }
    }
  }

  const imgsrc = "/walletimages/webpixlogin.png";

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Open door">
      <div className="half_two_inner">
        <h3 className="welcome">Welcome Back!</h3>
        <p className="welcome_under">Login to your dashboard</p>
        <form className="half_two_inner">
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
          <div className="login_line">
            <label>
              <input
                type="checkbox"
                placeholder="Remember me"
                name="remember"
              />
              Remember Me
            </label>
            <p>
              <img
                src="/walletimages/Vectori-icon.png"
                alt="icon"
                className="icon"
              />
              <Link to="/forgotpassword">Forgot Password</Link>
            </p>
          </div>
          <button
            onClick={() => {
              handleClick();
            }}
            type="submit"
            className="btn"
          >
            Login
          </button>
        </form>
        <div className="lower">
          <p className="donthave">Don't have an account?</p>
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </div>
      </div>
    </DefaultPage>
  );
}

export default WebLogin;
