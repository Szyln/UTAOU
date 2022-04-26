import React, { useState } from 'react';

const PlanCard = ({ info, setTerm, term }) => {
  const handleTermClick = (e) => {
    {e.target.id == 'trialLessonBtn'
    ? setTerm('首次體驗')
    : e.target.id == 'shortLessonBtn'
    ? setTerm('短期體驗')
    : setTerm('長期體驗')}
    console.log(term);
    

    
  };
  return (
    <div className={`card hover-card ${term == info.name ? 'active arrow': ''}`}>
      <div className='row g-0'>
        {/* 圖 */}
        <div className='col-md col-lg-12 ratio [ratio-4x3] ratio-except-md-4x3'>
          <img
            src={info.img}
            className='card-img-top fit-cover rounded-only-md-start'
            alt={info.name}
          />
        </div>
        {/* 文字 */}
        <div className='col-md col-lg-12'>
          <div className='card-body p-6'>
            <h3 className='card-title text-primary text-center text-md-start text-lg-center mb-1'>
              {info.name}
            </h3>
            <span className='card-text d-block text-secondary text-center text-md-start text-lg-center fs-5 mb-2'>
              NT ${info.price} / 次
            </span>
            <p className='card-text text-primary mb-6'>{info.info}</p>
            <a
              className='btn btn-lg btn-secondary w-100 rounded-1 stretched-link'
              id={`${info.engName}LessonBtn`}
              data-bs-toggle='collapse'
              // href={`#${info.engName}Lesson`}
              href='.multi-collapse'
              role='button'
              aria-expanded='false'
              aria-controls={`${info.engName}Lesson nextReservationPageBtn`}
              onClick={handleTermClick}
            >
              選擇課程
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
