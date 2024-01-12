import { useSelector } from "react-redux"

const App = () => {
  const counter = useSelector((state)=>state.counter);
  return (
    <div>

      <h1>Counter </h1>
      <h2>{counter}</h2>
    </div>
  )
}

export default App