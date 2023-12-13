import React, { Component } from 'react';
import Button from './button';
import './card.css';

export class Card extends Component {
  bgColors = ['#E8F5FF', '#DFDAE3', '#E5F9EC', '#F6CFD4', '#FCFAD3'];

  state = {
    count: 0,
    bgColor: '#E8F5FF',
  };

  countModifier = (symbol) => {
    switch (symbol) {
      case '+':
        this.adder();
        this.bgChanger();
        break;
      case '-':
        this.subtractor();
        this.bgChanger();
        break;
      case 'reset':
        this.resetter();
        this.bgChanger();
        break;
      default:
        console.log('default');
        break;
    }
  };

  randomColor = () => {
    let index = Math.floor(Math.random() * 5);
    return this.bgColors[index];
  };

  bgChanger = () => {
    let prevColor = this.state.bgColor;
    let newColor = prevColor;
    while (newColor === prevColor) {
      newColor = this.randomColor();
    }

    this.setState({
      bgColor: newColor,
    });
  };

  adder = () => {
    let c = this.state.count;
    c++;
    this.setState({
      count: c,
    });
  };

  subtractor = () => {
    let c = this.state.count;
    c--;
    this.setState({
      count: c,
    });
  };

  resetter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <main style={{ backgroundColor: this.state.bgColor }}>
        <h1>{this.state.count}</h1>
        <Button symbol={'+'} fnct={this.countModifier} />
        <Button symbol={'reset'} fnct={this.countModifier} />
        <Button symbol={'-'} fnct={this.countModifier} />
      </main>
    );
  }
}

export default Card;
