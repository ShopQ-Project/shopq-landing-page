import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Styles from "./faq.module.css";
const index = () => {
  return (
    <div className={Styles.FaqMain}>
      <div className="container mb-5">
        <p className={Styles.FaqHead}>FAQs</p>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {" "}
            <Accordion className={Styles.CustomAccording}>
              <Accordion.Item eventKey="0" className={Styles.accordButton}>
                <Accordion.Header>
                  Is ShopQ good for small businesses?{" "}
                </Accordion.Header>
                <Accordion.Body className={Styles.faqBody}>
                  Absolutely! ShopQ is for any business that sells products. It
                  makes it easy for businesses to create their own storefront
                  and start selling
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={Styles.accordButton}>
                <Accordion.Header>
                  How long is ShopQ free trial?{" "}
                </Accordion.Header>
                <Accordion.Body className={Styles.faqBody}>
                  Our trial period lasts for 14 days. After this period, you
                  will have the option to either pay for a monthly or yearly
                  membership. You’re free to cancel your membership at anytime.
                  That’s how confident we are that you’ll love our service
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={Styles.accordButton}>
                <Accordion.Header>
                  what kind of products can i sell ?
                </Accordion.Header>
                <Accordion.Body className={Styles.faqBody}>
                  There is no limit to what you can sell. You can sell real
                  products or you can sell digital products. You can even sell
                  services. There is no set limit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className={Styles.accordButton}>
                <Accordion.Header>Is ShopQ worth the price? </Accordion.Header>
                <Accordion.Body className={Styles.faqBody}>
                  ShopQ delivers the best deal of today on discounted products
                  around the web. The company discloses their sources on their
                  website and they are verified by the companies themselves. The
                  discount rates offered by ShopQ are among the highest in the
                  industry.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className={Styles.accordButton}>
                <Accordion.Header>
                  Does ShopQ have additional transaction fees?{" "}
                </Accordion.Header>
                <Accordion.Body className={Styles.faqBody}>
                  ShopQ has no additional fees.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
