//액션
const CREATE = 'todos/CREATE';
const UPDATE = 'todos/UPDATE';
const DELETE = 'todos/DELETE';
//액션 생성 함수

export const createItem = (todo) => ({ type: CREATE, todo });
export const updateItem = (id, todo) => ({ type: UPDATE, id, todo });
export const deleteItem = (id) => ({ type: DELETE, id });

const initialState = [
    {
        id: 1,
        title: '리액트 강의보기',
        body: '챕터 1부터 챕터 12까지 학습',
        isDone: false,
    },
    {
        id: 2,
        title: '점심 먹기',
        body: '점심 뭐먹지..?',
        isDone: false,
    },
    {
        id: 3,
        title: '점심 먹기',
        body: '점심 뭐먹지..?',
        isDone: false,
    },
    {
        id: 4,
        title: '점심 먹기',
        body: '점심 뭐먹지..?',
        isDone: false,
    },
    {
        id: 5,
        title: '점심 먹기',
        body: '점심 뭐먹지..?',
        isDone: false,
    },
];

// reducer -> 인자가 actions
function todos(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            return state.push(action.todo);
        case UPDATE:
            state.filter((todo) => todo.id !== action.id);
            return state.push(action.todo);
        case DELETE:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return initialState;
    }
}

export default todos;
// reducer -> actions -> 처리
// store에 저장
