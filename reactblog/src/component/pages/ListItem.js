import React, { useEffect, useState } from "react";

function ListItem({ title, date, section }) {
  const [sectionCheck, setSectionCheck] = useState("");

  useEffect(() => {
    if (section === "Y") {
      setSectionCheck("redFont");
    }
  }, [sectionCheck]);

  console.log("sectionCheck=", sectionCheck);
  return (
    <div className="ui computer equal width grid">
      <div className={`column ${sectionCheck}`}>
        {section === "Y" ? "공지글" : "일반글"}
      </div>
      <div className="column" style={{ fontSize: "20px" }}>
        {title}
      </div>
      <div className="column">작성자</div>
      <div className="column">{date}</div>
      <div className="column">조회수</div>
    </div>
  );
}

export default ListItem;
