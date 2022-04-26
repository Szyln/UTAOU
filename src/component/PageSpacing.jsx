import React from 'react';

const PageSpacing = ({ children, pb = `pb-22 pb-md-20 pb-lg-27` }) => {
  return (
    <div className={`pt-12 pt-md-16  pt-lg-16 ${pb}`}>{children}</div>
  );
};

export default PageSpacing;
