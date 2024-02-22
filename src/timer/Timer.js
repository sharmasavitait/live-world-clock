import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  const timer = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setSeconds((preVal) => {
          const newVal = preVal + 1;
          if (newVal === 60) {
            setMinuts((prevMnts) => {
              return prevMnts + 1;
            });
            return 0;
          }
          return newVal;
        });
      }, 1000);
    } else {
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [isRunning]);

  const reset = () => {
    setSeconds(0);
    setMinuts(0);
    setisRunning(false);
  };

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
    setisRunning(false);
  };

  const start = () => {
    setisRunning(true);
  };

  return (
    <>
      <div className='timer_view'>
        {/* <div className='timer'><p>Timer</p></div> */}
        <div className='timer_text'>{minuts < 10 ? '0' + minuts : minuts}</div>
        <p>:</p>
        <div className='timer_text'>
          {seconds < 10 ? '0' + seconds : seconds}
        </div>
      </div>

      <div className='button'>
        <button className='set' onClick={reset}>
          Reset
        </button>
        <button className='stop' onClick={isRunning ? stop : start}>
          {isRunning ? 'stop' : 'start'}
        </button>
      </div>
    </>
  );
}
