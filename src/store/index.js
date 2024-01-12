import { createStore } from "redux";

const reducerFunction = (state = { counter: 0 },action)=>{

    // return {...state,counter:state.counter+5}

  //Limitations  
        // Synchronous Function
        // We should not mutate the original state(Should be the copy of original state)

        if(action.type === "INC"){
            return {...state,counter:state.counter + 1};
        }
        else if(action.type === "DEC"){
            return {...state,counter:state.counter - 1};
        }
        else if(action.type === "AddByTen"){
            return{...state,counter:state.counter+ 10}
        }
        else {
            return state;
        }


}

const store = createStore(reducerFunction);
export default store;
