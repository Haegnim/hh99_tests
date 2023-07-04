import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { useState } from 'react';
import { InsertForm } from '../features/InsertForm';

const TodoInputContainer = ({ updateTitle, updateText }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(updateTitle);
    const [text, setText] = useState(updateText);
    console.log(updateTitle);
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const textChangeHandler = (event) => {
        setText(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '' || title === '') {
            alert('내용을 입력해주세요');
        } else {
            dispatch(addTodo(title, text));
        }
        setText('');
        setTitle('');
    };
    // const isInputEmpty = setTitle === '';
    return (
        <InsertForm
            flex={'column'}
            onSubmit={onSubmit}
            title={title}
            titleChangeHandler={titleChangeHandler}
            text={text}
            textChangeHandler={textChangeHandler}
        />
    );
};

export default TodoInputContainer;
