import React, {useState} from 'react';
import './App.css';

function App() {

    [isLightOn, setIsLightOn] = useState(true);

    function handleClick() {
    setIsLightOn(!isLightOn)
    }

  return (
    <div>
      <button
      type="button"
      onClick={handleClick}
      >
          {isLightOn ? "Aan" : "Uit"}
      </button>
    </div>
  );
}

export default App;
