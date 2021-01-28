import React from "react";
import timeConverter from "../utility/timeConverter";
import "./ProductList.css";
import Likes from "./Likes";
import MessageList from "./MessageList";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  //when I am first mounted, i need to call...
  componentDidMount() {
    //do something
  }

  render() {
    const renderedList = Object.values(this.props.data).map((product) => {
      return (
        <div className="ui card" key={product.id}>
          <div className="content">
            <div className="right floated meta">
              {timeConverter(product.createdAt)}
            </div>
            <img
              className="ui avatar image"
              src={`${process.env.PUBLIC_URL}/assets/images/${product.image_url}`}
              alt="nails"
            />
            {product.author}
          </div>
          <div className="image">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${product.image_url}`}
              alt="nails"
            />
          </div>
          <Likes onLikeClick={this.props.onLikeClick} product={product} />
          <MessageList
            onMessageSubmit={this.props.onMessageSubmit}
            product={product}
          />
        </div>
      );
    });
    return <React.Fragment>{renderedList}</React.Fragment>;
  }
}
export default ProductList;
