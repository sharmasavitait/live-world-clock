import React from 'react';
import './tabs.css';

const a = { name: 'savi', age: 23, isFemale: true };

const TABS = ['Clock', 'Stopwatch'];

const Tabs = ({ isTimer, onItemClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: 10,
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2
        className='tab-item'
        style={{
          color: 'white',
          margin: 10,
          textDecorationLine: isTimer ? 'none' : 'Underline',
        }}
        onClick={() => {
          onItemClick(false);
        }}
      >
        {'CLOCK'}
      </h2>
      <h2
        className='tab-item'
        style={{
          color: 'white',
          margin: 10,
          textDecorationLine: isTimer ? 'Underline' : 'none',
        }}
        onClick={() => {
          onItemClick(true);
        }}
      >
        {'STOPWATCH'}
      </h2>
    </div>
  );
};

export default Tabs;
