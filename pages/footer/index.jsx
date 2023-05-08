import React from "react";
import Styles from "./footer.module.css";
const index = () => {
  return (
    <div>
      <div className={Styles.footerMain}>
        <div className={`${Styles.containerMain} container`}>
          <footer>
            <div className="w-100 d-flex">
              <div className={Styles.Div1}>
                <div>
                  <img src="assets/shopq.png" alt="shopq" />
                </div>
                <div className={`${Styles.icons} mt-3`}>
                  <img
                    src="assets/facebook.svg"
                    alt="facebook"
                    className="mt-4"
                  />
                  <img
                    src="assets/insta.svg"
                    className="ps-3 mt-4"
                    alt="insta"
                  />
                  <img
                    src="assets/linked-in.svg"
                    className="ps-3 mt-4"
                    alt="third"
                    width="15%"
                  />
                  {/* <img
                    src="assets/twiter.svg"
                    className="ps-3 pe-3 mt-4"
                    alt="twiter"
                  />
                  <img src="assets/google.svg" className=" mt-4" alt="google" /> */}
                </div>
              </div>
              <div className={Styles.footerText}>
                <h5>About Us</h5>
                <h6>About ShopQ</h6>
                <h6>Privacy policy</h6>
                <h6>Terms of use</h6>
              </div>
              <div className={Styles.footerText}>
                <h5>Help & Information</h5>
                <h6>Help</h6>
                <h6>Billing</h6>
                <h6>Customer Support</h6>
              </div>
              <div className={Styles.footerText}>
                <h5>Contact Us</h5>
                <h6>info@ShopQ.com</h6>
              </div>
              <div className={Styles.footerText}>
                <h5>News Letter</h5>
                <h6>Your Email</h6>
                <div className={`${Styles.inputEmail} d-flex`}>
                  <input
                    type="email"
                    className={Styles.emailInput}
                    width="100%"
                  />
                  <button className={Styles.joinButton}>Join</button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className={Styles.subFooter}>
        <h3 className={`${Styles.copyRight} mb-0`}>
          Copyright 2023&nbsp;{" "}
          <img src="assets/copy-right.svg" alt="copy-right" />
          &nbsp; ShopQ India, Inc. All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default index;
