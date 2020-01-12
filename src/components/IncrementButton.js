import React, { Component } from 'react';
import { CounterContext } from "../contexts/CounterContext"
class IncrementButton extends Component {
  static contextType = CounterContext;
  render() { 
    return ( 
      <div>
        <button onClick = {this.context.incrementCount}>Increment count</button>
        <button onClick = {this.context.decrementCount}>Decrement count</button>
      </div>

    );
  }
}
 
export default IncrementButton;