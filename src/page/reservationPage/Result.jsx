import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ setStep }) => {
  return (
    <div className='container'>
      <div className='row text-center text-primary'>
        <div className='mx-auto col-md-8 col-lg-6 mb-6'>
          <span className='material-icons fs-10 fs-5'>
            check_circle_outline
          </span>
          <h3 className='fs-5 fw-normal mb-8'>
            已完成預約，以下是您的預約資訊:
          </h3>
          <div className='accordion' id='reservationResultInfo'>
            <div className='accordion-item'>
              <h2
                className='accordion-header'
                id='reservationResultInfoHeading'
              >
                <button
                  className='accordion-button bg-primary text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  預約資訊
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                aria-labelledby='reservationResultInfoHeading'
                data-bs-parent='#reservationResultInfo'
              >
                <div className='accordion-body'>
                  <ul className='text-start'>
                    <li className='mb-4 '>
                      <h3 className='text-start fw-normal fs-4'>
                        您預約的是{' '}
                        <span className='fs-5 text-secondary'>
                          首次體驗課程-基礎
                        </span>
                      </h3>
                    </li>
                    <li className='mb-2'>上課預約報到日：2021/07/21</li>
                    <li className='mb-2'>預約人：Joanne Chen</li>
                    <li className='mb-2'>年齡：18 歲</li>
                    <li className='mb-2'>性別：女</li>
                    <li className='mb-2'>電子信箱：example123@gmail.com</li>
                    <li>手機號碼：0912-345-678</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4 mx-auto'>
            <div className='mb-8'>
              <h3 className='fs-5 fw-normal mb-2'>上課注意事項</h3>
              <p>
                第一次上課請提前 10-15 分鐘至櫃檯報到，請攜帶毛巾、水
                .穿著運動服、乾淨室內運動鞋。如欲更改體驗時間請提前通知我們喔！
              </p>
            </div>
            <Link to='/UTAOU/' className='btn btn-secondary w-100'>
              返回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
