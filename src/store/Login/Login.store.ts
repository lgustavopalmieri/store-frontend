import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IUserLoginProps } from "./api";

export interface ILoginState {
    login: { [id: string]: IUserLoginProps}
}


const initialState: ILoginState = {
    login: {}
}

const login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signUp (state, action: PayloadAction<IUserLoginProps>){
            // state.login += action.payload
        }
    }
})

export const { signUp } = login.actions

export default login.reducer