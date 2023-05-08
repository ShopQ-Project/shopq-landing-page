import React from "react";
import Styles from "./price.module.css";

const Price = [
  {
    id: 0,
    type: "Intro",
    price: 1000,
  },
  {
    id: 1,
    type: "Basic",
    price: 1499,
  },
  {
    id: 2,
    type: "Professional",
    price: 2000,
  },
];
const index = () => {
  return (
    <div>
      <div className="container mb-4">
        <h4 className={Styles.priceHead}>Pricing</h4>
        <div className="row">
          {Price.map((item, index) => (
            <div
              className={
                index === 1
                  ? `${Styles.ColorPriceCard} col-md-4`
                  : `${Styles.PriceCard} col-md-4`
              }
              key={index}
            >
              <div className="d-flex justify-content-between">
                <p className={Styles.typePrice}>
                  {item?.type ? item?.type : _____}
                </p>
                {index === 1 ? (
                  <p className={Styles.popularText}>Popular</p>
                ) : null}
              </div>
              <span className={Styles.priceNumber}>
                ₹{item.price ? item.price : _____}
              </span>
              &nbsp;&nbsp;<span>/month</span>
              <p className={Styles.SubHead}>
                Lorem ipsum dolor sit Lorem ipsum dolor sit
              </p>
              <div className="d-flex mt-4">
                <img
                  src="assets/price-tick.svg"
                  className={Styles.priceTick}
                  alt="price-tick"
                />
                <p className={`${Styles.pricelist} mb-0 ps-3`}>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                </p>
              </div>
              <div className="d-flex mt-4">
                <img
                  src="assets/price-tick.svg"
                  className={Styles.priceTick}
                  alt="price-tick"
                />
                <p className={`${Styles.pricelist} mb-0 ps-3`}>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                </p>
              </div>
              <div className="d-flex mt-4">
                <img
                  src="assets/price-tick.svg"
                  className={Styles.priceTick}
                  alt="price-tick"
                />
                <p className={`${Styles.pricelist} mb-0 ps-3`}>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                </p>
              </div>
              <div className="d-flex mt-4">
                <img
                  src="assets/price-tick.svg"
                  className={Styles.priceTick}
                  alt="price-tick"
                />
                <p className={`${Styles.pricelist} mb-0 ps-3`}>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                </p>
              </div>
              <div className="d-flex mt-4">
                <img
                  src="assets/price-tick.svg"
                  className={Styles.priceTick}
                  alt="price-tick"
                />
                <p className={`${Styles.pricelist} mb-0 ps-3`}>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                </p>
              </div>
              <div className="d-flex mt-4">
                <img
                  src="assets/price-tick.svg"
                  className={Styles.priceTick}
                  alt="price-tick"
                />
                <p className={`${Styles.pricelist} mb-0 ps-3`}>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                </p>
              </div>
              <div className="wrapper">
                <a href="#" className={Styles.anchorBtn}>
                  <span>Try this</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
