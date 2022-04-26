import React from 'react';
import { Link } from 'react-router-dom';
import LinkToPage from '../../component/LinkToPage';

const SpaceBtn = ({ spaces }) => {
  return (
    <section className='py-12 py-lg-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-md order-md-1 my-auto'>
            <h2 className='text-start mb-1'>專業設備、卓越成長</h2>
            <p className='fs-5 mb-4 text-secondary'>
              我們提供完整的設備，不論歌唱、樂團、後製、商業用途都可以以最高規格作體驗
            </p>
            <LinkToPage to='/UTAOU/space'>環境介紹</LinkToPage>
          </div>
          <div className='col col-md-4'>
            <img
              src={spaces[0].img}
              alt={`${spaces[0].name} photo`}
              className='rounded-2 length-space-lg'
            />
          </div>
          <div className='col col-md-2 d-flex flex-column justify-content-between'>
            <img
              src={spaces[1].img}
              alt={`${spaces[1].name} photo`}
              className='rounded-2 length-space-sm '
            />

            <img
              src={spaces[2].img}
              alt={`${spaces[2].name} photo`}
              className='rounded-2 d-none d-md-block length-space-sm'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceBtn;
