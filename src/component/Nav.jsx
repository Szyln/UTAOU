import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/utaouLogo.svg';

const Nav = () => {
  return (
    <>
      {/* navabr: navbar-light(亮字) + bg-<theme-color（自訂要設定API）> */}
      {/* navbar-expand-<breakpoint> 設定什麼時候要將細項收起來 */}
      <nav className='navbar navbar-light bg-secondary-light navbar-expand-lg'>
        {/* 內容不貼邊 */}
        <div className='container'>
          {/* LOGO */}
          <Link className='navbar-brand ' to='UTAOU/'>
            <img
              src={logoImg}
              alt='UTAOU logo'
              className='logo-length my-2'
            />
          </Link>
          {/* 收起來的按鈕 */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            {/* toggle 的範圍要包在這裡面 */}
            {/* navbar-nav：細項 */}
            <ul className='navbar-nav ms-auto text-center mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/UTAOU/course'>
                  課程介紹
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='UTAOU/space'>
                  練唱空間
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/UTAOU/schedule'>
                  當月課表
                </Link>
              </li>
            </ul>
            {/* 放入 form 元素 */}
            <form className='ms-lg-auto me-lg-0 text-center mb-2 mb-lg-0'>
              <Link to='/UTAOU/reservation/selection'>
                <button
                  className='btn btn-outline-primary border-width-sm rounded-2 me-4'
                  type='button'
                >
                  立即預約
                </button>
              </Link>
              <Link to='/UTAOU/contact'>
                <button
                  className='btn btn-outline-primary border-width-sm rounded-2'
                  type='button'
                >
                  聯絡我們
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
