import React from 'react';
import createDigits from './components/calculator';

function App() {
  return (
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>

      <div className="transform">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
      </div>

      <div className="digits">
        { createDigits() }
      </div>

      <div className="zero_digits">
        <button type="button" className="zero">0</button>
        <button type="button" className="point">.</button>
      </div>

      <div className="operators">
        <button type="button">&#xF7;</button>
        <button type="button">*</button>
        <button type="button">-</button>
        <button type="button">+</button>
        <button type="button">=</button>
      </div>
    </div>
  );
}

export default App;
