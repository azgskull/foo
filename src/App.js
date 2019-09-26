import React from 'react';
import './App.css';

import Header from './lib/Header'

function App() {
  return (
    <div className="App">
      this is a header imported from ./lib
      <Header></Header>
    </div>
  );
}

export default App;
