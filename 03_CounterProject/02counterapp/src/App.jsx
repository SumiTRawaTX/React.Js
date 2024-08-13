import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;     
  let [counter, setCounter] = useState(15);                                    

  const addValue = () => {
    // console.log('clicked ' + counter);
    if(counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    else {
      alert('out of range');
    }

  }
  const removeValue = () => {
    // console.log('clicked ' + counter);
    if(counter <= 0) {
      alert('you are going to negative');
    }
    else {
      counter = counter - 1;
      setCounter(counter);
    }

  }

  return (
    <>
      <h1>sumit papa</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}> Add value: {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
