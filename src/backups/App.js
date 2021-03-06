import React, { useRef } from "react";
import { Router, Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Preferences from "./Preferences";
import Login from "../components/login/Login";
import useToken from "../hooks/useToken";
import Header from "./Header";
import ProductList from "./ProductList";
import history from "../history";
import { data_obj } from "../db/productData";
import "./App.css";

const App = () => {
  const { token, setToken } = useToken();
  const prodRef = useRef();

  // message events
  const onMessageSubmit = (comment, id) => {
    // new comment is submitted
    // create an entry in the respective dataset
    //console.log(prodRef.current);
    console.log(comment, id);
  };

  // likes events
  const onLikeClick = (numberOfLikes, id) => {
    console.log(numberOfLikes, id);
  };

  if (!token) {
    return (
      <React.Fragment>
        <Login setToken={setToken} token={token} />
      </React.Fragment>
    );
  }
  return (
    <div className="wrapper">
      <h1 className="brand">Evergreen Group</h1>
      <Router history={history}>
        <Header token={token} setToken={setToken} />
        <Switch>
          <Route path="/" exact>
            <div
              className="ui three stackable cards container"
              style={{ marginTop: "2em" }}
            >
              <ProductList
                data={data_obj}
                onLikeClick={onLikeClick}
                onMessageSubmit={onMessageSubmit}
                ref={prodRef}
                prof={prodRef}
              />
            </div>
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
