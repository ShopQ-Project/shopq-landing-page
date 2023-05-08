import React, { useState } from "react";
import Styles from "./tabs.module.css";
const Index = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className={`${Styles.sectionFour} pt-5 pb-5`}>
        <h3 className={Styles.manage}>
          Managing your store has
          <br /> never been easier
        </h3>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4">
              <div
                className={
                  tab === 0 ? `${Styles.active}` : `${Styles.inactive}`
                }
                onClick={() => setTab(0)}
              >
                <h4 className="mb-0">Customizable Cart</h4>
              </div>
              <div
                className={
                  tab === 1 ? `${Styles.active}` : `${Styles.inactive}`
                }
                onClick={() => setTab(1)}
              >
                <h4 className="mb-0">Record your favourites</h4>
              </div>
              <div
                className={
                  tab === 2 ? `${Styles.active}` : `${Styles.inactive}`
                }
                onClick={() => setTab(2)}
              >
                <h4 className="mb-0">Reviews for every products</h4>
              </div>
              <div
                className={
                  tab === 3 ? `${Styles.active}` : `${Styles.inactive}`
                }
                onClick={() => setTab(3)}
              >
                <h4 className="mb-0">Track your Order</h4>
              </div>
              <div
                className={
                  tab === 4 ? `${Styles.active}` : `${Styles.inactive}`
                }
                onClick={() => setTab(4)}
              >
                <h4 className="mb-0">Built In invoice</h4>
              </div>
            </div>
            <div className="col-md-8 ps-5">
              {tab === 0 ? (
                <div
                  className={
                    tab === 0
                      ? `${Styles.activeContent}`
                      : `${Styles.inactiveContent}`
                  }
                >
                  <h4 className="mb-0">
                    In today&apos;s digital age, online shopping has become the
                    norm for many consumers. The convenience of being able to
                    shop from the comfort of your own home and have items
                    delivered directly to your doorstep has led to a significant
                    increase in the popularity of online shopping. One important
                    aspect of online shopping is the shopping cart, which allows
                    customers to add items to their order before completing the
                    purchase. With customizable carts, online shopping becomes
                    even more convenient and personalized.
                    <br />
                    Customizable carts allow customers to tailor their shopping
                    experience to their preferences. For example, customers can
                    choose the layout of their shopping cart, add or remove
                    specific features, and adjust the design to match their
                    personal style. This level of customization ensures that the
                    shopping cart is not only functional but also visually
                    appealing and enjoyable to use.
                  </h4>
                  <div className="w-100">
                    <img
                      src="assets/tab-1.png"
                      className={Styles.tabOneImage}
                      alt="tab"
                    />
                  </div>
                </div>
              ) : null}
              {tab === 1 ? (
                <div
                  className={
                    tab === 1
                      ? `${Styles.activeContent}`
                      : `${Styles.inactiveContent}`
                  }
                >
                  <h4 className="mb-0">
                    Recording your favorites is a simple and effective way to
                    keep track of the Product you love. Whether you use a
                    physical notebook or a digital tool like a note-taking app
                    or spreadsheet, keeping a record of your favorites makes it
                    easy to refer back to them whenever you want. <br />
                    One of the biggest benefits of recording your favorites is
                    that it allows you to rediscover content you may have
                    forgotten about. Over time, it&apos;s easy to forget the
                    names of books, movies, or Product you enjoyed loved to
                    have. By recording them, you can easily look them up and
                    revisit them whenever you&apos;re in the mood.
                  </h4>
                  <div className="w-100 d-flex justify-content-center">
                    <img
                      src="assets/tab-2.png"
                      className={Styles.tabTwoImage}
                      alt="tab"
                    />
                  </div>
                </div>
              ) : null}
              {tab === 2 ? (
                <div
                  className={
                    tab === 2
                      ? `${Styles.activeContent}`
                      : `${Styles.inactiveContent}`
                  }
                >
                  <h4 className="mb-0">
                    Product reviews are a valuable tool for consumers looking to
                    make informed purchasing decisions. They allow shoppers to
                    get a firsthand account of a product&apos;s quality,
                    performance, and overall value. Reviews can be found on a
                    variety of websites, including the product
                    manufacturer&apos;s website, online retailers like Amazon or
                    Best Buy, and independent review sites like Consumer
                    Reports. <br />
                    One of the main benefits of product reviews is that they
                    provide an unbiased perspective. Unlike product descriptions
                    or marketing materials, which are designed to promote the
                    product, reviews are written by real consumers who have used
                    the product themselves. This allows potential buyers to get
                    a more accurate understanding of the product&apos;s
                    strengths and weaknesses.
                  </h4>
                  <div className="w-100 d-flex justify-content-center">
                    <img
                      src="assets/tab-3.png"
                      className={Styles.tabThreeImage}
                      alt="tab"
                    />
                  </div>
                </div>
              ) : null}
              {tab === 3 ? (
                <div
                  className={
                    tab === 3
                      ? `${Styles.activeContent}`
                      : `${Styles.inactiveContent}`
                  }
                >
                  <h4 className="mb-0">
                    Order tracking is a feature offered by most e-commerce
                    websites that allows customers to monitor the progress of
                    their orders. This includes tracking the package&apos;s
                    location, estimated delivery date, and any updates or
                    changes to the delivery status. <br />
                    One of the main benefits of order tracking is that it
                    provides peace of mind for customers. By knowing the
                    location of their package and when it will arrive, customers
                    can plan accordingly and avoid missed deliveries.
                    Additionally, order tracking allows customers to be
                    proactive if any issues arise during the delivery process,
                    such as a package being delayed or lost.
                  </h4>
                  <div className="w-100 d-flex justify-content-center">
                    <img
                      src="assets/tab-4.png"
                      className={Styles.tabFourImage}
                      alt="tab"
                    />
                  </div>
                </div>
              ) : null}
              {tab === 4 ? (
                <div
                  className={
                    tab === 4
                      ? `${Styles.activeContent}`
                      : `${Styles.inactiveContent}`
                  }
                >
                  <h4 className="mb-0">
                    A built-in invoice system is a feature offered by many
                    accounting and business management software solutions. It
                    allows businesses to create, send, and track invoices
                    directly from the software platform. This eliminates the
                    need for manual invoice creation and streamlines the
                    invoicing process. <br />
                    One of the main benefits of a built-in invoice system is
                    that it saves time. With automated invoicing, businesses can
                    create and send invoices quickly and efficiently, freeing up
                    time to focus on other important aspects of the business.
                    Additionally, built-in invoice systems often have templates
                    that make it easy to create professional-looking invoices
                    that are easy for clients to read and understand.
                  </h4>
                  <div className="w-100 d-flex justify-content-center mt-3">
                    <img
                      src="assets/tab-5.png"
                      className={Styles.tabFiveImage}
                      alt="tab"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
