import React from 'react';
import Calculator from '../components/calculator';

function CalculatorPage() {
  return (
    <div className="calculatorPage">
      <h2>
        <p>Lets do some math!</p>
      </h2>
      <div>
        <Calculator previous="" operand="" current="0" solved={false} />
      </div>
    </div>
  );
}

export default CalculatorPage;
