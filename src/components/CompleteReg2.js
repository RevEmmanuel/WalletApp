import React, { useState, useRef } from "react";
import DefaultPage from "./DefaultPage";
import { useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function CompleteReg2() {
  const imgsrc = "/walletimages/completeReg.png";
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const addressRef = useRef();
  const navigate = useNavigate();

  const handleCardNumberChange = (event) => {
    let value = event.target.value;
    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");
    value = value.slice(0, 16);
    // Add space after every 4 digits
    value = value.replace(/(.{4})/g, "$1 ");
    // Remove any extra space at the end
    value = value.trim();
    // Set the state with the updated value
    setCardNumber(value);
  };

  const handleCvvChange = (event) => {
    let value = event.target.value;
    value = value.slice(0, 3);
    // Set the state with the updated value
    setCvv(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <DefaultPage imageSource={`${imgsrc}`} imageName="Tick boxes">
      <div className="half_two_inner">
        <nav>
          <div className="count">1 of 3</div>
          <div>Kindly complete your registration</div>
        </nav>
        <hr className="thin-line" />
        <form>
          <div className="kyc">
            <p>
              <strong>KYC</strong>
            </p>

            <label for="identify">Select a form of identification:</label>
            <br />
            <select id="dropdown" name="identify">
              <option value="NIN">NIN</option>
              <option value="License">DRIVER'S License</option>
              <option value="PVC">VOTER'S CARD</option>
            </select>
            <input
              type="text"
              placeholder="Home Address"
              className="input"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              ref={addressRef}
              required
            />
          </div>
          <hr className="thin-line" />
          <div className="kyc">
            <div className="below_nav">
              <strong>Add Cards</strong>
            </div>
            <input
              type="text"
              placeholder="Card Number"
              className="input"
              name="cardnumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              ref={addressRef}
              required
            />
            <input
              type="month"
              placeholder="Expiry date"
              className="input"
              name="expiry"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              ref={addressRef}
              required
            />
            <input
              type="password"
              placeholder="CVV"
              className="input"
              name="cvv"
              value={cvv}
              onChange={handleCvvChange}
              ref={addressRef}
              required
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
