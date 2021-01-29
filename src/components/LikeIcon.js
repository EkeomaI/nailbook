import React from "react";

export function LikedIcon(props) {
  return (
    <span className="right floated">
      <i onClick={props.onClick} className="heart like outline icon"></i>
      {`${props.product.likes} likes`}
    </span>
  );
}

export function UnLikedIcon(props) {
  return (
    <span className="right floated">
      <i onClick={props.onClick} className="heart red like icon"></i>
      {`${props.product.likes} likes`}
    </span>
  );
}

export function LikeIcon(props) {
  return (
    <span className="right floated">
      <i onClick={props.onClick} className="heart like outline icon"></i>
      {`${props.product.likes} likes`}
    </span>
  );
}
