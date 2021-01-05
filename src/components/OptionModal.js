import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.closeModalWindow}
      contentLabel="Select Option"
      closeTimeoutMS={250}
      className="modal-content-custom-name"
    >
      <h3>Selected option: </h3>{" "}
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.closeModalWindow}> Got it! </button>
    </Modal>
  );
};

export default OptionModal;
