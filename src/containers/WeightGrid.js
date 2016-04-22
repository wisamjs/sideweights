import React, { Component } from 'react';
import Weight from '../components/Weight';
import Label from '../components/Label';


class WeightGrid extends Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
    <div>
      <div className="flex justify-around" style={styles}>
      <div className="flex flex-column">
      <Label>10</Label>
        <Weight type="tiny" amount="2.5"></Weight>
      </div>
        <div className="flex flex-column">
          <Label>10</Label>
          <Weight type="small" amount="5"></Weight>
        </div>
        <div className="flex flex-column">
          <Label>10</Label>
          <Weight type="medium" amount="10"></Weight>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-column">
          <Label>10</Label>
          <Weight type="big" amount="25"></Weight>
        </div>
        <div className="flex flex-column">
          <Label>10</Label>
          <Weight type="bigger" amount="35"></Weight>
        </div>
        <div className="flex flex-column">
          <Label>10</Label>
          <Weight type="huge" amount="45"></Weight>
        </div>
      </div>
    </div>
      )
  }
}

const styles = {
  'minHeight': '115px'
};

export default WeightGrid;
