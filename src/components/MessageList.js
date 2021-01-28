import React from "react";

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
  }
  onMessageFormSubmit = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onMessageSubmit(this.state.comment, id);
  };
  render() {
    return (
      <div className="extra content">
        <form
          onSubmit={this.onMessageFormSubmit.bind(this, this.props.product.id)}
        >
          <input
            className="comment-input"
            onChange={(e) => this.setState({ comment: e.target.value })}
            type="text"
            placeholder="Send Message ..."
          />
        </form>
      </div>
    );
  }
}
export default MessageList;
