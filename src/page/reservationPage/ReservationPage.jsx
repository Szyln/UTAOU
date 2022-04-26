import React from 'react';
// import PlansGroup from './PlansGroup';
// import LessonLevel from './LessonLevel';
import ReservationProgress from '../../component/ReservationProgress';
import { Link, Outlet } from 'react-router-dom';
import PageSpacing from '../../component/PageSpacing';
import PageTitle from '../../component/PageTitle';
// import { useState } from 'react';

const ReservationPage = ({ termsInfo, setTerm, term, step }) => {
  return (
    <PageSpacing>
      <PageTitle>立即預約</PageTitle>
      <ReservationProgress step={step} />
      <Outlet />
    </PageSpacing>
  );
};

export default ReservationPage;
