import React, { Component } from "react";
import "../signIn/signin.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      newName: "",
      newEmail: "",
      newPassword: "",
    };
  }

  onNameChange = (ev) => {
    const name = ev.target.value;
    this.setState({ newName: name });
  };

  onEmailChange = (ev) => {
    const email = ev.target.value;
    this.setState({ newEmail: email });
  };

  onPasswordChange = (ev) => {
    const password = ev.target.value;
    this.setState({ newPassword: password });
  };

  onSubmit = (e) => {
    e.preventdefault();
    fetch("https://floating-inlet-42916.herokuapp.com/register", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.newEmail,
        password: this.state.newPassword,
        name: this.state.newName,
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
    return (
      <form onSubmit={this.onSubmit}>
        <div className="facerec__signin flex__box">
          <div className="facerec__signin-container flex__box">
            <div className="facerec__signin-container_brand-title">
              Register
            </div>
            <div className="facerec__signin-container_inputs flex__box">
              <div className="facerec__signin-container_inputs-pack">
                <label>Name</label>
                <input
                  onChange={this.onNameChange}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="facerec__signin-container_inputs-pack">
                <label>E-mail</label>

                <input
                  onChange={this.onEmailChange}
                  type="email"
                  placeholder="example@test.com"
                />
              </div>
              <div className="facerec__signin-container_inputs-pack">
                <label>PASSWORD</label>
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  placeholder="Min 6 charaters long"
                />
              </div>
              <button className="grow btn__two" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;
