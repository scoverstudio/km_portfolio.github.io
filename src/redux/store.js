import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import initialState from "./initialState";
import { portfolioReducer } from "./portfolioRedux";

const reducers = {
  portfolio: portfolioReducer,
};

const combinedReducers = combineReducers(reducers);

export const store = legacy_createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
