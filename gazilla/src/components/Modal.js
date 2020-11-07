import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className='modal' onClick={this.props.closeModal}>
        <div className='modal_inner' onClick={e => e.stopPropagation()}>
          <h1>{this.props.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: this.props.description}}></div>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  } 
};

export default Modal;