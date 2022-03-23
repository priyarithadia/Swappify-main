import React, { useRef } from "react";
import ReactDom from "react-dom";
import './Model.css'
export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container11" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h3 >Sign Up</h3>
        <div className="SignIn">
        <label className="Label">Email: </label>
        <input className="input" type="text" placeholder="Please enter email address" />
        <label className="Label">Password: </label>
        <input className="input" type="text" placeholder="Please enter your password"/>
        <label className="Label">Confirm Password: </label>
        <input className="input" type="text" placeholder="Please confirm your password"/>
        <button className="button_SignIn">Sign Up</button>
        <p>Already have an account?</p>
        <button className="signin">SignIn</button>
        </div>
        
        <button className="close" onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};