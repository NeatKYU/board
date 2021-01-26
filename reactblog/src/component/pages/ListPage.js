// react 라이브러리
import React, { useEffect, useState } from "react";

// contextAPI
import {
  useListState,
  getList,
  useListDispatch,
  getListCount,
} from "../../context/ListContext";

// 컴포넌트 불러오기
import Header from "../common/Header";
import ListItem from "./ListItem";
import Page from "./PageNation";

function ListPage() {
  const state = useListState();
  const dispatch = useListDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      //contextAPI에 있는 기능 사용
      await getList(dispatch);
      await getListCount(dispatch);
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = state.lists.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentpage = ", currentPage);

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
        {currentPosts &&
          currentPosts.map((e) => (
            <ListItem
              key={e.sid}
              title={e.title}
              context={e.context}
              date={e.date}
              section={e.section}
              userId={e.user_id}
              viewCount={e.view_count}
            />
          ))}
      </div>
      <br />
      <br />
      <div>
        <Page
          listCount={state.count}
          postPerPage={postPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ListPage;
