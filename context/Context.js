import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { retrieveList } from "./Storage";

const dummyList = [
  {
    id: 1,
    label: "Workouts Done",
    count: 10,
    color: "#C7FFCC",
    updated: "04/11/20",
    created: "01/01/01",
  },
  {
    id: 2,
    label: "Glasses of Water",
    count: 2,
    color: "#C7FFCC",
    updated: "04/11/20",
    created: "01/01/01",
  },
];
const initalState = {
  list: [],
};

export const Context = createContext(initalState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initalState);
  const refreshList = async () => {
    try {
      const list = await retrieveList();
      dispatch({
        type: "REFRESH_LIST",
        payload: list,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const createCount = count => {
    try {
      dispatch({
        type: "CREATE_COUNT",
        payload: count,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCount = id => {
    try {
      dispatch({
        type: "DELETE_COUNT",
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const incrementCount = id => {
    try {
      dispatch({
        type: "INCREMENT_COUNT",
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const decrementCount = id => {
    try {
      dispatch({
        type: "DECREMENT_COUNT",
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Context.Provider
      value={{
        list: state.list,
        refreshList,
        createCount,
        deleteCount,
        incrementCount,
        decrementCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};
