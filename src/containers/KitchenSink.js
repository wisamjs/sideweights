import React, { Component } from 'react';
import Greeting from '../components/Greeting';
import Weight from '../components/Weight';

class KitchenSink extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
      <Greeting>Hi</Greeting>
      <Weight type="tiny" amount="2.5"></Weight>
      <Weight type="small" amount="5"></Weight>
      <Weight type="medium" amount="10"></Weight>
      <Weight type="big" amount="25"></Weight>
      <Weight type="bigger" amount="35"></Weight>
      <Weight type="huge" amount="45"></Weight>
      </div>
      )
  }
}

export default KitchenSink;
