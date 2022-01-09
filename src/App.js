import React from 'react';
import './App.css';
import CompContainer from './containers/CompContainer';
import HandContainer from './containers/HandContainer';
import TopScore from './components/TopScore';
import Referee from './components/Referee';
import Replay from './components/Replay';

const App = () => {
  return (
    <div className="App">
        <TopScore />
        <CompContainer />
        <HandContainer />
        <Referee />
        <Replay />
    </div>
  );
}

export default App;
