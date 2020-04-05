import React, { Component } from 'react';
import Die from './Die';
import PrevRolls from './PrevRolls';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'two',
      rolling: false,
      rolls: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.clearRolls = this.clearRolls.bind(this);
  }

  randomDice() {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    return [newDie1, newDie2];
  }

  roll(dice) {
    this.setState(prevState => {
      return {
        die1: dice[0], 
        die2: dice[1], 
        rolling: true,
        rolls: [{first: dice[0], second: dice[1]}, ...prevState.rolls]
      }     
    });
  }

  handleClick() {
    const dice = this.randomDice();
    this.roll(dice);
    setTimeout(() => {
      this.setState({
        rolling: false,
      });
    }, 1000);
  }

  clearRolls() {
    this.setState({ rolls: [] });
  }

  render() {
    let rollButton = this.state.rolling ? 'Rolling...' : 'Roll Dice!';

    return(
      <div className='RollDice'>
        <div className='RollDice-dice'>
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.handleClick} disabled={this.state.rolling}>{rollButton}</button>
        <PrevRolls rolls={this.state.rolls} />
        {this.state.rolls.length > 0 ? <button className='clear' onClick={this.clearRolls}>Clear</button> : ''}
      </div>
    );
  }
}

export default RollDice;