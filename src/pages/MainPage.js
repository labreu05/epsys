import React, { Component } from 'react';
import axios from 'axios';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3004/api/users')
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res.data);
      });
  }

  render() {
    console.log(this.state);

    return (
      <div className="main-page">
        {this.state.data.map((value, index) => {
          return (
            <h1 key={index}>{value.author}</h1>
          );
        })}
      </div>
    );
  }
}

export default MainPage;
