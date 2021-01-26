import React, { useEffect, useState } from "react";
import { setCurrentPostPage, useListDispatch } from "../../context/ListContext";

function PageNation({ listCount, postPerPage, currentPage, setCurrentPage }) {
  const dispatch = useListDispatch();
  const [pageLength, setPageLength] = useState(1);
  const [page, setPage] = useState(currentPage);
  const pageNumbers = [];

  useEffect(() => {
    setPageLength(Math.ceil(listCount / postPerPage));
    setCurrentPostPage(dispatch, page);
  }, [listCount, postPerPage]);

  for (let i = 1; i <= pageLength; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (num) => {
    setCurrentPage(num);
    setCurrentPostPage(dispatch, num);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button className="ui button small #454570">
        <i className="angle left icon"></i>
      </button>
      {pageNumbers.map((num) => (
        <div style={{ width: "40px", fontSize: "20px", textAlign: "center" }}>
          <button
            className="circular ui icon button"
            onClick={() => handleClick(num)}
          >
            <i className="icon number">{num}</i>
          </button>
        </div>
      ))}
      <button className="ui button small #454570">
        <i className="angle right icon"></i>
      </button>
    </div>
  );
}

export default PageNation;
