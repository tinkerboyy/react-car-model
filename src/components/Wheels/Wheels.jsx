import React from 'react';
import './Wheels.css';

const sizes = [19, 21];

const Wheels = ({wheels}) => {
  return (
      <div className="tesla-wheels">
          <p className="tesla-wheels__title">Wheels</p>
          <div className="tesla-wheels__container cf">
              {
                sizes.map(size => (
                  <label 
                    key={size} 
                    className={
                      `tesla-wheels__item tesla-wheels__item--${size}
                        ${wheels === size} ? tesla-wheels__item--active : ''
                        tesla-wheels__item--focused
                      `}>
                    <input 
                      type="radio"
                      name="wheelsize"
                      />
                    <p>{size}"</p>
                  </label>
                ))
              }
            </div>
           </div>
           )
  };

export default Wheels;
