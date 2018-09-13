import React from 'react';
import './Car.css';

const Car = ({wheelsize, speed}) => (
    <div className="tesla-car">
      <div className="tesla-wheelss">
        <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheelsize}--${speed}`}></div>
        <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelsize}--${speed}`}></div>
      </div>
    </div>
  );

export default Car;
