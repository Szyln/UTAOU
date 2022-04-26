import React from 'react';
import SearchLessonInput from './course/SearchLessonInput';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import LessonModal from '../component/LessonModal';
import PageSpacing from '../component/PageSpacing';
import PageTitle from '../component/PageTitle';

const Course = ({ lessons, teachers }) => {
  let monthFeatureLesson = lessons.find((lesson) => {
    return lesson.monthFeature == true;
  });

  return (
    <PageSpacing>
      {/* 本月課程區 */}
      <div className='container'>
        <PageTitle>課程介紹</PageTitle>
        <div className='row mb-12 mb-md-18 mb-lg-16'>
          <div className='col-md col-lg-6 offset-lg-1'>
            <div className='ratio ratio-3x2 mb-2 mb-md-0'>
              <img
                src={monthFeatureLesson.img}
                className='rounded'
                alt={monthFeatureLesson.name}
              />
            </div>
          </div>
          <div className='col-md col-lg-4 text-primary'>
            <h3 className='fs-7'>本月限定課程：{monthFeatureLesson.name}</h3>
            <div className='d-flex mb-4'>
              <h4 className='text-secondary fs-4 fw-normal'>
                授課教師：{monthFeatureLesson.teacher}
                <span className='badge rounded-pill bg-secondary ms-2'>
                  {monthFeatureLesson.time} min
                </span>
              </h4>
            </div>

            <p className='mb-4'>{monthFeatureLesson.info}</p>
            <Link to='/UTAOU/reservation/selection'>
              <button type='button' className='btn btn-secondary'>
                立即預約
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* 搜尋區 */}
      <div className='bg-secondary py-5 mb-11 mb-md-13'>
        <div className='container'>
          <SearchLessonInput />
        </div>
      </div>
      {/* 搜尋結果區 */}
      <section className='container'>
        <div className='row gy-7 gy-md-11 gy-lg-7 position-lg-relative mb-lg-16 mb-md-10'>
          {/* 單張課程卡片長相 */}
          {lessons.map((lesson, index) => (
            <div
              className={`col-md-6 ${
                index % 4 === 0 || index % 4 == 3 ? `col-lg-5` : `col-lg-4`
              }`}
              key={uuidv4()}
            >
              <div className='card text-white height-card border-0'>
                <span className='badge rounded-pill bg-secondary position-absolute top-0 start-px-70 translate-middle'>
                  {lesson.time} min
                </span>
                <img
                  src={lesson.img}
                  className='card-img h-100'
                  alt={lesson.name}
                />
                <div className='card-img-overlay d-flex flex-column justify-content-end p-6'>
                  <h3 className='card-title '>
                    <a
                      className='btn btn-link p-0 stretched-link text-white text-decoration-none fs-7 fw-medium '
                      data-bs-toggle='modal'
                      data-bs-target='#lessonModal'
                    >
                      {lesson.name}
                    </a>
                  </h3>
                  <h4 className='card-text fs-4 fw-normal'>
                    授課老師：{lesson.teacher}
                  </h4>
                </div>
              </div>
              {/* LessonModal */}
              <div
                className='modal fade'
                id='lessonModal'
                tabIndex='-1'
                aria-labelledby='lessonModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-dialog-centered'>
                  <div className='modal-content bg-secondary text-white'>
                    <div className='modal-body py-8 py-md-16'>
                      <div className='row'>
                        <div className='col-6 offset-3 offset-md-0 col-md-5 '>
                          <div className='ratio ratio-except-md-1x1'>
                            <img
                              src={lesson.img}
                              className='img-fluid rounded length-lessonCard-img'
                              alt={lesson.name}
                            />
                          </div>
                        </div>
                        <div className='col-md-7'>
                          <h2
                            className='modal-title text-white text-start fs-7'
                            id='lessonModalLabel'
                          >
                            {lesson.name}
                          </h2>
                          <div className='d-flex mb-4'>
                            <h3 className='card-subtitle fw-normal fs-4 '>
                              授課老師：{lesson.teacher}
                            <span className='badge rounded-pill bg-primary ms-2'>
                              {lesson.time} min
                            </span>
                            </h3>
                          </div>
                          <p className='mb-4'>{lesson.info}</p>
                          <Link to='/UTAOU/reservation/selection'>
                            <button
                              type='button'
                              className='btn btn-secondary-light'
                            >
                              立即預約
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* 上課須知 */}
          <div className='offset-md-3 offset-lg-0 col-md-6 col-lg-3 position-lg-absolute end-0 mt-8 mt-md-10 mt-lg-0'>
            <h4 className='text-primary'>UTAOU 上課須知：</h4>
            <ul className='text-primary'>
              <li>請隨時補充水分，並攜帶夠大的水壺。</li>
              <li>
                錄音間小心動作，不要撞到專業器材。
              </li>
              <li>
                錄音間請穿著不易產生摩擦的服裝。
              </li>
              <li>
                訓練期間若感受到喉嚨不適，可以隨時休息，不要勉強硬唱。
              </li>
              <li>
                課程有任何停課、調動須知，都會再以 email 通知。
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 師資介紹 */}
      <section className='border-top pt-8 pt-md-10 overflow-hidden'>
        <h2 className='mb-6 mb-md-8'>師資介紹</h2>
        <div className='container'>
          <div className='row w-200'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}

              setWrapperSize={true}
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              {teachers.map((teacher, index) => (
                <SwiperSlide key={uuidv4()} className='pt-12 h-100'>
                  <div
                    className={`card height-long-card text-white position-relative bg-${
                      index % 2 === 0 ? 'primary' : 'secondary'
                    }`}
                  >
                    <img
                      src={teacher.img}
                      alt={teacher.name}
                      className='border border-4 border-primary rounded-circle position-absolute top-0 start-50 translate-middle length-avatar'
                    />

                    <div className='card-body pt-14 px-6'>
                      <h3 className='card-title text-center mb-1 fs-5 fw-normal'>
                        {teacher.name} 老師
                      </h3>
                      <h4 className='card-subtitle text-center fs-4 fw-normal mb-4'>
                        教學經歷 {teacher.teachingYears} 年
                      </h4>
                      <p className='card-text mb-4'>{teacher.info}</p>
                      <ul className='mb-n1 list-style-default'>
                        {teacher.exp.map((exp) => (
                          <li key={uuidv4()} className='mb-1'>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </PageSpacing>
  );
};

export default Course;
