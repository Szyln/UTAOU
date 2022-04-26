import React from "react";
import { Link } from "react-router-dom";
// import bannerImg from '/photo-1612157777902-5382bc6e864b.jpeg';

const Banner = () => {
  return (
    <div className="bg-homepage-banner d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-5 offset-lg-1">
            <span className="fs-4 text-primary-dark mb-2">深度理解歌唱</span>
            <h1 className="text-primary-dark mb-1">UTAOU，唱你想唱的歌</h1>
            <p className="fs-6 text-primary-dark mb-4">剖析歌唱技巧，突破歌唱盲點</p>
            <Link to="/UTAOU/reservation/selection" className="pe-2">
              <button
                type="button"
                className="btn btn-secondary-light text-primary-dark "
              >
                立即預約
              </button>
            </Link>
            <Link to="/UTAOU/course">
              <button type="button" className="btn btn-secondary">
                課程介紹
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
