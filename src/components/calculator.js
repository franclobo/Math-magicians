import React from 'react';

class createDigits extends React.Component {
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

export default createDigits;
