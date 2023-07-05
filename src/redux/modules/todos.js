import { createSlice } from '@reduxjs/toolkit';

let id = 6;

// 초기값
const initialState = [
    { id: 1, title: `리액트 공부하기`, text: `리액트 기초를 공부해봅시다`, isdone: false },
    {
        id: 2,
        title: `리액트 공부하기1`,
        text: `리액트 기초를 공부해봅시다. 글수를 늘려서 테스트를 해봐야겠어 너무 졸립다. 나도 서버 같은 거 붙이고 싶다. 무리겠지.글수를 늘려서 테스트를 해봐야겠어 너무 졸립다. 나도 서버 같은 거 붙이고 싶다. 무리겠지.`,
        isdone: false,
    },
    { id: 3, title: `리액트 공부하기2`, text: `리액트 기초를 공부해봅시다`, isdone: true },
    { id: 4, title: `리액트 공부하기3`, text: `리액트 기초를 공부해봅시다`, isdone: false },
    { id: 5, title: `리액트 공부하기4`, text: `리액트 기초를 공부해봅시다`, isdone: false },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload.title);
            const todo = {
                id: id++, //여기를 수정고안할 것
                title: action.payload.title,
                text: action.payload.text,
                isdone: false,
            };
            return state.concat(todo);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        isdoneChange: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isdone: !todo.isdone };
                } else {
                    return todo;
                }
            });
        },
        updateTodo: (state, action) => {
            const todo = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
                isdone: false,
            };
            //
            //find 조건에 맞는 첫번째 요소를 반환하거나 조건에 맞는 요소가 없는 경우 undefined 반환
            //findIndex: 주어진 조건에 맞는 첫번째 요소의 인덱스를 반환하거나, 조건에 맞는 요소가 없는 경우 -1을 반환
            const todoIndex = state.findIndex((todo) => todo.id === action.payload.id);
            if (todoIndex !== -1) {
                state.splice(todoIndex, 1, todo);
            }
        },
    },
});
// export default todos;
export const { addTodo, deleteTodo, isdoneChange, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
