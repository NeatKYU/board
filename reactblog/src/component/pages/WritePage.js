import React, { useState } from "react";
import Editor from "../common/CKEditor";
import Header from "../common/Header";
import { useStateDeco } from "../../context/DecoSetContext";
import { useListDispatch, useListNextId } from "../../context/ListContext";

function WritePage() {
  const [title, setTitle] = useState("");

  const dispatch = useListDispatch();
  const decoState = useStateDeco();
  const nextId = useListNextId();

  const onChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("decoState = ", decoState);
    dispatch({
      type: "INSERT",
      list: {
        id: nextId.current,
        title: title,
        decoration: decoState,
      },
    });
    setTitle("");
    nextId.current += 1;
  };

  return (
    <div>
      <Header headText="WritePage" />
      <br />
      <form onSubmit={onSubmit}>
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

export default WritePage;
