import React from 'react';
import Banner from '../homepage/Banner';
import Purpose from '../homepage/Purpose';
import Teachers from '../homepage/Teachers';
import SpaceBtn from '../homepage/SpaceBtn';
import LessonBtn from '../homepage/LessonBtn';
import PlansGroup from '../reservationPage/PlansGroup';
import Evaluations from '../homepage/Evaluations';

const Homepage = ({ termsInfo, setTerm, teachers, lessons, spaces }) => {
  return (
    <>
      {/* banner */}
      <Banner />
      {/* 理解歌唱，突破框架 */}
      <Purpose />
      {/* 頂尖師資、專業教學 */}
      <Teachers teachers={teachers} />
      {/* 專業設備、卓越成長 */}
      <SpaceBtn spaces={spaces} />
      {/* 精心設計、課程多元 */}
      <LessonBtn lessons={lessons} />
      {/* 方案選擇 */}
      <section className='container pt-8 pb-12 pt-lg-10 pb-lg-16'>
        <h2 className='mb-1'>方案選擇</h2>
        <h3 className='text-secondary text-center mb-6'>UTAOU 可以帶給你...</h3>
        <PlansGroup termsInfo={termsInfo} setTerm={setTerm} />

      </section>
      {/* 聽聽他們怎麼說 */}
      <Evaluations />
    </>
  );
};

export default Homepage;
