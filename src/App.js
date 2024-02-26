import React, { useState, useEffect, useRef } from 'react';

import Clock from './clock/Clock';
import Timer from './timer/Timer';
import Tabs from './headerTab/Tabs';
import Todolist from './todolist/Todolist';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('CLOCK');
  const [todo, setTodo] = useState([]);
  const needToUpdateLocalStorage = useRef(false);

  useEffect(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem('@TODOS'));
    if (storedTodos) {
      setTodo(storedTodos);
    }
  }, []);

  useEffect(() => {
    try {
      if (needToUpdateLocalStorage.current) {
        window.localStorage.setItem('@TODOS', JSON.stringify(todo));
      } else {
        needToUpdateLocalStorage.current = true;
      }
    } catch (error) {}
  }, [todo]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Tabs
          currentSelected={currentTab}
          onItemClick={(value) => {
            setCurrentTab(value);
          }}
        />
      </header>
      {currentTab === 'CLOCK' ? (
        <Clock />
      ) : currentTab === 'STOPWATCH' ? (
        <Timer />
      ) : (
        <Todolist list={todo} setList={setTodo} />
      )}
    </div>
  );
}

export default App;
