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

  roll() {
    let newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    
    let newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState(prevState => {
      return {
        die1: newDie1, 
        die2: newDie2, 
        rolling: true 
      }     
    });

    setTimeout(() => {
      this.setState({
        rolling: false,
      });
    }, 1000);
  }

  rollsList() {
    this.setState(prevState => {
      return{
        rolls: [...prevState.rolls, {first: this.state.die1, second: this.state.die2}]
      }
    });
  }

  handleClick() {
    this.roll();
    this.rollsList();
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