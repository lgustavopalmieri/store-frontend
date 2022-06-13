import { Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productsReducer from "./Products/productsSlice"

const store = configureStore({
    reducer: {
        products: productsReducer
    },
    devTools: true,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store