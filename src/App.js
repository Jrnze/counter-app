import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const addValue = () => setValue(value + 1);
  const subtractValue = () => setValue(value - 1);
  return (
    <div>
      <div className='div'>{value}</div>
      <button className='addButton' onClick={addValue}>+1</button>
      <button className='subtractButton' onClick={subtractValue}>-1</button>
    </div>
  );
}

export default App;