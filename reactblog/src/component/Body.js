import React, { useState } from "react";
import Editor from "./CKEditor";

function Body() {
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onSubmit = () => {};

  return (
    <div>
      <form>
        <div className="ui input" style={{ width: "500px", height: "50px" }}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <br />
        <br />
        <div className="form-warrper">
          <Editor />
        </div>
        <br />
        <br />
        <br />
        <div>
          <button className="ui secondary button">저장</button>
          <button className="ui button">취소</button>
        </div>
      </form>
    </div>
  );
}

export default Body;
