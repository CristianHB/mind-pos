import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import FormAmbient from "../form-ambient/form-ambient";
import FormUser from "../form-user/form-user";

export default function ModalComponent({
  isOpen,
  size,
  toggle,
  userEdit,
  setDataUsers,
  ambientEdit,
  setDataAmbient,
}) {
   
  console.log(isOpen);

  const [isOpens, setState] = useState(isOpen);

  return (
    <> 
      <Modal
     
        isOpen={isOpen}
        size="md"
        toggle={() => toggle((prevState) => !prevState)}
       
      >
        <ModalBody style={{ padding: "20px", textAlign: "center" }}>
          <button
            onClick={() => toggle((prevState) => !prevState)}
            className="btn-close position-absolute top-0 end-0 m-4"
          ></button>
          <FormUser
            userEdit={userEdit}
            setDataUsers={setDataUsers}
            toggle={toggle}
          />
        </ModalBody>
      </Modal>
      <Modal
        
        isOpen={isOpen}
        size="md"
        toggle={() => toggle((prevState) => !prevState)}
      >
        <ModalBody style={{ padding: "20px", textAlign: "center" }}>
          <button
            onClick={() => toggle((prevState) => !prevState)}
            className="btn-close position-absolute top-0 end-0 m-4"
          ></button>
          <FormAmbient
            ambientEdit={ambientEdit}
            setDataAmbient={setDataAmbient}
            toggle={toggle}
          />
        </ModalBody>
      </Modal>
    </> 
  );
}
