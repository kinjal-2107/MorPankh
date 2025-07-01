import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hideModal } from "../redux/slice/formslice";

const SearchModal = ({ show }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>SIGNUP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />

            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Contact" />

            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" />

            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-success"
          variant="secondary"
          onClick={handleClose}
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
