import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk('__addToDo', async (payload, thunkAPI) => {
    try {
        await waitTwoSeconds();
        // axios.post('http://localhost:3001/todos', payload);
        thunkAPI.dispatch(addTodo(payload));
    } catch (error) {
        return alert('추가에 실패하였습니다.');
    }
});

export const __deleteTodo = createAsyncThunk('__deleteToDo', async (payload, thunkAPI) => {
    try {
        await waitTwoSeconds();
        // axios.delete(`http://localhost:3001/todos/${payload}`);
        thunkAPI.dispatch(deleteTodo(payload));
    } catch (error) {
        return alert('삭제 실패하였습니다.');
    }
});

const initialState = {
    list: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        },
    },
    extraReducers: {},
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
