import React, { useState, useRef } from "react";
import DefaultPage from "./DefaultPage";
import { useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function CompleteReg2() {
  const imgsrc = "/walletimages/completeReg.png";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [bvn, setBvn] = useState("");
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const relationshipRef = useRef();
  const bvnRef = useRef();
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    let value = event.target.value;
    setPhoneNumber(value);
  };

  const handleBvnChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.trim();
    value = value.slice(0, 10);
    // Set the state with the updated value
    setBvn(value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (
      fullName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      relationship !== "" &&
      bvn !== ""
    ) {
      navigate("/");
    } else {
      if (fullName === "") {
        fullNameRef.current.focus();
      } else if (email === "") {
        emailRef.current.focus();
      } else if (phoneNumber === "") {
        phoneRef.current.focus();
      } else if (relationship === "") {
        relationshipRef.current.focus();
      } else if (bvn === "") {
        bvnRef.current.focus();
      }
    }
  };

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Tick boxes">
      <div className="half_two_inner">
        <nav>
          <div className="count">2 of 3</div>
          <div>Kindly complete your registration</div>
        </nav>
        <hr className="thin-line" />
        <form>
          <div className="kyc">
            <p>
              <strong>Next of kin</strong>
            </p>
            <input
              type="text"
              placeholder="Full name"
              className="input"
              name="address"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              ref={fullNameRef}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="input"
              name="phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              ref={phoneRef}
              required
              pattern="[0-9]{11}"
            />
            <input
              type="text"
              placeholder="Relationship"
              className="input"
              name="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              ref={relationshipRef}
              required
            />
          </div>
          <hr className="thin-line" />
          <div className="kyc">
            <div className="below_nav">
              <strong>BVN</strong>
            </div>
            <input
              type="text"
              placeholder="BVN"
              className="input"
              name="bvn"
              value={bvn}
              onChange={handleBvnChange}
              ref={bvnRef}
              required
              pattern="[0-9]{10}"
            />
          </div>
          <button
            onClick={() => {
              handleSubmit();
            }}
            type="submit"
            className="btnlink"
          >
            Next
          </button>
        </form>
      </div>
    </DefaultPage>
  );
}

export default CompleteReg2;
