import React from "react";

const Modal = (props) => {
  return (
    <div
      className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}
      style={{...props.style}}
    >
      <div className="modal__body">
        <button className="modal__close" onClick={props.onModalClose}>
          &#xD7;
        </button>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
