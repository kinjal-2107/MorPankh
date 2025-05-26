import Image from "react-bootstrap/Image";
import img from "../assets/Brand.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/esm/Container";
import "../page/style.css";

const Footer = () => {
  return (
    <>
      <div className="bg">
        <div className="d-flex justify-content-center justify-content-md-start">
          <Image src={img} width={450} height={100} className="logo m-4  " />
        </div>
        <Row
          className="text-center text-md-start m-5 "
          style={{ color: "white" }}
        >
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Main Menu</h5>
            <ul className="list-unstyled">
              <li href="/">Shop By Product</li>
              <li>Collection</li>
              <li>Track Order</li>
              <li>Contact Information</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Our Policy</h5>
            <ul className="list-unstyled">
              <li>Exchange Policy</li>
              <li>Return Policy</li>
              <li>Shipping Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Call Us</li>
              <li>Chat With Us</li>
              <li>Exchange and Replacement</li>
              <li>Cancel Order</li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
