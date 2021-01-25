import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import axios from "axios";

function LoginPage() {
  const [users, setUsers] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/getTest", {
        crossdomain: true,
      });
      setUsers(response.data);
      console.log("res data = ", response.data);
      console.log("user data = ", users);
    } catch (e) {
      console.log(e);
    }
  };

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
        <button className="ui primary button" onClick={onClick}>
          제출
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
