import { ST } from "next/dist/shared/lib/utils";
import React from "react";
import Styles from "./contact.module.css";

const index = (props) => {
  const { BookButtton } = props;

  return (
    <div className="container-fluid mt-5 mb-5" ref={BookButtton}>
      <div className="row">
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          <div className={`${Styles.boxModel} d-flex align-items-center`}>
            <div className="row">
              <div className="col-12">
                <h3 className={`${Styles.lineHeight}`}>
                  Managing your business has never been more beautiful. Try
                  ShopQ today.
                </h3>
              </div>
              <br />
              <div className="col-12">
                <p className={`${Styles.lineHeight} ${Styles.colorChange}`}>
                  Our team works with the customers closely to make the product
                  more enjoyable. We will get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center position-relative">
          <div className={`${Styles.boxModel1} d-flex align-items-center mt-0`}>
            <div className="row">
              <div className="col-12">
                <h6 className={`${Styles.lineHeight} ${Styles.fontWeight}`}>
                  Get in touch with us
                </h6>
              </div>
              <br />
              <div className="col-12">
                <input
                  className={`${Styles.inputData}`}
                  placeholder="Email address"
                  name="email"
                  // onChange={()}
                />
              </div>
              <div className="col-12 mt-4">
                <input
                  className={`${Styles.inputData}`}
                  placeholder="Mobile number"
                  name="email"
                  // onChange={()}
                />
              </div>
              <div className="col-12 mt-5">
                <button className={`${Styles.TryButtonCenterContact}`}>
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
