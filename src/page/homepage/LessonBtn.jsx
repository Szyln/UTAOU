import React from 'react';
import { Link } from 'react-router-dom';
import LinkToPage from '../../component/LinkToPage';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LessonBtn = ({ lessons }) => {
  const firstFourLessons = lessons.filter((lesson, index) => {
    return index < 4;
  });
  return (
    <section className='bg-secondary-light py-12 py-lg-16 overflow-hidden'>
      <div className='container'>
        <div className='row flex-lg-nowrap'>
          <div className='col-md col-lg-5 offset-lg-1 my-auto'>
            <h2 className='text-start mb-1'>精心設計、課程多元</h2>
            <p className='fs-5 text-secondary mb-4'>
              教師帶領多元課程，精準分析，帶你輕鬆理解艱深理論，輕鬆突破瓶頸
            </p>
            <LinkToPage to='course'>課程介紹</LinkToPage>
          </div>
          <div className='col-md col-lg-10 '>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              className='mySwiper d-none d-lg-block'
            >
              {firstFourLessons.map((lesson) => (
                <SwiperSlide key={uuidv4()}>
                  <div className='ratio ratio-1x1 '>
                    <img
                      src={lesson.img}
                      className='rounded-2'
                      alt={lesson.name}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='row row-cols-2 gy-4 gy-md-6 d-lg-none'>
              {firstFourLessons.map((lesson) => (
                <div key={uuidv4()}>
                  <div className='ratio ratio-1x1'>
                    <img
                      src={lesson.img}
                      className='rounded-2'
                      alt={lesson.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonBtn;
