import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../actions';

class Events extends React.Component {
  componentDidMount() {
    this.props.fetchToken();
  }

  renderList() {
    return this.props.events && this.props.events.map(eventDate => {
      return eventDate.events.map(event => {
        return (
          <div key={event.uuid}>
            <h2>{event.date}</h2>
          </div>
        );
      })
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events.events };
}

export default connect(mapStateToProps, {fetchToken})(Events);