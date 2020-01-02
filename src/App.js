import React from 'react';
//
import './App.css';
//
import Hello from './components/Hello/Hello'
import Other from './components/other/other'
import Example from './components/example/example.js'

function App() {
  return (
    <div className="App">
      <Hello />
      <Other/>
      <Example/>
    </div>
  );
}

export default App;
