import React from 'react';
import { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

const Reducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // Event handlers
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    };
    return (
        <div>
            <div>
                <p>Count: {state.count}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Reducer