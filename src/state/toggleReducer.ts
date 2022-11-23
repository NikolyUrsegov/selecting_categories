import { createSlice } from '@reduxjs/toolkit'

export type toggleType = {
    code:string
    filter: string
}
const initialState: toggleType[] = [
    {code: 'BTC', filter:"crypto" },
    {code: 'ETH', filter:"crypto" },
    {code: 'USDTTRC', filter:"crypto" },
    {code: 'ACRUB', filter:"bank" },
    {code: 'SBERRUB', filter:"bank" },
    {code: 'TCSBRUB', filter:"bank" },
    {code: 'CASHUSD', filter:"nal" },
    {code: 'CASHRUB', filter:"nal" },
    ]

export const slice = createSlice({
    name: 'toggle',
    initialState: initialState as toggleType[],
    reducers: {
        // changeTodolistFilter(state, action: PayloadAction<{ id: string, filter: FilterValuesType }>) {
        //     const index = state.findIndex(tl => tl.id === action.payload.id)
        //     state[index].filter = action.payload.filter
        // },
        // changeTodolistEntityStatus(state, action: PayloadAction<{ id: string, status: RequestStatusType }>) {
        //     const index = state.findIndex(tl => tl.id === action.payload.id)
        //     state[index].entityStatus = action.payload.status
        // }
    }
})
export const directionsReducer  = slice.reducer
// export const {changeTodolistFilter, changeTodolistEntityStatus} = slice.actions

// export type FilterValuesType = 'all' | 'active' | 'completed';
// export type TodolistDomainType = TodolistType & {
//     filter: FilterValuesType
//     entityStatus: RequestStatusType
// }
