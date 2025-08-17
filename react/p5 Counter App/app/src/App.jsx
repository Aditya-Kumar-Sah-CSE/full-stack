
import { useState } from 'react';
import './App.css'

function App() {
  useState();//arr 
function increment()  {
  count++;
}
    <>
    <h1>Counter App</h1>
    <p>count : {count}</p>

    <div className='buttons'>
    <button onClick={increment}> ➕INCREMENT</button>
    <button>➖DECREMENT</button>
    <button>🔄️RESET</button>
    </div>
  
    </>
  
}

export default App
