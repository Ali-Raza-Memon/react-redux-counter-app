import { useSelector, useDispatch} from "react-redux"

const App = () => {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch(); 


  const increment = () =>{
    dispatch({type:'INC'});
  };
  const decrement = () =>{
    dispatch({type:'DEC'})
  }

  const addByTen = ()=>{
    dispatch({type:"AddByTen",payload:10});
  }


  return (
    <div>

      <h1>Counter </h1>
      <h2>{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={addByTen}> Add by 10 </button>
    </div>
  ) 
}

export default App