import React from "react";
import "../HomePage/HomePage.css";
import { BiSolidTruck } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRotateLeft } from "react-icons/fa6";
import { BsFillCreditCardFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="HomePageSec">
      <div className="homeContainer w-full relative">
        <div className="imgBox">
          <div className="contentWrapper">
            <div className="contentBox">
              <div className="content">
                <div className="contentImg">
                  <img
                    src="https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-brand-logo-00.png"
                    alt="logoispum"
                  />
                </div>
                <h2>The best home entertainment system is here</h2>
                <p>
                  Sit diam odio eget rhoncus volutpat est nibh velit posuere
                  egestas.
                </p>
              </div>
              <div className="shopNow">Shop now</div>
            </div>
          </div>
        </div>
        <div className="marketCardWrapper">
          <div className="marketCardBox">
            <div className="marketWrapper">
              <div className="marketCard">
                <div className="marketCardIcon">
                  <BiSolidTruck className="marketCardIcon" />
                </div>
                <div className="marketCardContent">
                  <h2>Free shipping</h2>
                  <p>When you spend $80 or more</p>
                </div>
              </div>
              <div className="marketCard">
                <div className="marketCardIcon">
                  <AiOutlineMessage className="marketCardIcon" />
                </div>
                <div className="marketCardContent">
                  <h2>We are available 24/7</h2>
                  <p>Need help? contact us anytime</p>
                </div>
              </div>
              <div className="marketCard">
                <div className="marketCardIcon">
                  <FaRotateLeft className="marketCardIcon" />
                </div>
                <div className="marketCardContent">
                  <h2>Satisfied or return</h2>
                  <p>Easy 30-day return policy</p>
                </div>
              </div>
              <div className="marketCard">
                <div className="marketCardIcon">
                  <BsFillCreditCardFill className="marketCardIcon" />
                </div>
                <div className="marketCardContent">
                  <h2>100% secure payments</h2>
                  <p>Visa, Mastercard, Stripe, PayPal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
