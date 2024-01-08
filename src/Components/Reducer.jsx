import React from 'react';
import { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload };
        case 'DECREMENT':
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

const Reducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // Event handlers
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT',payload:5 });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT',payload:5 });
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