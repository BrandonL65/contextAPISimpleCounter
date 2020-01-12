import React, { Component } from 'react';
import { CounterContext } from "../contexts/CounterContext"
import IncrementButton from './IncrementButton';
class CounterSection extends Component {
  static contextType = CounterContext;
  render() { 
    return ( 
      <div>
        <h2>{this.context.count}</h2>
        <IncrementButton />
      </div>
     );
  }
}
 
export default CounterSection;