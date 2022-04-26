import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import LinkToPage from '../component/LinkToPage';

import 'swiper/css';
import PageSpacing from '../component/PageSpacing';
import PageTitle from '../component/PageTitle';

const Space = ({ spaces, lessons }) => {

  return (
    <PageSpacing pb=''>
      <div className='container mb-8 mb-md-10 mb-lg-16'>
        <div className='row'>
          {/* 空間有哪些 */}
          <div className='col-md-8'>
            <ul className='row gy-4 gy-lg-6'>
              {spaces.map((space, index) => (
                <li className={`col-md-${index == 0 ? 12 : 6}`} key={uuidv4()}>
                  <div
                    className={`card border-0 bg-dark text-white ratio ratio-1x1 ${
                      index == 0 ? 'ratio-md-2x1' : ''
                    }`}
                  >
                    <img
                      src={space.img}
                      className='card-img'
                      alt={`photo of ${space.name}`}
                    />
                    <div className='card-img-overlay p-6 p-md-3 p-lg-6 d-flex flex-column justify-content-end'>
                      <h3 className='card-title fs-7 fs-md-6 fs-lg-7 fw-medium'>
                        {space.name}
                      </h3>
                      <p className='card-text'>{space.des}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* 空間說明 */}
          <div className='col-md-4'>
            <div className='card bg-secondary-light text-primary'>
              <div className='card-body p-6'>
                <h4 className='fs-5 fw-normal mb-4'>UTAOU 提供：</h4>
                <ul className='mb-3'>
                  <li className='mb-1'>
                    四間教室：A、B 樂團團練室、C、D 個人訓練室。
                  </li>
                  <li className='mb-1'>
                    麥克風、樂器：每次課後會進行殺菌清潔，乾淨免擔心。
                  </li>
                  <li className='mb-1'>
                    休息間：分別設置在館內 A、B 區。
                  </li>
                  <li>舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。</li>
                </ul>
                <LinkToPage to='reservation/selection'>立即預約</LinkToPage>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary-light pt-10 pt-md-8 pt-lg-10 pb-12 pb-13 pb-14'>
        <PageTitle fw='medium'>課程推薦</PageTitle>
        <div className='container'>
          <div className='row flex-nowrap'>
            <Swiper
              className='text-primary'
              slidesPerView={1.25}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                375: {
                  slidesPerView: 1.25,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 4.25,
                  spaceBetween: 30,
                },
              }}
            >
              {lessons.map((lesson) => (
                <SwiperSlide key={uuidv4()}>
                  <ul>
                    <li className='ratio ratio-5x4 mb-2'>
                      <img
                        src={lesson.img}
                        alt={lesson.name}
                        className='rounded '
                      />
                    </li>
                    <li>
                      <h3 className='fs-5 fw-medium'>{lesson.name}</h3>
                    </li>
                    <li>授課老師：{lesson.teacher}</li>
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </PageSpacing>
  );
};

export default Space;
