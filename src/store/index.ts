import { combineReducers } from "redux";
import counter from "./counter.ts";
import order from "./order.ts";
import party from "./party.ts";

const rootReducer = combineReducers({
  counter,
  order,
  party
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;