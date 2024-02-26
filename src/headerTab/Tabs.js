import React from 'react';
import './tabs.css';

// const a = { name: 'savi', age: 23, isFemale: true };

const TABS = ['CLOCK', 'STOPWATCH', 'TODOLIST'];

const Tabs = ({ currentSelected, onItemClick }) => {
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
      {TABS.map((item) => {
        return (
          <h2
            key={item}
            className='tab-item'
            style={{
              color: 'white',
              margin: 10,
              textDecorationLine:
                currentSelected === item ? 'Underline' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => {
              onItemClick(item);
            }}
          >
            {item}
          </h2>
        );
      })}
    </div>
  );
};

export default Tabs;
