import React, { useState } from "react";
import Editor from "../common/CKEditor";
import Header from "../common/Header";
import { useStateDeco } from "../../context/DecoSetContext";
import {
  useListDispatch,
  useListState,
  useListNextId,
  insertPost,
} from "../../context/ListContext";

function WritePage() {
  const [title, setTitle] = useState("");

  const state = useListState();
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
        title: title,
        content: decoState.deco,
      },
    });
    insertPost(state);
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
          <button className="ui secondary button" onClick={onSubmit}>
            저장
          </button>
          <button className="ui button">취소</button>
        </div>
      </form>
    </div>
  );
}

export default WritePage;
