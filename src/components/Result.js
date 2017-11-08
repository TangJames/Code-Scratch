import React, { Component } from 'react';

class Result extends Component {
  render() {
    console.log(this.props.data);

    return <div><a href="#">{this.props.data.title}</a></div>;
  }
}

export default Result;
