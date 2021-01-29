import React from "react";
import { LikedIcon, UnLikedIcon, LikeIcon } from "./LikeIcon";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfLikes: this.props.product.likes, isLiked: null };
  }

  onLike(id, e) {
    e.preventDefault();
    e.stopPropagation();
    //console.log("liked called");
    this.setState(
      (state) => {
        return {
          numberOfLikes: state.numberOfLikes + 1,
          isLiked: !state.isLiked,
        };
      },
      () => {
        this.props.onLikeClick(this.state.numberOfLikes, id);
      }
    );
  }
  onUnLike(id, e) {
    e.preventDefault();
    e.stopPropagation();
    //console.log("unliked called");
    this.setState(
      (state) => {
        return {
          numberOfLikes: state.numberOfLikes - 1,
          isLiked: !state.isLiked,
        };
      },
      () => {
        this.props.onLikeClick(this.state.numberOfLikes, id);
      }
    );
  }
  render() {
    const isLikedToggle = this.state.isLiked;
    //console.log(isLikedToggle);
    //console.log("render called");
    let likes;
    switch (isLikedToggle) {
      case false:
        likes = (
          <LikedIcon
            product={this.props.product}
            onClick={(e) => this.onLike(this.props.product.id, e)}
          />
        );
        break;
      case true:
        likes = (
          <UnLikedIcon
            product={this.props.product}
            onClick={(e) => this.onUnLike(this.props.product.id, e)}
          />
        );
        break;
      default:
        likes = (
          <LikeIcon
            product={this.props.product}
            onClick={(e) => {
              this.onLike(this.props.product.id, e);
            }}
          />
        );
        break;
    }

    return (
      <React.Fragment>
        <div className="content">
          {likes}
          <i className="comment icon"></i>
          {`${this.props.product.comments.length} messages`}
        </div>
      </React.Fragment>
    );
  }
}
export default Likes;
