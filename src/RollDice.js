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
  }

  randomDice() {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const dice = [newDie1, newDie2];
    return dice;
  }

  roll(dice) {
    this.setState(prevState => {
      return {
        die1: dice[0], 
        die2: dice[1], 
        rolling: true 
      }     
    });
    setTimeout(() => {
      this.setState({
        rolling: false,
      });
    }, 1000);
  }

  rollsList(dice) {
    this.setState(prevState => {
      return{
        rolls: [...prevState.rolls, {first: dice[0], second: dice[1]}]
      }
    });
  }

  handleClick() {
    const dice = this.randomDice();
    this.roll(dice);
    setTimeout(() => {
      this.rollsList(dice);
    }, 1000);
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
      </div>
    );
  }
}

export default RollDice;