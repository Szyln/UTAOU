import React, { useState } from "react";
import PlanCard from "./PlanCard";

import { v4 as uuidv4 } from "uuid";

const PlansGroup = ({ termsInfo, setTerm, term }) => {

  return (
    /*
      會使用這個模組的地方
        - 首頁
        - 預約頁
    */
    <ul className="row gy-4 gy-md-6 gy-lg-0">
      {termsInfo.map((termInfo) => (
        <li className="col-lg" key={uuidv4()}>
          <PlanCard info={termInfo} setTerm={setTerm} term={term}/>
        </li>
      ))}
    </ul>
  );
};

export default PlansGroup;
