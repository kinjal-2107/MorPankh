import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import insta from "../assets/instagram.webp";
import whatsapp from "../assets/whatsappicon.png";

const Contact = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right,rgb(206, 227, 163),rgb(187, 208, 167))",
        padding: "30px",
        minHeight: "90vh",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontWeight: "700", color: "#2c3e50" }}
        >
          CONTACT US
        </h2>
        <Row className="justify-content-center g-4">
          {/* Form Card */}
          <Col md={6}>
            <Card
              style={{
                background: "rgba(45, 44, 44, 0.25)",
                backdropfilter: "blur(10px)",
                border: "1px solid rgba(43, 43, 43, 0.2);",
              }}
              className="p-4 shadow-lg border-0 rounded-4"
            >
              <h4 className="mb-4 text-center text-success">
                We'd Love to Hear From You
              </h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fs-5">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fs-5">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fs-5">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your message"
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="success"
                    type="submit"
                    className="px-4 py-2 rounded-3 fs-5"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

          {/* Info Card */}
          <Col md={5}>
            <Card
              style={{
                background: "rgba(45, 44, 44, 0.25)",
                backdropfilter: "blur(10px)",
                border: "1px solid rgba(36, 35, 35, 0.2);",
              }}
              className="p-4 shadow-lg border-0 rounded-4 "
            >
              <h4 className="text-success mb-1">Address</h4>
              <p className="fs-5">
                5, Vaishnavdevi Amour, Near Nirvana Complex,
                <br />
                Jahangirabaad, Surat, Gujarat - 395005
              </p>

              <h4 className="text-success mt-4 mb-1">Phone</h4>
              <p className="fs-5">+91 9004239529</p>

              <h4 className="text-success mt-4 mb-1">Email</h4>
              <p className="fs-5">morpankh.shop@gmail.com</p>

              <h4 className="text-success mt-4 mb-3">Follow Us</h4>
              <div className="d-flex gap-3 align-items-center fs-5">
                <a
                  href="https://www.instagram.com/mor.pankh_?igsh=MTRqNGRjYnVyNDVvdA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="Instagram" width={35} />
                </a>
                <a
                  href="http://api.whatsapp.com/send/?phone=919004239529&text"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="WhatsApp" width={35} />
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
