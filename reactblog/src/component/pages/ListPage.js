import React, { useEffect } from "react";
import {
  useListState,
  getList,
  useListDispatch,
} from "../../context/ListContext";
import Header from "../common/Header";
import ListItem from "./ListItem";

function ListPage() {
  const state = useListState();
  const dispatch = useListDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await getList(dispatch);
    };
    fetchData();
  }, []);

  console.log("listPage state=", state.lists);

  return (
    <div>
      <Header headText="ListPage" />
      <br />
      <div className="ui computer equal width grid backgray">
        <div className="row">
          <div className="column">종류</div>
          <div className="column">제목</div>
          <div className="column">작성자</div>
          <div className="column">작성일</div>
          <div className="column">조회수</div>
        </div>
      </div>
      <br />
      <div>
        {state &&
          state.lists.map((e) => (
            <ListItem
              key={e.title}
              title={e.title}
              date={e.date}
              section={e.section}
            />
          ))}
      </div>
    </div>
  );
}

export default ListPage;
