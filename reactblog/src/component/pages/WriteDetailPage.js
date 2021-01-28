import React from "react";
import Header from "../common/Header";

function WriteDetailPage() {
  return (
    <div>
      <Header headText="WriteDetail" />
      <br />
      <div>
        <div style={{ height: "100px", alignItems: "center" }}>
          <p style={{ fontSize: "50px" }}>title</p>
        </div>
        <div
          style={{
            fontSize: "5px",
            height: "50px",
          }}
        >
          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <div>
              <div>작성자</div>
              <div>작성일</div>
            </div>
          </div>
        </div>
        <div style={{ height: "1000px" }}>context</div>
      </div>
      <br />
      <div>
        <button className="ui button">수정</button>
        <button className="ui button">취소</button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default WriteDetailPage;
