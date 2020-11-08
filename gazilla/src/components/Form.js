import React from 'react';
import { connect } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import { submitForm } from './../actions';
import Modal from './Modal';

class Form extends React.Component {
  constructor () {
    super();

    this.state = {
      phone: '',
      dateTime: null,
      comment: '',
      isAgree: false,
      showModal: false,
      modalText: null
    }
  }

  componentDidUpdate() {
    if (!this.state.modalText) {
      this.handleResponse(this.props.response);
    }
  }

  handleResponse = (response) => {
    console.log('in handle');
    if (!response) {
      return;
    }
    const respObject = JSON.parse(response.response);
    if (!respObject) {
      return;
    }
    if (!respObject.error) {
      this.setState({modalText: 'Success'});
    } else if (respObject.error.code === 503) {
      this.setState({modalText: 'Something went wrong'});
    } else {
      this.setState({modalText: [respObject.error.reason, respObject.error.detail].join(', ')})
    }
    this.setState({showModal: true});
  }

  onSubmit = () => {
    this.state.modalText = null;
    const requestBody = this.createBody();
    this.props.submitForm(requestBody);
  }

  createBody = () => {
    return JSON.stringify(
      {
        id: 1,
        'data': {
          'phone': this.state.phone,
          'date': new Date(this.state.dateTime).getTime(),
          'comment': this.state.comment
        }
      }
    );
  }

  render() {
    return(
      <div>
        <div>
          <label>Enter Phone Number</label>
          <input
            value={this.state.phone}
            onChange={e => this.setState({phone: e.target.value})}
          />
        </div>
        <div>
          <label>Enter Date and Time</label>
          <DateTimePicker
            onChange={value => this.setState({dateTime: value})}
            value={this.state.dateTime}
          />
        </div>
        <div>
          <label>Enter Comment</label>
          <input
            value={this.state.comment}
            onChange={e => this.setState({comment: e.target.value})}
          />
        </div>
        <div>
          <label>Agree with terms</label>
          <input
            type='checkbox'
            value={this.state.isAgree}
            onChange={() => this.setState({isAgree: !this.state.isAgree})}
          />
        </div>
        <div>
          <button
            disabled={!(this.state.phone && this.state.dateTime && this.state.isAgree)}
            onClick={() => this.onSubmit()}
          >
            Submit
          </button>
        </div>
        {this.state.showModal ?
          <Modal
            text={this.state.modalText}
            closeModal={() => this.setState({showModal: false})}
          />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { response: state.response };
}

export default connect(mapStateToProps, {submitForm})(Form);