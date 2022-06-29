import React from 'react'
import './App.css';

function App() {

  const [city, setCity] = React.useState("")


  return (
    <div className='w-screen h-screen bg-cyan-900'>
      <div className='flex justify-center p-6'>
        <input className='w-4/5 rounded-lg text-center opacity-50 focus:scale-110 focus:opacity-80' aria-label='city' value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder='SEARCH CITY'/>
      </div>
    </div>
  );
}

export default App;
