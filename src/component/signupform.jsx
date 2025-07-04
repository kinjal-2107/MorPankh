import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hideModal } from "../redux/slice/formslice";
import "../component/login.css";
import { useState } from "react";
import axios from "axios";

const SearchModal = ({ show }) => {
  const initialstate = {
    YourName: "Kinjal",
    ContactNumber: "9726365603",
    Email: "kinjalpatel01797@gmail.com",
    Password: "Kinjal@2107",
  };
  const [formdata, setformdata] = useState(initialstate);
  const signup = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handlesignup = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/newuser",
        formdata
      );
      console.log(res.data);
    } catch {
      console.log(" Not create an account ");
    }
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="glass-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>SIGNUP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="YourName"
              value={formdata.YourName}
              onChange={signup}
            />

            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your Contact"
              name="ContactNumber"
              value={formdata.ContactNumber}
              onChange={signup}
            />

            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              name="Email"
              value={formdata.Email}
              onChange={signup}
            />

            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              name="Password"
              value={formdata.Password}
              onChange={signup}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-success"
          variant="secondary"
          onClick={handlesignup}
        >
          Submit
        </Button>
        <Button className="bg-success" onClick={handleClose}>
          CLOSE
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
