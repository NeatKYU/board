import React, {
  createContext,
  useContext,
  useRef,
  useReducer,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const initialList = {
  lists: [],
};

function reducer(state, action) {
  if (!action) {
    return;
  }
  switch (action.type) {
    case "INSERT":
      return state.concat(action.list);
    case "REMOVE":
      return state.filter((list) => list.sid !== action.sid);
    case "GET_LIST":
      console.log("getlist data = ", action.lists);
      return {
        ...state,
        lists: action.lists,
      };
    case "GET_LIST_COUNT":
      console.log("getlistcount data = ", action.count);
      return {
        ...state,
        count: action.count,
      };
    case "SET_CURRENTPAGE":
      return {
        ...state,
        currentpostpage: action.currentpostpage,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ListStateContext = createContext();
const ListDispatchContext = createContext();
const ListNextIdContext = createContext();

export function ListProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialList);
  const NextId = useRef(2);
  console.log("Provider state=", state);

  return (
    <ListStateContext.Provider value={state}>
      <ListDispatchContext.Provider value={dispatch}>
        <ListNextIdContext.Provider value={NextId}>
          {children}
        </ListNextIdContext.Provider>
      </ListDispatchContext.Provider>
    </ListStateContext.Provider>
  );
}

export function useListState() {
  return useContext(ListStateContext);
}

export function useListDispatch() {
  return useContext(ListDispatchContext);
}

export function useListNextId() {
  return useContext(ListNextIdContext);
}

export async function getList(dispatch) {
  try {
    const response = await axios.get("http://localhost:8000/list/getTest");
    dispatch({ type: "GET_LIST", lists: response.data });
  } catch (e) {
    console.log(e);
  }
}

export async function getListCount(dispatch) {
  try {
    const response = await axios.get("http://localhost:8000/list/getSize");
    dispatch({ type: "GET_LIST_COUNT", count: response.data });
  } catch (e) {
    console.log(e);
  }
}

export function setCurrentPostPage(dispatch, currentPostPage) {
  dispatch({ type: "SET_CURRENTPAGE", currentpostpage: currentPostPage });
}
