import { createStore } from 'redux'; 

// action generators - functions that return action objects 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( {count} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers 
// 1. Reducers are pure functions (nothing dependent on outside variables)
// 2. Never change state or action

 
const countReducer = () => (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer); 

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})



// action = an object that gets sent to the store

// incrementing the count
// store.dispatch({   
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch({   
    type: 'DECREMENT',
    decrementBy: 7
});

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: -100 })); 




