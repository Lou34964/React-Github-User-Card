  
import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      location: "",
      link: "",
      followers: "",
      following: "",
      bio: "",
      picture: "",
      userFollowers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Lou34964")
      .then(res => {
        //console.log(res);
        this.setState({
          name: res.data.name,
          username: res.data.username,
          location: res.data.location,
          link: res.data.html_url,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio,
          picture: res.data.avatar_url
        });
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/Lou34964/followers")
      .then(res => {
        //console.log(res);
        this.setState({
          userFollowers: res.data
        });
        console.log(this.state.userFollowers);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="cards">
        <div className="card">
          <img src={this.state.picture} alt="Profile" />
          <div className="card-info">
            <h3 className="name">{this.state.name}</h3>
            <p className="username">{this.state.username}</p>
            <p>Location: {this.state.location}</p>
            <p>
              Profile:
              <a href={this.state.link}>{this.state.link}</a>
            </p>
            <p>Followers: {this.state.followers}</p>
            <p>Following: {this.state.following}</p>
            <p>Bio: {this.state.bio}</p>
          </div>
        </div>
        <h1>Fallowers:</h1>
        {this.state.userFollowers.map((item, index) => {
          console.log(this.state.userFollowers)
          return (
            <UserCard
              key={index}
              name={item.login}
              picture={item.avatar_url}
              profile={item.html_url}
            />
          );
        })}
      </div>
    );
  }
}

export default App;