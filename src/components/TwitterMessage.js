import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280,
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  countChars = () => {
    return this.state.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.message} onChange={event => this.handleMessageChange(event)} />
        <p>{this.countChars()} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
