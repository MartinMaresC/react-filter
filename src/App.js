import React from 'react';
import Select from 'react-select';
import './App.css';

const options = [
  {value:"chocolate", label: "Chocolate"},
  {value:"vanilla", label: "Vanilla"},
  {value:"strawberry", label: "Strawberry"},
]

const customStyle = {
  control : (provided) => ({...provided,
    width: "400px",
    borderRadius: "8px",
    boxShadow: "none",
    textAlign: "left",
  }),
  option : (provided) => ({...provided,
    color: "grey",
    width: "400px",
    borderRadius: "8px",
    boxShadow: "none",
    textAlign: "left",
    ooverflow: "hidden",
  }),
}

function App() {
  
  return (
    <div className="App">
      <h1>React-Select Example</h1>
      <Select options={options} styles={customStyle}/>
    </div>
  );
}

export default App;
