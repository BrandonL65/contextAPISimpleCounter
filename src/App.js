import React from 'react';
import './App.css';
import CounterContextProvider from './contexts/CounterContext';
import CounterSection from './components/CounterSection';

function App() {
  return (
    <div className="App">
      <h1>Simple count using context api</h1>
      <CounterContextProvider>
        <CounterSection />
      </CounterContextProvider>
    </div>
  );
}

export default App;
