import React from 'react';
import './Climate.css';

const Climate = ({ limit, climate, onClimateChange }) => {
    let focus = false;

    const onFocusChange = (e) => {
      focus = e.target.value;
    };
 
    const onBlurChange = (e) => {
      focus = false;
    }

  return (
    <div className="tesla-climate">
        <label 
          className={`tesla-climate__item
            ${climate ? 'tesla-climate__item--active' : ''}
            ${focus ? 'tesla-climate__item--focused' : ''}
            ${!limit ? 'tesla-heat' : ''} 
          `}
          >
          <p>{ (limit ? 'ac' : 'heat') }</p>
          <i className="tesla-climate__icon"></i>
        <input 
          type="checkbox"
          name="climate"
          checked={climate}
          value={climate}
          onChange={onClimateChange}
          onFocus={onFocusChange}
          onBlur={onBlurChange}
          />
      </label>
    </div>
  )};

export default Climate;