import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/caculate';

function Buttons(props) {
  const clickEvent = () => {
    const { clickEvent, btnName } = props;
    clickEvent(btnName);
  };
  const { className, btnName } = props;
  return (<button className={className} type="button" onClick={clickEvent}>{btnName}</button>);
}

Buttons.propTypes = {
  btnName: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  className: 'button',
};

function Display(props) {
  const {
    previous, current, operand,
  } = props;

  return (
    <div className="display">
      <span className="previous">{previous}</span>
      <span className="operand">{operand}</span>
      <span className="current">{current}</span>
    </div>
  );
}

Display.propTypes = {
  previous: PropTypes.string,
  current: PropTypes.string,
  operand: PropTypes.string,
};

Display.defaultProps = {
  previous: '',
  operand: '',
  current: '0',
};

function Calculator(props) {
  const {
    previous, operand, current,
  } = props;
  const [total, setTotal] = useState(previous); // useState is a Hook
  const [operation, setOperation] = useState(operand);
  const [next, setNext] = useState(current);

  const update = (btnClick) => {
    const obj = calculate({
      total,
      operation,
      next,
    }, btnClick);
    setTotal(obj.total);
    setOperation(obj.operation);
    setNext(obj.next);
  };

  const CreateDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <Buttons key={i} btnName={i.toString()} clickEvent={(string) => update(string)} />,
      );
    }
    return digits;
  };

  return (
    <div className="calculator">
      <div className="display">
        <Display previous={total} operand={operation} current={next} />
      </div>

      <div className="transform">
        <Buttons btnName="AC" clickEvent={(string) => update(string)} />
        <Buttons btnName="+" clickEvent={(string) => update(string)} />
        <Buttons btnName="+/-" clickEvent={(string) => update(string)} />
      </div>

      <div className="digits">
        <CreateDigits />
      </div>

      <div className="zero_digits">
        <Buttons className="zero" btnName="0" clickEvent={(string) => update(string)} />
        <Buttons className="point" btnName="." clickEvent={(string) => update(string)} />
      </div>

      <div className="operators">
        <Buttons btnName="&#xF7;" clickEvent={(string) => update(string)} />
        <Buttons btnName="x" clickEvent={(string) => update(string)} />
        <Buttons btnName="-" clickEvent={(string) => update(string)} />
        <Buttons btnName="+" clickEvent={(string) => update(string)} />
        <Buttons btnName="=" clickEvent={(string) => update(string)} />
      </div>
    </div>
  );
}

Calculator.propTypes = {
  previous: PropTypes.string,
  operand: PropTypes.string,
  current: PropTypes.string,
};

Calculator.defaultProps = {
  previous: '',
  operand: '',
  current: '0',
};

export default Calculator;
