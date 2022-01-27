import React, { Component } from "react";
import "./App.css";
import {
  Navigation,
  Logo,
  ImageLinkForm,
  FaceRecognition,
  Rank,
  Particles,
  particlesOptions,
  SignIn,
  Register,
  initialState,
} from "./imports";

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        name: data.name,
        email: data.email,
        id: data.id,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onInputChange = (ev) => {
    this.setState({ input: ev.target.value });
  };

  onSubmit = () => {
    const { name, email, id, joined } = this.state.user;
    this.setState({ imageUrl: this.state.input });

    fetch("https://floating-inlet-42916.herokuapp.com/image", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
        input: this.state.input,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { entries, response } = data;
        this.setState({
          user: { name, email, id, joined, entries: entries },
        });
        this.displayFaceBox(
          this.calculateFaceLocation(response.outputs[0].data.regions)
        );
      })
      .catch((err) => console.log);
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    this.setState({ imgHeight: height });
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box });
  };

  onRouteChange = (route) => {
    if (route === "home") {
      this.setState({ isSigned: true });
    } else if (route === "signin" || route === "register") {
      this.setState(initialState);
    }
    this.setState({ route: route });
  };

  render() {
    const { isSigned, route, box, imageUrl, imgHeight } = this.state;

    return (
      <div className="App section__margin glass">
        <Particles className="particles" params={particlesOptions} />
        <Navigation isSigned={isSigned} onRouteChange={this.onRouteChange} />
        <Logo />

        {route === "home" ? (
          <>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition
              faceBox={box}
              imageUrl={imageUrl}
              imgHeight={imgHeight}
            />
          </>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}
export default App;
