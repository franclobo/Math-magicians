import React from 'react';
import createDigits from './components/calculator';

function App() {
  return (
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>

      <div className="operators">
        <button type="button">*</button>
        <button type="button">-</button>
        <button type="button">+</button>
        <button type="button">=</button>
      </div>

      <div className="digits">
        <button type="button">.</button>
        { createDigits() }
        <button type="button">%</button>
        <button type="button">+/-</button>
        <button type="button">AC</button>
      </div>
    </div>
  );
}

export default App;
