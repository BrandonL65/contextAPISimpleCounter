import React, { Component, createContext } from 'react';

export const CounterContext = createContext();

class CounterContextProvider extends Component {
  state = { 
    count: 0
   }
   incrementCount = () => {
     this.setState({
       count: this.state.count + 1
     })
   }
   decrementCount = () => {
     this.setState({
       count: this.state.count - 1
     })
   }
  render() { 
    return (
      <CounterContext.Provider value = {{...this.state, incrementCount: this.incrementCount, decrementCount: this.decrementCount}}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}
 
export default CounterContextProvider;