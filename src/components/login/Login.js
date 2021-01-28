import React, { useState } from "react";
import PropTypes from "prop-types";
import loginUser from "../../apis/loginUser";
import history from "../../history";
import "../login/Login.css";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    //update state variables
    setToken(token.data);
  };

  return (
    <div className="login-wrapper ui container">
      <h1>Please Login</h1>
      <div className="form-outline">
        <form className="ui form" onSubmit={onSubmit}>
          <label>
            <h3>Username</h3>
          </label>
          <input
            className="ui field"
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            autoComplete="off"
            required
          />

          <label>
            <h3>Password</h3>
          </label>
          <input
            className="ui field"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <div className="button-wrapper">
            <button
              onClick={() => history.push("/")}
              className="ui primary basic button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
