import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionType, appReducer} from "./app-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";



export type thunkDispatchType = ThunkDispatch<AppRootStateType, any, ActionType>

export const rootReducer = combineReducers({
    appReducer: appReducer,
})

export const rootStore = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = rootStore;