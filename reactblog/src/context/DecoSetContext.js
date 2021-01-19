import React, { createContext, useContext, useReducer } from "react";

const initialDeco = {
  deco: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "DECO_SET":
      return (state.deco = action.deco);
    default:
      return;
  }
}

const DecoStateContext = createContext();
const DecoDispatchContext = createContext();

export function DecoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialDeco);
  console.log("DecoProvider state = ", state);
  return (
    <DecoStateContext.Provider value={state}>
      <DecoDispatchContext.Provider value={dispatch}>
        {children}
      </DecoDispatchContext.Provider>
    </DecoStateContext.Provider>
  );
}

export function useStateDeco() {
  return useContext(DecoStateContext);
}

export function useDispatchDeco() {
  return useContext(DecoDispatchContext);
}
