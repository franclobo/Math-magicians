import PropTypes from 'prop-types';

export default function Buttons(props) {
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
