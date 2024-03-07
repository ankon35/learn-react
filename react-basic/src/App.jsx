import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter] = useState(0)
  
  //let counter = 0;

  const addValue =() =>{
    
   setCounter(counter + 1)

   if(counter === 20){
    setCounter(counter + 0)
   }

    console.log("Clicked" , counter);
  }
  
  const removeValue = () => {
    setCounter(counter - 1)

    if(counter === 0){
      setCounter(counter + 0)
     }
  }
  return (
   <>
    <h1>Ankon Hossain</h1>

    <h3>Counter value :  {counter}</h3>
    <button onClick={addValue}>Add value {counter}</button>

    <br />
    <button onClick={removeValue}>Remove value {removeValue}</button>
   </>
  )
}

export default App
