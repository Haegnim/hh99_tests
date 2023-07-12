import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    id: 1,
    author: null,
    title: null,
    content: null,
};

export const __getCards = createAsyncThunk('getCards', async (payload, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3001/cards');
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __AddCards = createAsyncThunk('ADD_CARD', async (payload, thunkAPI) => {
    try {
        await axios.post('http://localhost:3001/cards', payload);
        return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __deleteCard = createAsyncThunk('DELETE_CARD', async (payload, thunkAPI) => {
    try {
        await axios.delete(`http://localhost:3001/cards/${payload}`);
        return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const todoSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: {
        [__getCards.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = true;
        },
        [__getCards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.cards = action.payload;
        },
        [__getCards.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
        [__deleteCard.fulfilled]: (state, action) => {
            // const target = state.cards.findIndex((comment) => comment.id === action.payload);
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        [__deleteCard.rejected]: () => {},
        [__deleteCard.pending]: () => {},
        [__AddCards.pending]: (state) => {
            state.isSuccess = false;
            state.isLoading = true;
        },
        [__AddCards.fulfilled]: (state) => {
            state.isSuccess = true;
            state.isLoading = false;
        },
        [__AddCards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
