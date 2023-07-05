// action value
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE = 'todos/TOGGLE';
const UPDATE = 'todos/UPDATE';
// action creator : action value를 return하는 함수
let id = 6;

export const addTodo = (title, text) => {
    return {
        type: ADD_TODO,
        todo: {
            id: id++, //여기를 수정고안할 것
            title,
            text,
            isdone: false,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};
export const isdoneChange = (id, isdone) => {
    return {
        type: TOGGLE,
        id,
        isdone,
    };
};

export const updateTodo = (idNum, title, text) => {
    return {
        type: UPDATE,
        id: idNum,
        todo: {
            id: idNum, //여기를 수정고안할 것
            title,
            text,
            isdone: false,
        },
    };
};
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

// 리듀서 : 'state에 변화를 일으키는'함수
// 1. state를 action의 type에 따라 변경하는 함수
// input : state와 action
const todos = (state = initialState, action) => {
    switch (action.type) {
        //휴먼에러가 날 수 있다.
        case ADD_TODO:
            return state.concat(action.todo);
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, isdone: !todo.isdone };
                } else {
                    return todo;
                }
            });
        case UPDATE:
            state.splice(action.id - 1, 1, action.todo);
            return [...state];
        default:
            return state;
    }
};
export default todos;
