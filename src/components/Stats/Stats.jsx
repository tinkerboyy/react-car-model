import React from 'react';
import './Stats.css';

const Stats = ({stats}) => (
  <div className="tesla-stats">
    <ul>
      {
        (stats || []).map(stat => {
          <li key={stat.model}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model}`}></div>
            <p>{stat.miles}</p>
          </li>
        })
      }
    </ul>
  </div>
);

export default Stats;
