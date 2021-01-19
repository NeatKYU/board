import React, { createContext, useContext, useRef, useReducer } from "react";

const initialList = [
  {
    id: 1,
    title: "first wirte",
    decoration: "wirte test text",
  },
];

function reducer(state, action) {
  if (!action) {
    return;
  }
  switch (action.type) {
    case "INSERT":
      return state.concat(action.list);
    case "REMOVE":
      return state.filter((list) => list.id !== action.id);
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
