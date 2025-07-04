import { Image, Row, Col } from "react-bootstrap";
import "../page/style.css";
import { FaPhoneAlt } from "react-icons/fa";
import img1 from "../assets/instagram.webp";
import img2 from "../assets/whatsappicon.png";
import Contactus from "../page/contactus";

const Footer = () => {
  return (
    <>
      <div className="bg py-5">
        <Row className="text-center text-md-start text-white px-3 px-md-5">
          {/* Main Menu */}
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Main Menu</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Shop By Product
                </a>
              </li>
              <li>
                <a
                  href="/collection"
                  className="text-white text-decoration-none"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  className="text-white text-decoration-none"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </Col>

          {/* Support */}
          <Col xs={12} md={4} lg={2} className="mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/Contactus"
                  className="text-white text-decoration-none"
                >
                  Call Us
                </a>
              </li>
              <li>
                <a href="/chat" className="text-white text-decoration-none">
                  Chat With Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Address */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <h5>Address</h5>
            <address className="text-white">
              5, Vaishnavdevi Amour, Near Nirvana Complex,
              <br />
              Jahangirabaad, Surat, Gujarat - 395005
              <br />
              <FaPhoneAlt className="me-2" />
              <a
                href="tel:9004239529"
                className="text-white text-decoration-none"
              >
                9004239529
              </a>
            </address>
          </Col>

          {/* Get the App / Social Media */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <h5>Get the App</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://www.instagram.com/mor.pankh_?igsh=MTRqNGRjYnVyNDVvdA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width={40} src={img1} alt="Instagram" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img width={40} src={img2} alt="WhatsApp" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
