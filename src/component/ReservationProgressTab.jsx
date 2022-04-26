import React from 'react';

const ReservationProgressTab = ({
  bgColor,
  textColor,
  children,
  marginAuto,
}) => {
  return (
    <li className={`col-md-2 ${marginAuto}`}>
      <p
        className={`bg-${bgColor} text-${textColor} rounded text-center py-3`}
      >
        {children}
      </p>
    </li>
  );
};

export default ReservationProgressTab;
