import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuth: false,
};

export const __isAuthCheck = createAsyncThunk('__isAuthCheck', async (payload, thunkAPI) => {
    thunkAPI.dispatch(authSlice.actions.isAuthCheck(payload));
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuthCheck: (state, action) => {
            console.log(action.payload);
            state.isAuth = action.payload;
        },
    },
});

export const { isAuthCheck } = authSlice.actions;
export default authSlice.reducer;
