import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    id: 1,
    body: 'some comment',
    author: 'typicode',
    postId: '3',
};

export const __getComments = createAsyncThunk('getComments', async (payload, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3001/comments', {
            params: {
                postId: payload,
            },
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __addComments = createAsyncThunk('addComments', async (payload, thunkAPI) => {
    try {
        await axios.post('http://localhost:3001/comments', payload);
        return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const todoSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [__getComments.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = true;
        },
        [__getComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.comments = action.payload;
        },
        [__getComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        },
        [__addComments.pending]: (state) => {
            state.isSuccess = false;
            state.isLoading = true;
        },
        [__addComments.fulfilled]: (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.comments = state.comments.concat(action.payload);
        },
        [__addComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
