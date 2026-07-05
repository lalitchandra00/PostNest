import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialSlice = {
    status :false,
    userData : null,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login:(state, action) => {
            state.status = true,
            state.userData = action.payload 
        },
        logout : (state) => {
            state.status = false;
            state.userData = null
        }
    }

})

export const {login, logout} =authSclice.actions;
export default authSlice.reducer;

