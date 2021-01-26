import React, { useEffect, useState } from "react";

function PageNation({ listCount, postPerPage }) {
  const [pageLength, setPageLength] = useState(1);
  const pageNumbers = [];

  useEffect(() => {
    setPageLength(Math.ceil(listCount / postPerPage));
  }, [listCount, postPerPage]);

  for (let i = 1; i <= pageLength; i++) {
    pageNumbers.push(i);
  }

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
        <div style={{ width: "30px" }}>{num}</div>
      ))}
      <button className="ui button small #454570">
        <i className="angle right icon"></i>
      </button>
    </div>
  );
}

export default PageNation;
