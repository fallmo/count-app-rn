import { storeList } from "./Storage";

export default (state, action) => {
  let nState;
  switch (action.type) {
    case "REFRESH_LIST":
      return {
        ...state,
        list: action.payload,
      };
    case "CREATE_COUNT":
      const newCount = {
        id: state.list.length + 1,
        ...action.payload,
        updated: new Date().toLocaleString(),
        created: new Date().toLocaleString(),
      };
      nState = {
        ...state,
        list: [newCount, ...state.list],
      };
      storeList(nState.list);
      return nState;
    case "DELETE_COUNT":
      nState = {
        ...state,
        list: state.list.filter(count => count.id !== action.payload),
      };
      storeList(nState.list);
      return nState;
    case "INCREMENT_COUNT":
      nState = {
        ...state,
        list: state.list.map(count => {
          if (count.id === action.payload) {
            count.count++;
            count.updated = new Date().toLocaleString();
          }
          return count;
        }),
      };
      storeList(nState.list);
      return nState;
    case "DECREMENT_COUNT":
      nState = {
        ...state,
        list: state.list.map(count => {
          if (count.id === action.payload) {
            count.count--;
            count.updated = new Date().toLocaleString();
          }
          return count;
        }),
      };
      storeList(nState.list);
      return nState;
    default:
      return state;
  }
};
