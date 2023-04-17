import React from 'react';
import styleDevelopers from './Developers.module.css';
import Card from '../Card/Card';

const Developers = ({ developers }) => {
  return (
    <div className={styleDevelopers.gridContainer}>
      {developers.map((member) => (
        <div key={member.id} className={styleDevelopers.gridItem}>
          <Card member={member} />
        </div>
      ))}
    </div>
  );
};

export default Developers;