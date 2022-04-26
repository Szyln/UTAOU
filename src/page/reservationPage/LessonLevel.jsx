import React, { useState } from 'react';
import LessonLevelCard from './LessonLevelCard';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ThePlanUserPick from './ThePlanUserPick';
import PageTitle from '../../component/PageTitle';

const LessonLevel = ({ termsInfo, term, level, levelsInfo, setLevel }) => {
  return (
    <>
      <div
        className={`collapse multi-collapse ${
          term == '' ? 'show' : ''
        } container-lg gx-0 gx-lg-4`}
        id={term}
      >
        <div className='row my-3'>
          <div
            className={`col-lg-4 ${
              term == '首次體驗'
                ? ''
                : term == '短期體驗'
                ? 'offset-lg-4'
                : 'offset-lg-8'
            } d-flex justify-content-center`}
          >
            <span className='material-icons icon text-primary'>
              arrow_drop_down
            </span>
          </div>
        </div>

        <div className='bg-primary pt-8 pt-lg-10 pb-12 pb-lg-16 overflow-hidden mb-8 mb-lg-10'>
          <PageTitle fontColor='text-white'>選擇課程階級</PageTitle>
          <div className='row mx-5'>
            {levelsInfo.map((levelInfo) => (
              <div className='col-lg-4 d-none d-lg-block' key={uuidv4()}>
                <LessonLevelCard
                  info={levelInfo}
                  setLevel={setLevel}
                  level={level}
                />
              </div>
            ))}
            <div className='col d-lg-none'>
              <Swiper
                spaceBetween={15}
                slidesPerView={3}
                breakpoints={{
                  375: {
                    slidesPerView: 1.1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 2.1,
                    spaceBetween: 30,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
              >
                {levelsInfo.map((levelInfo) => (
                  <SwiperSlide key={uuidv4()}>
                    <LessonLevelCard info={levelInfo} setLevel={setLevel} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <ThePlanUserPick
          term={term}
          level={level}
          border='border-bottom border-secondary border-2'
          changeLine={true}
        />
      </div>
    </>
  );
};

export default LessonLevel;
