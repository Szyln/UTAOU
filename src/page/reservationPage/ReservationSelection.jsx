import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlansGroup from './PlansGroup';
import LessonLevel from './LessonLevel';
import PageTitle from '../../component/PageTitle';

const ReservationSelection = ({
  termsInfo,
  setTerm,
  term,
  setStep,
  levelsInfo,
  level,
  setLevel,
}) => {
  return (
    <>
      <section className='container'>
        {/* 
        - map termsInfo
      */}
        <PlansGroup
          termsInfo={termsInfo}
          term={term}
          setTerm={setTerm}
          levelsInfo={levelsInfo}
        />
      </section>
      <section>
        {/* 
        - collapse
        - map levelsInfo
        - map level, term 雙方
      */}
        {/* 展開內容 */}
        <LessonLevel
          termsInfo={termsInfo}
          term={term}
          level={level}
          setLevel={setLevel}
          levelsInfo={levelsInfo}
        />
      </section>

      {/* 預約須知 */}
      <section className='container mt-8 mt-lg-10'>
        <div className='row'>
          <div className='col-md-8 col-lg-5 mx-auto mb-8 mb-lg-10'>
            <PageTitle className='text-center'>預約須知</PageTitle>
            <ol className='text-primary mb-n1'>
              <li className='mb-1'>如果有特殊體質、特殊狀況，請主動告知。</li>
              <li className='mb-1'>
                取消預約或時間異動請於預約日前一天晚間 21:00
                前告知，預約當日請勿異動或取消，以免影響您日後再預約的個人信用及難度。
              </li>
              <li className='mb-1'>
                為維護上課品質，請遵守 UTAOU
                各項參觀規定，未遵守規定者，本公司保留謝絕入館之權利。
              </li>
              <li className='mb-1'>
                UTAOU
                保留修改預約須知之權利，修改後的條款將公佈於本網站上，不另外個別通知。如果您繼續在本網站進行參觀預約，就表示您已經了解、並同意遵守修改後的約定條款。
              </li>
            </ol>
          </div>
          <div />
          <div
            className='col-md-4 mx-auto collapse multi-collapse'
            id='nextReservationPageBtn'
          >
            <Link
              to='/UTAOU/reservation/form'
              className='btn btn-secondary w-100'
              onClick={() => {
                setStep(2);
              }}
            >
              繼續預約
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationSelection;
