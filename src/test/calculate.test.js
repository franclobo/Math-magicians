import calculate from '../logic/caculate';

describe('Test calculate function', () => {
  it('All Clear', () => {
    const obj = {
      total: 12,
      next: 12,
      operation: 'x',
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Is zero number', () => {
    const obj = {
      total: null,
      next: 0,
      operation: null,
    };
    const buttonName = '0';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '0',
    });
  });

  it('Is number and there is an operation', () => {
    const obj = {
      total: null,
      next: 3,
      operation: '+',
    };
    const buttonName = '2';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '32',
      operation: '+',
    });
  });

  it('Is number without operation', () => {
    const obj = {
      total: null,
      next: 2,
      operation: null,
    };
    const buttonName = '0';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '20',
    });
  });

  it('Is number different than zero', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = '3';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '3',
    });
  });

  it('Number includes .', () => {
    const obj = {
      total: null,
      next: '2.',
      operation: null,
    };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '2.',
      operation: null,
    });
  });

  it('Object operation and .', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '0.',
      operation: '+',
    });
  });

  it('Total includes .', () => {
    const obj = {
      total: '2.',
      next: null,
      operation: null,
    };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({});
  });

  it('Equal', () => {
    const obj = {
      total: 12,
      next: 12,
      operation: 'x',
    };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: '144',
      next: null,
      operation: null,
    });
  });

  it('Invert +/-', () => {
    const obj = {
      total: null,
      next: 12,
      operation: null,
    };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '-12',
      operation: null,
    });
  });

  it('Invert -/+', () => {
    const obj = {
      total: null,
      next: -12,
      operation: null,
    };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: null,
      next: '12',
      operation: null,
    });
  });

  it("User pressed an operation after pressing '='", () => {
    const obj = {
      total: 12,
      next: null,
      operation: null,
    };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({
      total: '-12',
      next: null,
      operation: null,
    });
  });
})
