import React, { Component } from 'react';
import './PrevRolls.css'

class PrevRolls extends Component {
  render() {
    let reversedRolls = this.props.rolls.reverse();
    let previousRolls = reversedRolls.map((roll, index) => (
      <p>
        Roll {this.props.rolls.length - index} <i className={`fas fa-dice-${roll.first}`} ></i> <i className={`fas fa-dice-${roll.second}`} ></i>
      </p>
    ));

    return(
      <div className='PrevRolls'>
        <div className='PrevRolls-list'>
          {previousRolls}
        </div>
      </div>
    );
  }
}

export default PrevRolls;