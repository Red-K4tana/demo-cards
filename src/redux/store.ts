import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    appReducer: appReducer,
})

export const rootStore = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>