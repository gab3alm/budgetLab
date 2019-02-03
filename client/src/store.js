import {createStore} from 'redux';

//in order to create a simple store, you need to create a reducer.
//a reducer is a simple pure function
const teller = (state = 0, action)=>{
  switch (action.type){
    case 'ADD_MONEY':
      return +state + +action.amount;
    case 'DEC_MONEY':
      return +state - +action.amount;
    default:
      return +state
  }
};

const store = createStore(teller);
export default store;