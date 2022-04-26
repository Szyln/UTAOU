import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper';
import { v4 as uuidv4 } from 'uuid';
import joanneImg from '../../img/user-1.png';
import yinMinImg from '../../img/user-2.png';
import dsuChiImg from '../../img/user-3.png';
import yeDsuImg from '../../img/user-4.png';
import rayImg from '../../img/user-5.png';
import junIImg from '../../img/uset-6.png';

const Evaluations = () => {
  const evaluations = [
    {
      name: 'Joanne',
      img: joanneImg,
      star: '★★★★★',
      date: 'Oct 17 2020',
      feedback: '服務很好、設備優良！',
    },
    {
      name: '穎旻',
      img: yinMinImg,
      star: '★★★★★',
      date: 'Oct 17 2020',
      feedback: '上課後身體健康很多',
    },
    {
      name: '子琪',
      img: dsuChiImg,
      star: '★★★★☆',
      date: 'Oct 17 2020',
      feedback: '上課很有趣！',
    },
    {
      name: '葉子',
      img: yeDsuImg,
      star: '★★★★★',
      date: 'Oct 17 2020',
      feedback: '老師的教學很專業',
    },
    {
      name: 'Ray',
      img: rayImg,
      star: '★★★★☆',
      date: 'Oct 17 2020',
      feedback: '很舒壓',
    },
    {
      name: '俊儀',
      img: junIImg,
      star: '★★★★☆',
      date: 'Oct 17 2020',
      feedback: '讚的！',
    },
  ];

  return (
    <section className='bg-secondary-light pt-8 pb-12 pt-lg-10 pb-lg-16 overflow-hidden'>
      <div className='container '>
        <h2 className='mb-6 mb-md-8'>聽聽他們怎麼說</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4'>
          {evaluations.map((evaluation) => (
            <div className='col' key={uuidv4()}>
              <div className='bg-white rounded d-flex p-4'>
                <div className='me-5 my-auto'>
                  <img
                    src={evaluation.img}
                    alt={`${evaluation.name} avatar`}
                    className='length-avatar-60'
                  />
                </div>
                <div>
                  <div className='d-flex mb-1'>
                    <h4 className='text-primary fs-4 me-2'>{evaluation.name}</h4>
                    <p className='text-primary fs-sm'>{evaluation.date}</p>
                  </div>
                  {/* 這個要設定條件句（數字轉成星星形狀）還是乾脆直接存星星形狀在數據庫ㄋ */}
                  <p className='text-secondary mb-2 fs-5 lh-sm'>{evaluation.star}</p>
                  <p className='text-primary'>{evaluation.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluations;
