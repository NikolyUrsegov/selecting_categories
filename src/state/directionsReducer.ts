import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CategoryType} from "./optionsDirectionsReducer";

export type DirectionType = {
    code: string
    name: string
}

export type DirectionsStateType = {
    directions: DirectionType[]
    activeDirection: null | string
    category: CategoryType
}

const initialState: DirectionsStateType = {
    directions: [
        {
            "code": "BTC",
            "name": "Bitcoin BTC "
        },
        {
            "code":
                "ETH",
            "name":
                "Ethereum ETH "
        }
        ,
        {
            "code":
                "CASHUSD",
            "name":
                "Наличные USD "
        }
        ,
        {
            "code":
                "CASHRUB",
            "name":
                "Наличные RUB "
        }
        ,
        {
            "code":
                "ACRUB",
            "name":
                "Альфа-банк RUB "
        }
        ,
        {
            "code":
                "SBERRUB",
            "name":
                "Сбербанк RUB "
        }
        ,
        {
            "code":
                "TCSBRUB",
            "name":
                "Тинькофф RUB "
        }
        ,
        {
            "code":
                "USDTTRC",
            "name":
                "Tether TRC20 USDT "
        }
        ,
    ],
    activeDirection: null as null | string,
    category: 'all'
}

export const slice = createSlice({
    name: 'directions',
    initialState: initialState,
    reducers: {
        changeActiveDirection(state, action: PayloadAction<{ code: string }>) {
            state.activeDirection = action.payload.code
        },
        changeCategoryDirection(state, action: PayloadAction<{ category: CategoryType }>) {
            state.category = action.payload.category
        }
    }
})
export const directionsReducer = slice.reducer
export const {changeActiveDirection, changeCategoryDirection} = slice.actions
