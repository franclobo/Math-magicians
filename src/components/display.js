import PropTypes from 'prop-types';

export default function Display(props) {
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
