import React from 'react';
import Select from 'react-select';
import './App.css';

const options = [
  {value:"chocolate", label: "Chocolate"},
]

function App() {
  
  return (
    <div className="App">
      <Select options={options}/>
    </div>
  );
}

export default App;
