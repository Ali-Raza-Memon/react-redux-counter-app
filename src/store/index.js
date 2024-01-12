import { createStore } from "redux";

const reducerFunction = (state = { counter: 0 },action)=>{

    // return {...state,counter:state.counter+5}

  //Limitations  
        // Synchronous Function
        // We should not mutate the original state(Should be the copy of original state)

        if(action.type === "INC"){
            return {counter: state.counter+1}
        }
        else if(action.type === "DEC"){
            return {counter:state.counter - 1}
        }
        else if(action.type === "AddByTen"){
            return {counter:state.counter + action.payload}
        }
        else {
            return state;
        }


}

const store = createStore(reducerFunction);
export default store;
