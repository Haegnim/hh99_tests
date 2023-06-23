import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    //js
    const [todoCard, setTodoCard] = useState([
        { id: 1, title: `리액트 공부하기`, text: `리액트 기초를 공부해봅시다`, isdone: false },
        {
            id: 2,
            title: `리액트 공부하기1`,
            text: `리액트 기초를 공부해봅시다. 글수를 늘려서 테스트를 해봐야겠어 너무 졸립다. 나도 서버 같은 거 붙이고 싶다. 무리겠지.`,
            isdone: false,
        },
        { id: 3, title: `리액트 공부하기2`, text: `리액트 기초를 공부해봅시다`, isdone: true },
        { id: 4, title: `리액트 공부하기3`, text: `리액트 기초를 공부해봅시다`, isdone: false },
        { id: 5, title: `리액트 공부하기4`, text: `리액트 기초를 공부해봅시다`, isdone: false },
    ]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const [isDone, setIsDone] = useState('');
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
    };
    const clickRemove = (id) => {
        const newTodo = todoCard.filter((item) => item.id !== id);
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
        // const clearTodo = {
        //     id: item.id,
        //     title: item.title,
        //     text: item.text,
        //     isdone: getisDone,
        // };
        // setTodoCard([...todoCard, clearTodo]);
        // alert(item.isDone);
        // console.log(newTodo);
    };
    // html
    return (
        <div className="App">
            <header className="todo-header">My Todo List</header>
            <main>
                <div className="save-todo-box">
                    <div className="input-container">
                        <p>제목</p>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                        <p>내용</p>
                        <input type="text" value={text} onChange={textChangeHandler} />
                    </div>
                    <button onClick={onSubmitHandler}>저장</button>
                </div>

                <section className="working-box">
                    <h2>Working</h2>
                    <ul className="working-list">
                        {todoCard
                            .filter((item) => {
                                return item.isdone === false;
                            })
                            .map((item) => {
                                return (
                                    <li className="todo-card" isDone={item.isdone} key={item.id}>
                                        <p className="todo-title">{item.title}</p>
                                        <p className="todo-text">{item.text}</p>
                                        <div className="todo-card-btn-box">
                                            <button
                                                className="remove-btn"
                                                onClick={() => clickRemove(item.id)}
                                            >
                                                삭제하기
                                            </button>
                                            <button
                                                className="clear-btn"
                                                onClick={() => {
                                                    isDoneChange(item);
                                                }}
                                            >
                                                완료
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
                <section>
                    <h2>Done</h2>
                    <ul className="done-list">
                        {todoCard
                            .filter((item) => {
                                return item.isdone === true;
                            })
                            .map((item) => {
                                return (
                                    <li className="todo-card" isDone={item.isdone} key={item.id}>
                                        <p className="todo-title">{item.title}</p>
                                        <p className="todo-text">{item.text}</p>
                                        <div className="todo-card-btn-box">
                                            <button
                                                className="remove-btn"
                                                onClick={() => clickRemove(item.id)}
                                            >
                                                삭제하기
                                            </button>
                                            <button
                                                className="clear-btn"
                                                onClick={() => {
                                                    isDoneChange(item);
                                                }}
                                            >
                                                취소
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
