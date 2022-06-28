import React from 'react'
import './App.css';

function App() {

  const [city, setCity] = React.useState('')


  return (
    <div className='main'>
      <div className='inputBox'>
        <input type="text" placeholder='SEARCH CITY' value={city} onChange={(e)=> {setCity(e.target.value)}} />
      </div>
    </div>
  );
}

export default App;
