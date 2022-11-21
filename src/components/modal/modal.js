import React from "react";
import { Modal, ModalBody } from "reactstrap";

export default function ModalComponent({ isOpen, size, toggle, dataModal }) {
  return (
    <>
      <Modal isOpen={isOpen} size="md" toggle={() => toggle(false)}>
        <ModalBody style={{ padding: "20px", textAlign: "center" }}>
          <button
            onClick={() => toggle(false)}
            className="btn-close position-absolute top-0 end-0 m-4"
          ></button>
          {dataModal()}
        </ModalBody>
      </Modal>
    </>
  );
}
