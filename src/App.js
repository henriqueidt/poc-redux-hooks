import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import appActions from './actions';
import './App.css';

const App = () => {

  const counter = useSelector(store => store.counter.count)
  const dispatch = useDispatch();

  const redux_increment = () => dispatch(appActions.counterActions.increment());
  const redux_decrement = () => dispatch(appActions.counterActions.decrement());

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {counter}
        </p>
        <button onClick={redux_increment}>increment</button>
        <button onClick={redux_decrement}>decrement</button>
      </header>
    </div>
  );
}

export default App;
