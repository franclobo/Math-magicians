import operate from '../logic/operate';

it('plus', () => {
  const result = operate(12, 12, '+');
  expect(result).toBe('24');
});

it('minus', () => {
  const result = operate(12, 12, '-');
  expect(result).toBe('0');
});

it('times', () => {
  const result = operate(12, 12, 'x');
  expect(result).toBe('144');
});

it('div', () => {
  const result = operate(12, 12, '÷');
  expect(result).toBe('1');
});

it('div', () => {
  const result = operate(12, 0, '÷');
  expect(result).toBe('Can\'t divide by 0.');
});

it('mod', () => {
  const result = operate(12, 12, '%');
  expect(result).toBe('0');
});

it('mod', () => {
  const result = operate(12, 0, '%');
  expect(result).toBe('Can\'t find modulo as can\'t divide by 0.');
});
