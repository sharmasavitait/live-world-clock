import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import './Clock.css';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = date.getHours();
  const minuts = date.getMinutes();
  const secs = date.getSeconds();

  return (
    <div className='clock_view'>
      <TextTransition className='clock_text'>
        {hours < 10 ? `0${hours}` : `${hours}`}
      </TextTransition>
      <p>:</p>
      <TextTransition className='clock_text'>
        {minuts < 10 ? `0${minuts}` : `${minuts}`}
      </TextTransition>
      <p>:</p>
      <TextTransition className='clock_text'>
        {secs < 10 ? `0${secs}` : `${secs}`}
      </TextTransition>
    </div>
  );
}
