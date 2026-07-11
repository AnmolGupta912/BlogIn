import {createSlice} from "@reduxjs/toolkit";

// TODO: WHAT IS THE USE OF AUTHSTATUS? 
const initialState = {
    status: false,
    userDate: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userDate = action.payload.userDate
        },
        logout: (state) => {
            state.status = false
            state.userDate = null
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer