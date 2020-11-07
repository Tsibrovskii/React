import React from 'react';
import Modal from './Modal';

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
        {event && event.date}
        <button onClick={this.toggleModal}>Подробнее</button>
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