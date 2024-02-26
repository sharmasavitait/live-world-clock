import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import './Todolist.css';

const Todolist = (props) => {
  const [inputText, setInputText] = useState('');

  const onTextChange = (event) => {
    setInputText(event.target.value);
  };

  const itemAddToList = () => {
    if (inputText.trim().length > 0) {
      props.setList((preItems) => {
        return [...preItems, inputText];
      });
      setInputText('');
    }
  };

  const removeItem = (index) => {
    const newList = props.list.filter((item, i) => {
      return index !== i;
    });
    props.setList(newList);
  };

  return (
    <div className='main'>
      <div>
        <h1 className='header'>MY TODOs</h1>
      </div>
      <br />
      <input
        className='input'
        type='text'
        placeholder='add item'
        onChange={onTextChange}
        value={inputText}
      />
      <button className='click' onClick={itemAddToList}>
        Add
      </button>
      <ol className='ordrlst'>
        {props.list.map((val, index) => {
          return (
            <li key={val}>
              {val}
              <DeleteIcon
                className='dlt'
                onClick={() => {
                  removeItem(index);
                }}
              />
            </li>

            // </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Todolist;
