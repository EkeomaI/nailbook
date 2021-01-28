import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./login/Login";
import history from "../history";
import "./Header.css";

const Header = ({ token, setToken }) => {
  const refDash = useRef(null);
  const refPref = useRef(null);
  const refList = useRef(null);

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/":
        refDash.current.className = "item";
        refPref.current.className = "item";
        refList.current.className = "active item";
        break;
      case "/preferences":
        refDash.current.className = "item";
        refPref.current.className = "active item";
        refList.current.className = "item";
        break;
      case "/dashboard":
        refDash.current.className = "active item";
        refPref.current.className = "item";
        refList.current.className = "item";
        break;
      default:
        refDash.current.className = "item";
        refPref.current.className = "item";
        refList.current.className = "active item";
    }
  }, []);
  const navList = () => {
    refDash.current.className = "item";
    refPref.current.className = "item";
    refList.current.className = "active item";
  };
  const navPref = () => {
    refDash.current.className = "item";
    refPref.current.className = "active item";
    refList.current.className = "item";
  };
  const navDash = () => {
    refList.current.className = "item";
    refDash.current.className = "active item";
    refPref.current.className = "item";
  };

  const onAuthClick = (e) => {
    e.preventDefault();
    if (!token) {
      return (
        <React.Fragment>
          <Login setToken={setToken} />
        </React.Fragment>
      );
    }
    if (token) {
      localStorage.clear();
      setToken(null);
      history.push("/login");
    }
  };
  if (!token) {
    history.push("/login");
    return (
      <React.Fragment>
        <Login setToken={setToken} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="ui secondary pointing menu">
        <Link onClick={navList} to="/" className="active item" ref={refList}>
          Home
        </Link>
        <div className="right menu">
          <Link
            onClick={navDash}
            to="/dashboard"
            className="item"
            ref={refDash}
          >
            Dashboard
          </Link>
          <Link
            onClick={navPref}
            to="/preferences"
            className="item"
            ref={refPref}
          >
            Preferences
          </Link>
          <button onClick={onAuthClick} className="ui item">
            {!token ? "Login" : "Logout"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
