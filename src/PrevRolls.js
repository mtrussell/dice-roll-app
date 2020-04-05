import React, { Component } from 'react';
import './PrevRolls.css'

class PrevRolls extends Component {
  constructor() {
    super();
    this.displayRolls = this.displayRolls.bind(this);
  }

  displayRolls() {
    return this.props.rolls.map((roll, index) => (
      <p>
        Roll {this.props.rolls.length - index} <i className={`fas fa-dice-${roll.first}`} ></i> <i className={`fas fa-dice-${roll.second}`} ></i>
      </p>
    ));
  }
  
  render() {
    return(
      <div className='PrevRolls'>
        <div className='PrevRolls-list'>
          {this.displayRolls()}
        </div>
      </div>
    );
  }
}

export default PrevRolls;