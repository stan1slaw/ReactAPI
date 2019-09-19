import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Dimmer, Loader } from "semantic-ui-react";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      id: jwtDecode(window.localStorage.getItem("jwt")).id,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/news`, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ news: res, isLoading: false });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      user_id: this.state.id,
      title: this.state.title
    };
    fetch("http://localhost:3001/api/news", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => console.log())
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  deleteButton = id => {
    fetch(`http://localhost:3001/api/news/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(
        this.setState(prevState => ({
          news: prevState.news.filter(post => post.id !== id)
        }))
      );
  };
  updateButton = id => {
    const data = {
      title: "Updated"
    };

    fetch(`http://localhost:3001/api/news/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(error => console.log(`Yoy you have errors: ${error}`));
  };

  render() {
    if (this.state.isLoading)
      return (
        <div>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </div>
      );
    return (
      <div>
        <p className="text-center">You have {this.state.news.length} news</p>
        {this.state.news.map((post, key) => {
          return (
            <div key={key}>
              <p>
                {post.title}, <small>{post.user.username}</small>
               {console.log(post)}
              </p>
              <button onClick={() => this.deleteButton(post.id)}>Delete</button>
              <button onClick={() => this.updateButton(post.id)}>Update</button>
            </div>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <button type="submit">Add news</button>
        </form>
      </div>
    );
  }
}
