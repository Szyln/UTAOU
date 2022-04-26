import React from 'react';
import ReservationProgressTab from './ReservationProgressTab';

const ReservationProgress = ({ step }) => {
  const progressTabs = ['選擇方案', '選填資料', '完成預約'];
  return (
    <div className='container'>
      <ul className='row mb-8 row-cols-3'>
        {progressTabs.map((progressTab, index) => (
          <ReservationProgressTab
            bgColor={index + 1 == step ? 'primary' : 'secondary-light'}
            textColor={index + 1 == step ? 'white' : 'primary'}
            marginAuto={index == 0 ? 'ms-auto' : index == 2 ? 'me-auto' : ''}
            children={progressTab}
            key={progressTab}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReservationProgress;
