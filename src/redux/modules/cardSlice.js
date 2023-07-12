import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    id: 1,
    author: null,
    title: null,
    content: null,
};

export const __getCard = createAsyncThunk('getCard', async (payload, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3001/cards/${payload}`);
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __updateCard = createAsyncThunk('UPDATE_CARD', async (payload, thunkAPI) => {
    try {
        await axios.put(`http://localhost:3001/cards/${payload.id}`, payload);
        return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const todoSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: {
        [__getCard.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = true;
        },
        [__getCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.card = action.payload;
        },
        [__getCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
        [__updateCard.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = true;
        },
        [__updateCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.card = action.payload;
        },
        [__updateCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
