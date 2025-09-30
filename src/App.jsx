import React from 'react'
import Backgound from './components/Backgound';
import Forground from './components/Forground';


const App = () => {
  return (
    <div className='relative w-full h-screen bg-gray-900'>
  
       <Backgound/>
       <Forground/>
       
    </div>
  )
}

export default App
