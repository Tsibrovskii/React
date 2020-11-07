import React from 'react';
import Modal from './Modal';
import './Event.css';

class Event extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { event } = this.props;
    return (
      <div key={event && event.uuid}>
        <img src={event && 'https://zapomni.lastick.ru/' + event.poster.path} className="image"/>
        <div>
          <span className="fontColor">{event && event.name.ru}</span>
        </div>
        <div>
          <span className="fontColor">{event && event.date}</span>
        </div>
        <button onClick={this.toggleModal} className="buttonMoreInfo">Подробнее</button>
        {this.state.showModal ? 
          <Modal
            name={event && event.name.ru}
            description={event && event.description.ru}
            closeModal={this.toggleModal}
          />
          : null
        }
      </div>
    );
  }
}

export default Event;