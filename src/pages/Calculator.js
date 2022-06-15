import React from 'react';
import Calculator from '../components/calculator';

function CalculatorPage() {
  const msg = "Let's do some math!";
  return (
    <body>
      <h2>
        {msg}
      </h2>
      <div>
        <Calculator previous="" operand="" current="0" solved={false} />
      </div>
    </body>
  );
}

export default CalculatorPage;
