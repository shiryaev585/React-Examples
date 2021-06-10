import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState({
    modal: false,
  });

  const openModal = () => {
    setModal({
      ...modal,
      modal: true,
    });
  };

  const closeModal = () => {
    setModal({
      ...modal,
      modal: false,
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openModal} className="open-btn">
          Open Modal
        </button>
      </div>

      <Modal
        isOpened={modal.modal}
        title={"Modal title"}
        onModalClose={closeModal}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </Modal>
    </div>
  );
}

export default App;
