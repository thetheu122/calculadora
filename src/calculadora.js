import React, { useState } from 'react';
import './calculadora.scss';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const NumberClick = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const OperadorClick = (operator) => {
    setExpression(expression + display + operator);
    setDisplay('0');
  };

  const IgualClick = () => {
    const result = eval(expression + display);
    setExpression('');
    setDisplay(result.toString());
  };

  const LimparClick = () => {
    setDisplay('0');
    setExpression('');
  };

  return (
    <div className="calculator">
      <div className='cal'>
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={LimparClick}>C</button>
            <button onClick={() => OperadorClick('/')}>/</button>
            <button onClick={() => OperadorClick('*')}>X</button>
            <button onClick={() => OperadorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => NumberClick('7')}>7</button>
            <button onClick={() => NumberClick('8')}>8</button>
            <button onClick={() => NumberClick('9')}>9</button>
            <button onClick={() => OperadorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => NumberClick('4')}>4</button>
            <button onClick={() => NumberClick('5')}>5</button>
            <button onClick={() => NumberClick('6')}>6</button>
          </div>
          <div className="row">
            <button onClick={() => NumberClick('1')}>1</button>
            <button onClick={() => NumberClick('2')}>2</button>
            <button onClick={() => NumberClick('3')}>3</button>
          </div>
          <div className="row">
            <button onClick={() => NumberClick('0')}>0</button>
            <button onClick={() => NumberClick('.')}>.</button>
            <button onClick={IgualClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
