import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div 
    style={{backgroundColor: color}}
    >
      <div className="w-full h-screen duration-200">
        <div >
          <button
          onClick={() => setColor("red")}
          
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
