import React, { useState } from 'react';

import Clock from './clock/Clock';
import Timer from './timer/Timer';
import Tabs from './headerTab/Tabs';

import './App.css';

function App() {
  const [isTimer, setTimer] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <Tabs
          isTimer={isTimer}
          onItemClick={(value) => {
            setTimer(value);
          }}
        />
      </header>
      {isTimer ? <Timer /> : <Clock />}
    </div>
  );
}

export default App;
