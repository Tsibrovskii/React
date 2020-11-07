import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = () => {
  return ReactDOM.createPortal(
    <div className='modal' onClick={this.props.closeModal}>
      <div className='modal_inner' onClick={e => e.stopPropagation()}>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;