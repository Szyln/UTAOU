import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const LessonLevelCard = ({ info, setLevel, level }) => {
  const handleLevelClick = (e) => {
    setLevel(e.target.text);
    console.log(e.target.text);
    
  };

  return (
    <div className={`card h-100 bg-secondary border-secondary border-4 text-white hover-border-white shadow-sm ${level == info.level ? 'active' : ''}`}>
      <div className='card-body py-6'>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <h3 className='mb-0'>
            <a
              className='btn btn-link stretched-link text-decoration-none text-white fw-medium fs-7 p-0'
              onClick={handleLevelClick}
            >
              {info.level}
            </a>
          </h3>
          <span className='material-icons fs-9 opacity-50'>check_circle_outline</span>
        </div>
        <h4 className='fs-4 fw-normal mb-4'>
          {info.lessons}
          <span className='badge bg-primary rounded-pill ms-2 fw-normal'>{info.time} min</span>
        </h4>
        <ul className='mb-n1'>
          {info.listInfos.map((info) => (
            <li key={uuidv4()} className='mb-1 list-style-default'>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LessonLevelCard;
