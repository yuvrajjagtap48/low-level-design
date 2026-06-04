import {useState} from 'react'
const App = () => {
  const [count, setCount] = useState(0);
  
  
  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={ () => setCount(count + 1)} > add</button>
      <button onClick={ () => setCount(count - 1) }> sub </button>
      <button onClick={ () => setCount(0)}>reset</button>
    </div>
  )
}

export default App