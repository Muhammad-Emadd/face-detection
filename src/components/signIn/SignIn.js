import React, { Component } from "react";
import "./signin.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      singInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (ev) => {
    const email = ev.target.value;
    this.setState({ singInEmail: email });
  };

  onEmialPasswordChange = (ev) => {
    const password = ev.target.value;
    this.setState({ signInPassword: password });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch("https://floating-inlet-42916.herokuapp.com/signin", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.singInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="facerec__signin flex__box">
          <div className="facerec__signin-container flex__box">
            <div className="facerec__signin-container_brand-title">Sign In</div>
            <div className="facerec__signin-container_inputs flex__box">
              <div className="facerec__signin-container_inputs-pack">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="example@test.com"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="facerec__signin-container_inputs-pack">
                <label>PASSWORD</label>
                <input
                  onChange={this.onEmialPasswordChange}
                  type="password"
                  placeholder="Min 6 charaters long"
                />
              </div>
              <button className="grow btn__two" type="submit">
                Log In
              </button>
            </div>
            <p
              className="register-btn btn__one "
              onClick={() => onRouteChange("register")}
            >
              Create a new account
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
