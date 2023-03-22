import React, { useState, useRef } from "react";
import DefaultPage from "./DefaultPage";
import { useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function OTPInput() {
  const imgsrc = "/walletimages/webpixsignup.png";
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const otp1Ref = useRef();
  const otp2Ref = useRef();
  const otp3Ref = useRef();
  const otp4Ref = useRef();
  const navigate = useNavigate();

  function isEmpt(val) {
    return val === "";
  }

  function handleClick(event) {
    if (
      !isNaN(otp1) &&
      !isNaN(otp2) &&
      !isNaN(otp3) &&
      !isNaN(otp4) &&
      !isEmpt(otp1) &&
      !isEmpt(otp2) &&
      !isEmpt(otp3) &&
      !isEmpt(otp4)
    ) {
      document.getElementById("verify").style.display = "flex";
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      if (isNaN(otp1)) {
        otp1Ref.current.focus();
      } else if (isNaN(otp2)) {
        otp2Ref.current.focus();
      } else if (isNaN(otp3)) {
        otp3Ref.current.focus();
      } else if (isNaN(otp4)) {
        otp4Ref.current.focus();
      }
    }
  }

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Tick boxes">
      <div id="verify">Your account has been successfully verified!</div>
      <div className="half_two_inner">
        <h3>Enter your OTP number</h3>
        <form className="otpform">
          <div className="inside_form">
            <input
              type="tel"
              placeholder="-"
              className="otp_input"
              name="otp1"
              value={otp1}
              onChange={(e) => {
                if (!isNaN(e.target.value) && !isEmpt(e.target.value)) {
                  setOtp1(e.target.value);
                  setTimeout(() => {
                    e.target.type = "password";
                  }, 500);
                  otp2Ref.current.focus();
                } else {
                  setOtp1("");
                  otp1Ref.current.focus();
                }
              }}
              ref={otp1Ref}
              maxLength="1"
              required
            />
            <input
              type="tel"
              placeholder="-"
              className="otp_input"
              name="otp2"
              value={otp2}
              onChange={(e) => {
                if (!isNaN(e.target.value) && !isEmpt(e.target.value)) {
                  setOtp2(e.target.value);
                  setTimeout(() => {
                    e.target.type = "password";
                  }, 1000);
                  otp3Ref.current.focus();
                } else {
                  setOtp2("");
                  otp2Ref.current.focus();
                }
              }}
              ref={otp2Ref}
              maxLength="1"
              required
            />
            <input
              type="tel"
              placeholder="-"
              className="otp_input"
              name="otp3"
              value={otp3}
              onChange={(e) => {
                if (!isNaN(e.target.value) && !isEmpt(e.target.value)) {
                  setOtp3(e.target.value);
                  setTimeout(() => {
                    e.target.type = "password";
                  }, 1000);
                  otp4Ref.current.focus();
                } else {
                  setOtp3("");
                  otp3Ref.current.focus();
                }
              }}
              ref={otp3Ref}
              maxLength="1"
              required
            />
            <input
              type="tel"
              placeholder="-"
              className="otp_input"
              name="otp4"
              value={otp4}
              onChange={(e) => {
                if (!isNaN(e.target.value) && !isEmpt(e.target.value)) {
                  setOtp4(e.target.value);
                  setTimeout(() => {
                    e.target.type = "password";
                  }, 1000);
                } else {
                  setOtp4("");
                  otp4Ref.current.focus();
                }
              }}
              ref={otp4Ref}
              maxLength="1"
              required
            />
          </div>
          <button
            onClick={() => {
              handleClick();
            }}
            type="submit"
            className="otpbtn"
          >
            Continue
          </button>
        </form>
      </div>
    </DefaultPage>
  );
}

export default OTPInput;
