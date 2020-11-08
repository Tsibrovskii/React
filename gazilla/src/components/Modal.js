import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className='modal' onClick={this.props.closeModal}>
        <div className='modal_inner' onClick={e => e.stopPropagation()}>
          {this.props.text}
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
};

export default Modal;