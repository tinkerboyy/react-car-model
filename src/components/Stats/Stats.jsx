import React from 'react';
import './Stats.css';

const Stats = ({stats}) => (
  <div className="tesla-stats">
    <ul>
      {
        (stats || []).map((stat, index) => (
          <li key={index}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
            <p>{stat.miles}</p>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Stats;
