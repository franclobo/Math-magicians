import React from 'react';

class CreateDigits extends React.Component {
  render() {
    const digits = [];
    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button type="submit" key={i}>{i}</button>,
      );
    }
    return digits;
  }
}

function calculator() {
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
        <CreateDigits />
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

export default calculator;
