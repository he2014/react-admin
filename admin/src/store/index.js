
import { createStore, combineReducers, applyMiddleware } from "redux";
import * as login from './login/reducer'
import thunk from "redux-thunk";

export default createStore(
    combineReducers({ ...login }),
    applyMiddleware(thunk)
)