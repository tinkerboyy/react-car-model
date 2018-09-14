import React from 'react';
import './Climate.css';

const Climate = ({ limit, climate, onClimateChange }) => (
    <div className="tesla-climate">
        <label 
          className={`tesla-climate__item
            ${climate ? 'tesla-climate__item--active' : ''}
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
          />
      </label>
    </div>
  );

export default Climate;