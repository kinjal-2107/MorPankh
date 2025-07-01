import { Image, Row, Col } from "react-bootstrap";
import img from "../assets/Brand.png";
import "../page/style.css";
import img1 from "../assets/instagram.webp";
import img2 from "../assets/whatsappicon.png";
import Contactus from "../page/contactus";

const Footer = () => {
  return (
    <>
      <div className="bg ">
        <div className="d-flex justify-content-center justify-content-md-start">
          <Image src={img} width={450} height={100} className="logo m-4  " />
        </div>
        <Row
          className="text-center text-md-start mx-5 "
          style={{ color: "white" }}
        >
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Main Menu</h5>
            <ul className="list-unstyled">
              <li href="/">Shop By Product</li>
              <li>Collection</li>
              <li>Track Order</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/Contactus"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Call Us
                </a>
              </li>
              <li>Chat With Us</li>
            </ul>
          </Col>

          <Col>
            <div className="fs-5 fw-medium mb-2">Address</div>
            <address className="mb-3 text-white">
              5, Vaishnavdevi Amour, Near Nirvana Complex,
              <br />
              Jahangirabaad, Surat, Gujarat - 395005
              <br />
              Contact No:- 9004239529
            </address>
          </Col>
          <Col>
            <div className="fs-5 fw-medium mb-2">Get the App</div>
            <div className="d-flex gap-2">
              <a
                href="https://www.instagram.com/mor.pankh_?igsh=MTRqNGRjYnVyNDVvdA=="
                target="_blank"
              >
                <img width={40} src={img1} alt="Social Icon 1" />
              </a>
              <a href="" target="_blank">
                <img width={40} src={img2} alt="Social Icon 2" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
