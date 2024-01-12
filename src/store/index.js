import { createStore } from "redux";

const reducerFunction = (state = { counter: 10 },action)=>{
    return {...state,counter:state.counter+5}
}

const store = createStore(reducerFunction);
export default store;
