import React from 'react';
// import '../css/Modal.css';

const Modal = ({ post, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>{post.title}</h2>
        <p>{post.fullText}</p>
      </div>
    </div>
  );
};

export default Modal;
