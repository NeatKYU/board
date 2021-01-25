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
