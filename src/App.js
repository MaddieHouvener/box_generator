import React, { useState } from 'react';
import './App.css';
// import './boxColor.css'

import Display from './components/Display';
import New from './components/New';

function App() {
  const [state, setState] = useState([]);

  const makeNewBox = (color, height, width) => {
    setState([...state, {color, height, width}]);
    console.log('this is from app.js and this is set state: ', setState)
  }

  return (
    <div className="App">
      <Display newBoxForm = {makeNewBox} />
      <New boxes={state} />
    </div>
  );
}

export default App;
