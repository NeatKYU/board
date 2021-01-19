import React from "react";
import { useListState } from "../../context/ListContext";
import Header from "../common/Header";

function ListPage() {
  const state = useListState();

  return (
    <div>
      <Header headText="ListPage" />
      <br />
      <div>{state && state.map((list) => <div>{list.title}</div>)}</div>
    </div>
  );
}

export default ListPage;
