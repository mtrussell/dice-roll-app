import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    let rollDice = this.props.rolling && 'Die-rolling';
    let dieClass = `Die fas fa-dice-${this.props.face}`;

    return(
      <div className={rollDice}>
        <i className={dieClass} ></i>
      </div>
    );
  }
}

export default Die;