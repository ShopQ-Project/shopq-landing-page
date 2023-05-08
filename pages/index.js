import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "../styles/Landing.module.css";
import Button from "react-bootstrap/Button";
import { IoMdMenu } from "react-icons/io";
import Tab from "./tabs";
import Price from "./pricing";
import Faq from "./faq";
import Contact from "./contact";
import Footer from "./footer";
import Modal from "./modal";
const Index = () => {
  const BookButtton = useRef(null);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = () => {
    BookButtton?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* ************************************************content-1************************************ */}
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="dark"
          className={`${Styles.NavBorder}`}
        >
          <Container>
            <Navbar.Brand href="#home" className={`${Styles.BrandColor}`}>
              <img src="assets/shopQLogo.svg" alt="shopqLogo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className={`${Styles.NavIcon}`}
            >
              <IoMdMenu />
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="align-items-center">
                <Nav.Link href="#deets" className={`${Styles.homeText}`}>
                  Features
                </Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link> */}
                <Nav.Link href="#deets" className={`${Styles.homeText}`}>
                  Pricing
                </Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link> */}
                <Nav.Link href="#deets" className={`${Styles.homeText}`}>
                  FAQs
                </Nav.Link>
                <Button
                  variant="outline-secondary"
                  className={`${Styles.buttonStyle}`}
                  onClick={() => handleClick()}
                >
                  Book a Demo
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* ************************************************content-2************************************ */}
      <div>
        <Modal show={modalShow} onHide={() => setModalShow(false)} />

        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6 d-grid align-items-center">
              <div>
                <h3 className={`${Styles.EverythingText}`}>
                  Everything to make your business go online
                </h3>
                <p className={`${Styles.paraText} mb-0`}>
                  Save time, make money, we make it easier for sellers to own
                  the future.
                </p>
              </div>
              <div>
                <Button
                  variant="secondary"
                  className={`${Styles.buttonStyle2}`}
                  onClick={() => {
                    handleClick();
                    setModalShow(true);
                  }}
                >
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src="assets/banner-main.png" width="100%" alt="icon" />
              </div>
            </div>
          </div>
          <div className={`${Styles.section2}`}>
            <p className={Styles.manageSection}>
              Managing your store has never been easier
            </p>
          </div>
        </div>
        <div className={Styles.storeImagediv}>
          <img
            src="assets/manage-store.png"
            width="100%"
            className={Styles.storeImage}
            alt="icon"
          />
        </div>
        <div className="">
          <div className={`${Styles.ThirdContainer} container`}>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h4 className={Styles.section3Head}>
                    The most trusted B2C and B2B e-commerce solution provider.
                  </h4>
                  <div className={Styles.trustedHeader}>
                    <img src="assets/tick.svg" alt="tick" />
                    <span className={Styles.trustedText}>
                      Multiple payment and customization options.
                    </span>
                  </div>
                  <div className={Styles.trustedHeader}>
                    <img src="assets/tick.svg" alt="tick" />
                    <span className={Styles.trustedText}>
                      High level of tech support and site security.
                    </span>
                  </div>
                  <div className={Styles.trustedHeader}>
                    <img src="assets/tick.svg" alt="tick" />
                    <span className={Styles.trustedText}>
                      Secure, simple, and reliable payment processing.
                    </span>
                  </div>
                  <div className={Styles.trustedHeader}>
                    <img src="assets/tick.svg" alt="tick" />
                    <span className={Styles.trustedText}>
                      Easy to set up, maintain and optimized for mobile.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div>
                  <img
                    src="assets/trusted.png"
                    className={Styles.section3Image}
                    alt="tick"
                  />
                </div>
              </div>
            </div>
          </div>
          <Tab />
          <Price />
          <Faq />
          <Contact BookButtton={BookButtton} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
