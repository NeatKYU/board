import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ListItem({ title, date, section, userId, viewCount }) {
  const [sectionCheck, setSectionCheck] = useState("");

  useEffect(() => {
    if (section === "Y") {
      setSectionCheck("redFont");
    }
  }, [sectionCheck]);

  return (
    <div className="ui computer equal width grid">
      <div className={`column ${sectionCheck}`}>
        {section === "Y" ? "공지글" : "일반글"}
      </div>
      <div className="column" style={{ fontSize: "20px" }}>
        <NavLink to="/writedetail">{title}</NavLink>
      </div>
      <div className="column">{userId}</div>
      <div className="column">{date}</div>
      <div className="column">{viewCount}</div>
    </div>
  );
}

export default ListItem;
