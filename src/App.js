import { useState } from 'react';
import './App.css';

function App() {
    const [content, setContent] = useState([
        {
            id: 1,
            content: 'react를 배워봅시다',
        },
        {
            id: 1,
            content: 'react를 배워봅시다',
        },
        {
            id: 1,
            content: 'react를 배워봅시다',
        },
    ]);
    const [inputValue, setinputValue] = useState('');
    const onChangeHandler = (event) => {
        setinputValue(event.target.value);
    };
    const onSubmitHandler = () => {
        if (inputValue === '') {
            alert('내용을 입력해주세요');
        } else {
            const newContent = {
                id: content[content.length - 1].id + 1,
                content: inputValue,
            };
            setContent([...content, newContent]);
            setinputValue('');
        }
    };
    return (
        <div className="App">
            <div className="input-form">
                <input
                    type="text"
                    value={inputValue}
                    className="input-box"
                    onChange={onChangeHandler}
                    placeholder="여기에 제목을 입력해주세요"
                />
                <button className="btn-style" onClick={onSubmitHandler}>
                    추가하기
                </button>
            </div>
            <h1>TODO LIST</h1>
            <ul className="todolist">
                {content.map((item) => {
                    return (
                        <li className="todocard" key={item.id}>
                            {item.content}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
