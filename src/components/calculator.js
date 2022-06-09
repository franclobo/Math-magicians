import React from 'react';

const createDigits = () => {
  const digits = [];
  for (let i = 9; i >= 1; i -= 1) {
    digits.push(
      <button type="submit" key={i}>{i}</button>,
    );
  }
  return digits;
};

export default createDigits;
