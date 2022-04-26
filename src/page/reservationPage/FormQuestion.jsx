import React from 'react';

const FormQuestion = ({ question, children, name, text = '' }) => {
  return (
    <div className='mb-8'>
      <h4 className='mb-4 fs-4 fw-normal'>
        <p>{question}</p>
        {text ? <div className='form-text mt-1'>{text}</div> : ''}
      </h4>
      {children}
    </div>
  );
};

export default FormQuestion;
