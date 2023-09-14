import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import InputBox from './components/InputBox';

function App() {
    //js
    // todolist content
    const [todoCard, setTodoCard] = useState([
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
    ]);

    //input value submit
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const textChangeHandler = (event) => {
        setText(event.target.value);
    };
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const onSubmitHandler = () => {
        const newTodo = {
            id: todoCard.length + 1,
            title,
            text,
            isdone: false,
        };
        setTodoCard([...todoCard, newTodo]);
        setText('');
        setTitle('');
    };

    //button click event
    const clickRemove = (id) => {
        const newTodo = todoCard
            .filter((item) => item.id !== id)
            .map((item, idx) => {
                return { ...item, id: idx };
            });
        setTodoCard(newTodo);
    };
    const isDoneChange = (item) => {
        let getisDone = item.isdone;
        !getisDone ? (getisDone = true) : (getisDone = false);
        setTodoCard((todocard) => {
            return todocard.map((card) => {
                if (card.id === item.id) {
                    return { ...card, isdone: getisDone };
                } else {
                    return card;
                }
            });
        });
    };
    // html
    return (
        <div className="App">
            <header className="todo-header">
                <h1>My Todo List</h1>
            </header>
            <main>
                <InputBox
                    title={title}
                    text={text}
                    onSubmitHandler={onSubmitHandler}
                    titleChangeHandler={titleChangeHandler}
                    textChangeHandler={textChangeHandler}
                />

                <TodoList
                    sectionTitle={'Working'}
                    todoCard={todoCard}
                    isDone={false}
                    isDoneChange={isDoneChange}
                    clickRemove={clickRemove}
                />

                <TodoList
                    sectionTitle={'Done'}
                    todoCard={todoCard}
                    isDone={true}
                    isDoneChange={isDoneChange}
                    clickRemove={clickRemove}
                />
            </main>
        </div>
    );
}

export default App;
