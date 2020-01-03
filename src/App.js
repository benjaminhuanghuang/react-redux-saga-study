import React from 'react';
//
import './App.css';
//
import Hello from './components/Hello/Hello'
import Other from './components/other/other'
import Example from './components/example/example.js'

import Counter from './components/Counter'
import People from './components/People'

function App() {
  return (
    <div className="App">
      <Counter/>
      <People/>
      {/* <Hello />
      <Other/>
      <Example/> */}
    </div>
  );
}

export default App;
