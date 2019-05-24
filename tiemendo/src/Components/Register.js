import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "../actions";
import { CSSTransition } from "react-transition-group";

class Register extends React.Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    appearRegister: true
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
      <div className="register-component">
        <CSSTransition
          in={this.state.appearRegister}
          appear={true}
          timeout={500}
          classNames="fade"
        >
          <div className="register">
            <h1 className="register-text">Register</h1>
            <hr />
            <form onSubmit={this.handleSubmit} className="form">
              <input
                onChange={this.handleChanges}
                placeholder="username"
                name="username"
                value={this.state.username}
                className="input"
                required
              />
              <input
                onChange={this.handleChanges}
                placeholder="password"
                name="password"
                value={this.state.password}
                className="input"
                required
              />
              <button className="register-button">Register</button>
              <p>Already have an account?</p>
              <NavLink className="login-link" to="/login">
                *Login
              </NavLink>
            </form>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
