import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// to im port button

import MyButton from './components/Hello'

import ParentComponent from './components/ParentComponent'



function App() {
 

  return (
    <>
      


      {/* add button component  */}
      <div>
        <h1>Welcome To React</h1>
        <MyButton/>
      </div>
            <div>
        <h1>Welcome To parent components</h1>
        <ParentComponent/>
       
      </div>

      
    </>
  )
}

export default App
