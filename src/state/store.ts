import {TypedUseSelectorHook, useSelector} from "react-redux";
import { combineReducers, configureStore} from '@reduxjs/toolkit'
import {directionsReducer} from "./directionsReducer";
import {optionsDirectionsReducer} from "./optionsDirectionsReducer";



const rootReducer = combineReducers({
    directions: directionsReducer,
    optionsDirections: optionsDirectionsReducer
})

export const store = configureStore(
    {
        reducer: rootReducer
    }
);

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store;