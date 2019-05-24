import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <div className="login-component">
        <div className="login-form">
          <form className="form" onSubmit={this.login}>
            <label for="username">Account</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              className="input"
            />
            <label for="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="••••••••"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              className="input"
            />
            <div className="flex-spacer" />
            {this.props.error && <p className="error">{this.props.error}</p>}

            <button className="login-button">Login</button>
            <p>Dont have an account?</p>
            <NavLink className="register-link" to="/">
              *Register
            </NavLink>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
