import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../actions';
import Event from './Event';
import './Events.css';

class Events extends React.Component {

  constructor() {
    super();
    this.state = { eventNumber: 0 };
    this.eventsList = [];
  }

  componentDidMount() {
    this.props.fetchToken();
  }

  componentDidUpdate() {
    this.populateEventsList();
  }

  populateEventsList() {
    this.eventsList.length === 0 && this.props.events && this.props.events.map(eventDate =>
      eventDate.events.map(event =>
        this.eventsList.push({date: event.date, uuid: event.uuid})
      )
    );
  }

  onNext = () => {
    if (this.state.eventNumber === this.eventsList.length - 1) {
      this.setState({eventNumber: 0});
    } else {
      this.setState({eventNumber: this.state.eventNumber + 1});
    }
  }

  onPrevious = () => {
    if (this.state.eventNumber === 0) {
      this.setState({eventNumber: this.eventsList.length - 1});
    } else {
      this.setState({eventNumber: this.state.eventNumber - 1});
    }
  }

  renderEvent() {
    let selectedEvent;
    if (this.state.eventNumber === 0) {
      selectedEvent = this.props.events && this.props.events[0].events[0];
    } else {
      selectedEvent = this.props.events && this.props.events.filter(event =>
        event.date === this.eventsList[this.state.eventNumber].date
      );
      selectedEvent = selectedEvent[0].events.filter(event =>
        event.uuid === this.eventsList[this.state.eventNumber].uuid
      );
      selectedEvent = selectedEvent[0];
    }
    return (
      <div className="event">
        <Event event={selectedEvent} />
        <button onClick={this.onPrevious} className="buttonPrevious">Previous</button>
        <button onClick={this.onNext} className="buttonNext">Next</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderEvent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events.events };
}

export default connect(mapStateToProps, {fetchToken})(Events);