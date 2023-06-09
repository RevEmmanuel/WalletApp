import React, { useState, useRef } from "react";
import DefaultPage from "./DefaultPage";
import { useNavigate } from "react-router-dom";
import "../components/styles/style.css";

function CompleteReg() {
  const imgsrc = "/walletimages/completeReg.png";
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const addressRef = useRef();
  const cvvRef = useRef();
  const cardNumberRef = useRef();
  const monthRef = useRef();
  const navigate = useNavigate();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

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

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleCvvChange = (event) => {
    let value = event.target.value;
    value = value.slice(0, 3);
    // Set the state with the updated value
    setCvv(value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (
      address !== "" &&
      cardNumber !== "" &&
      cvv !== "" &&
      selectedMonth !== ""
    ) {
      navigate("/completereg2");
    } else {
      if (address === "") {
        addressRef.current.focus();
      } else if (cardNumber === "") {
        cardNumberRef.current.focus();
      } else if (selectedMonth === "") {
        monthRef.current.focus();
      } else if (cvv === "") {
        cvvRef.current.focus();
      }
    }
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
              onChange={handleAddressChange}
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
              ref={cardNumberRef}
              required
            />
            <input
              type="month"
              placeholder="Expiry date"
              className="input"
              name="expiry"
              value={selectedMonth}
              onChange={handleMonthChange}
              ref={monthRef}
              required
            />
            <input
              type="password"
              placeholder="CVV"
              className="input"
              name="cvv"
              value={cvv}
              onChange={handleCvvChange}
              ref={cvvRef}
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

export default CompleteReg;
