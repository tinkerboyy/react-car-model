import React from 'react';
import './Counter.css';


const Counter = ({title, unit, step, min, max, value, onCounterIncrement, onCounterDecrement}) => {
  let count = value;

  const onIncrement = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (value < max) {
      count = (count + step);
      onCounterIncrement(count);
    }
  }
  

  const onDecrement = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (value > min) {
      count = (count - step);
      onCounterDecrement(count);
    }
  }

  return (
    <div className="tesla-counter">
        <p className="tesla-counter__title">{title}</p>
        <div className="tesla-counter__container cf">
          <div 
            className="tesla-counter__item">
            <p className="tesla-counter__number">
                {value}
              <span>{unit}</span>
            </p>
            <div className="tesla-counter__controls">
              <button 
                onClick={onIncrement}
                ></button>
              <button 
                onClick={onDecrement}
                ></button>
            </div>
          </div>
        </div>
      </div>

     )
  };

export default Counter;
