import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfLikes: this.props.product.likes, isLiked: false };
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onUnLikeClick = this.onUnLikeClick.bind(this);
  }
  componentDidUpdate() {
    //do something
  }

  onLikeClick(id, e) {
    e.stopPropagation();
    this.setState(
      (state) => {
        return {
          numberOfLikes: state.numberOfLikes + 1,
          isLiked: !state.isLiked,
        };
      },
      () => {
        //console.log(this.state.numberOfLikes);
        this.props.onLikeClick(this.state.numberOfLikes, id);
      }
    );
  }
  onNumberOfLikes = (id, e) => {
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
  };

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <span
            onClick={(e) => this.onNumberOfLikes(this.props.product.id, e)}
            className="right floated"
          >
            <i className="heart like red icon"></i>
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
