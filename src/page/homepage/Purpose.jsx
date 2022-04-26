import React from 'react';
import { v4 as uuidv4 } from 'uuid';



const Purpose = () => {
  const purposes = [
    {
      title: '氣息掌握',
      des: '藉由控制氣息，掌握歌唱穩定度',
      img: 'https://images.unsplash.com/photo-1522863602463-afebb8886ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },

    {
      title: '力道掌握',
      des: '深度理解歌唱時使用的肌肉，有效率運用不傷喉嚨',
      img: 'https://images.unsplash.com/photo-1465409042654-5314e9d1754b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: '擴展歌唱可能性',
      des: '系統性理解唱歌技巧，不再受限於歌曲難度',
      img: 'https://images.unsplash.com/photo-1608319917470-9d9179430f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];
  return (
    <section className='pt-8 pb-12 pt-lg-10 pb-lg-16'>
      <div className='container'>
        <h2 className='text-center'>理解歌唱，突破框架</h2>
        <p className='text-center text-secondary fs-5 mb-6'>
          UTAOU 可以讓你……
        </p>
        <ul className='row gy-4 gy-md-0'>
          {purposes.map((purpose) => (
            <li className='col-md-4' key={uuidv4()}>
              <div className='card bg-dark text-white ratio ratio-5x6 border-0'>
                <img
                  src={purpose.img}
                  className='card-img'
                  alt={purpose.title}
                />
                <div className='card-img-overlay d-flex flex-column justify-content-end p-6'>
                  <div>
                    <h3 className='card-title fs-5 fs-md-6 fs-lg-5 fw-normal'>
                      {purpose.title}
                    </h3>
                    <p className='card-text'>{purpose.des}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Purpose;
