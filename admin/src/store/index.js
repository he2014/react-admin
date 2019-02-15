
import { createStore, combineReducers, applyMiddleware } from "redux";
import * as login from './login/reducer'
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger()
export default createStore(
    combineReducers({ ...login }),
    applyMiddleware(
        thunk,
        loggerMiddleware
    )
)