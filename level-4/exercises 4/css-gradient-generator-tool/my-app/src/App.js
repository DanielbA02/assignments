import './App.css';
import React from 'react'
import Options from './Options';

function App() {
  const [light, setLight] = React.useState(true)

  function toggleDarkLight(){setLight(!light)}
    return (
      <div className="App" style={{backgroundColor:(light ? "azure" : "darkgrey"),color:(light ? "black" : "azure")}}>
        <button type="checkbox" className='darkSwitch' onClick={toggleDarkLight} >Light/Dark</button>

        <h1 className="header" >CSS Gradient Code Generator</h1>
        <Options/>
      </div>
    );
}

export default App;