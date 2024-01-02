import { combineReducers } from "redux";
import counter from "./counter.ts";
import order from "./order.ts";

const rootReducer = combineReducers({
  counter,
  order
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;