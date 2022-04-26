import React from 'react';

const ThePlanUserPick = ({ term, level, border = '', changeLine = 'false' }) => {
  return (
    <div className='text-center bg-white mb-6 mb-md-8'>
      <h3 className='fw-normal fs-5 text-primary text-center'>
        <span className={`text-primary fs-4 mb-1  ${changeLine == true ? 'd-block' : 'me-3 text-primary-dark' }`}>你選擇的是</span>
        <span className={`${border}`}>
          {term}
          課程-
          {level == '基礎 Basic'
            ? '基礎'
            : level == '中階 Intermediate'
            ? '中階'
            : '高階'}
        </span>
      </h3>
    </div>
  );
};

export default ThePlanUserPick;
