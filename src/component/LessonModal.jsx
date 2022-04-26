import React from "react";
import { Link } from 'react-router-dom';

const LessonModal = ({lesson}) => {
  return (
    <div className="container modal" modal="lessonModal">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="card bg-secondary text-white rounded">
            <div className="row g-0 py-5">
              <div className="col-6 col-md-5 col-lg-4 offset-3 offset-md-0 offset-lg-1">
                <div className="ratio ratio-1x1 ratio-only-md-12x19">
                  <img
                    src={lesson.img}
                    className="img-fluid rounded length-lessonCard-img"
                    alt={lesson.name}
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg- d-md-flex align-items-center">
                <div className="card-body">
                  <h2 className="card-title text-start text-white">
                    {lesson.name}
                  </h2>
                  <div className="d-flex">
                    <h3 className="card-subtitle">
                      授課老師：{lesson.teacher}
                    </h3>
                    <span className="badge rounded-pill bg-primary">
                      {lesson.time} min
                    </span>
                  </div>
                  <p className="card-text">{lesson.info}</p>
                  <Link to="/UTAOU/reservation/selection">
                    <button type="button" className="btn btn-secondary-light">
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
  );
};

export default LessonModal;
