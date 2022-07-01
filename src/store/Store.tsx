import React, { createContext, useReducer, ReactNode } from "react";

import { reducer } from "../reducers";
type State = {
  todoList: any[];
};

const initialState: State = {
  todoList: [],
};

type Context = {
  state: State;
  dispatch: React.Dispatch<State>;
};

export const Store = createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

interface IStorProvider {
  children: ReactNode;
}

export const StoreProvider: React.FC<IStorProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: Context = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
