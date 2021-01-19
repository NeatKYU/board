import React from "react";
import Header from "../common/Header";

function LoginPage() {
  return (
    <div>
      <Header headText="회원가입" />
      <br />
      <br />
      <br />
      <div className="login" style={{ display: "flex" }}>
        <div className="flexDisplay">
          <div className="logH4">
            <h4>ID:</h4>
            <h4>password:</h4>
            <h4>name:</h4>
            <h4>Email:</h4>
          </div>
        </div>
        <div>
          <div className="ui input logInput">
            <input type="text" />
          </div>
          <div className="ui input logInput">
            <input type="text" />
          </div>
          <div className="ui input logInput">
            <input type="text" />
          </div>
          <div className="ui input logInput">
            <input type="text" />
          </div>
        </div>
      </div>
      <div>
        <button className="ui primary button">제출</button>
      </div>
    </div>
  );
}

export default LoginPage;
