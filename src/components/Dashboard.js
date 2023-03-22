import React, { useState } from "react";
import "../components/styles/dashboard.css";

function DefaultPageDashboard() {
  const [balance, setBalance] = useState("N 10,000");
  return (
    <div className="backg">
      <div className="white">
        <div className="top_dash">
          <div>
            <p className="greeting">
              <strong>Hi Chibuzor, </strong>
            </p>
          </div>
          <img
            src="walletimages/profile_pic.png"
            alt="profile_pic"
            width={250}
            height={250}
          />
        </div>
        <div className="balance_bar">
          <div className="top_bal">
            <p className="total">Total balance </p>
            <img
              src="walletimages/bell.png"
              alt="notifications"
              width={30}
              height={30}
            />
          </div>
          <div className="bottom_bal">
            <p className="balance" id="bal">
              <strong>{balance}</strong>
            </p>
            <button
              className="bal_hide"
              onClick={() => {
                if (balance === "*******") {
                  setBalance("N 10,000");
                } else {
                  setBalance("*******");
                }
              }}
            >
              <img
                src="walletimages/eye.png"
                alt="hide bal"
                width={70}
                height={50}
              />
            </button>
          </div>
        </div>
        <div className="icons_bar">
          <div className="do">
            <img
              src="walletimages/atmCard.png"
              alt="atm card"
              width={70}
              height={70}
            />
            <p>Cards</p>
          </div>
          <div className="do">
            <img
              src="walletimages/handMoney.png"
              alt="atm card"
              width={70}
              height={70}
            />
            <p>Spends</p>
          </div>
          <div className="do">
            <img
              src="walletimages/airtime.png"
              alt="atm card"
              width={70}
              height={70}
            />
            <p>Airtime</p>
          </div>
          <div className="do">
            <img
              src="walletimages/help.png"
              alt="atm card"
              width={70}
              height={70}
            />
            <p>Help</p>
          </div>
          <div className="do">
            <img
              src="walletimages/save.png"
              alt="atm card"
              width={70}
              height={70}
            />
            <p>Save</p>
          </div>
          <img
            src="walletimages/arrow.png"
            alt="arrow"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
}

export default DefaultPageDashboard;
