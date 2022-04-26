import React from 'react';

const PageTitle = ({ children, fw = 'normal', fontColor = '' }) => {
  return <h2 className={`mb-6 mb-md-8 fw-${fw} ${fontColor}`}>{children}</h2>;
};

export default PageTitle;
