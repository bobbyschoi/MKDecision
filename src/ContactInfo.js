import React from "react";
import SubmitButton from "@material-ui/core/SubmitButton";
import UserInfo from "@material-ui/core/UserInfo";
import axios from "axios";
import { render } from "react-dom";

export default class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Full_name: "",
      email: "",
      message: ""
    };
  }

  Submit = async (name, email, message) => {
    try {
      name = this.state.Full_name;
      email = this.state.email;
      message = this.state.message;
      this.SendEmail(name, email, message);

      let StoreMessage = {
        message: message
      };
      StoreMessage = JSON.stringify(StoreMessage);
      await axios.post();
    } catch (err) {
      console.error(err, err.stack);
    }
  };

  SendEmail = async (name, email, message) => {
    try {
      let DeliverEmail = {
        name: name,
        email: email,
        message: message
      };
      DeveliverEmail = JSON.stringify(DeliverEmail);
      await axios.post();
    } catch (err) {
      console.error(err.err.stack);
    }
  };

  render() {
    return (
      <div>
        <h1>Contact Info</h1>
        <info className="info">
          <TextField
            id="FullName"
            fullWidth="true"
            label="Full Name"
            margin="normal"
            value={this.state.Full_name}
            onChange={event => this.setState({ FullName: event.target.value })}
          />
          <TextField
            fullWith="true"
            type="email"
            id="email"
            label="email"
            margin="normal"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <TextField
            fullWidth="true"
            id="message"
            label="message"
            margin="normal"
            value={this.state.message}
            onChange={event => this.setState({ message: event.target.value })}
          />
          <Button variant="contained" color="default" onClick={this.Submit}>
            Submit
          </Button>
        </info>
      </div>
    );
  }
}
