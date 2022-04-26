import React from "react";

const SearchLessonInput = () => {
  return (
    <div className="row gx-3 row-cols-2">
      <div className="col-8 col-md-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="請輸入要搜尋的課程"
            aria-label="search lesson"
            aria-describedby="searchLessonBtn"
          />
          <input
            className="btn btn-primary"
            type="submit"
            id="searchLessonBtn"
            value="搜尋"
          />
        </div>
      </div>
      <div className="col-4 col-md-auto">
        <select className="form-select" aria-label="lesson type sorting" defaultValue="全部課程">
          <option>全部課程</option>
          <option value="1">初級</option>
          <option value="2">中級</option>
          <option value="3">高級</option>
        </select>
      </div>
    </div>
  );
};

export default SearchLessonInput;
