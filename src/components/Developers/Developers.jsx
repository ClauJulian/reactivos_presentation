import React from 'react'
import styleDevelopers from './Developers.module.css'
import Card from '../Card/Card';




const Developers = ({developers}) => {
   
  return (
    <div className="grid-container">
      {developers.map((member) => (
        <div key={member.id} className="grid-item">
          <Card member={member} />
        </div>
      ))}
    </div>
  );
};


export default Developers