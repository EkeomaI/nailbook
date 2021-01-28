import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.numberOfLikesRef = React.createRef();
    this.state = { numberOfLikes: this.props.product.likes, productId: "" };
  }
  componentDidUpdate() {}

  updateNumberOfLikes = (id, e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      (state) => {
        return { numberOfLikes: state.numberOfLikes + 1 };
      },
      () => {
        //console.log(this.state.numberOfLikes);
        this.props.onLikeClick(this.state.numberOfLikes, id);
      }
    );

    //console.log(this.numberOfLikesRef.current);
  };

  render() {
    //console.log(this.state.numberOfLikes);
    return (
      <React.Fragment>
        <div className="content">
          <span
            onClick={(e) => this.updateNumberOfLikes(this.props.product.id, e)}
            ref={this.numberOfLikesRef}
            className="right floated"
          >
            <i className="heart outline like icon"></i>
            {`${this.props.product.likes} likes`}
          </span>

          <i className="comment icon"></i>
          {`${this.props.product.comments.length} messages`}
        </div>
      </React.Fragment>
    );
  }
}
export default Likes;
