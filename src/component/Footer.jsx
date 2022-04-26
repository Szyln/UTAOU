import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/utaoLogo-light.svg';
const Footer = ({ socialMediaLinks }) => {
  return (
    <footer className='bg-primary text-white pt-6 pb-8 py-md-8'>
      <div className='container'>
        {/* 訂閱區塊 */}
        <div className='row justify-content-md-between align-items-center border-bottom pb-6 pb-md-8 mb-6 mb-md-8'>
          <h3 className='col-12 col-lg-8 fs-6 fs-md-7 fw-normal mb-2 mb-lg-0'>
            現在訂閱，獲得課程優惠碼！
          </h3>
          <form action='POST' className='col col-md-6 col-lg-4'>
            <div className='input-group'>
              <input
                type='email'
                className='form-control'
                placeholder='輸入您的電子信箱'
                aria-label='type your mail'
                aria-describedby='button-subscribe'
              />
              <button
                className='btn btn-secondary'
                type='button'
                id='button-subscribe'
              >
                訂閱
              </button>
            </div>
          </form>
        </div>
        {/* 各種導覽連結區塊 */}
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap'>
          <div className='mb-1 mb-md-0'>
            <a className='link-light' href='/'>
              <img
                src={logoImg}
                alt='UTAOU logo'
                className='logo-length py-1'
              />
            </a>
            <ul>
              <li>
                <Link
                  className='d-block link-light text-decoration-none py-1'
                  to='/UTAOU/course'
                >
                  課程介紹
                </Link>
              </li>
              <li>
                <Link
                  className='d-block link-light text-decoration-none py-1'
                  to='/UTAOU/space'
                >
                  練唱空間
                </Link>
              </li>
              <li>
                <Link
                  className='d-block link-light text-decoration-none py-1'
                  to='/UTAOU/schedule'
                >
                  當月課表
                </Link>
              </li>
            </ul>
          </div>
          <ul className='d-flex order-md-1 me-n1'>
            {socialMediaLinks.map((socialMediaLink) => (
              <li key={socialMediaLink.name}>
                <a href='/' target='_blank' className='link-light px-1'>
                  <i className={`bi bi-${socialMediaLink.name} fs-6 lh-sm`}></i>
                </a>
              </li>
            ))}
          </ul>
          <small className='mt-auto fs-4 w-down-md-100'>
           SZ © 2022. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
