import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { todo, textBox } from "./reducer/todoreducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  todo,
  textBox,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
