import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/modules/todos';
import { useState } from 'react';
import { InsertForm } from '../components/Todo/InsertForm';
import { useNavigate } from 'react-router-dom';

const TodoInputContainer = ({ updateTitle, updateText, flex, idNum }) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

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
            dispatch(updateTodo(idNum, title, text));
            navigateTo('/');
        }
        setText('');
        setTitle('');
    };

    return (
        <InsertForm
            flex={flex}
            onSubmit={onSubmit}
            title={title}
            titleChangeHandler={titleChangeHandler}
            text={text}
            textChangeHandler={textChangeHandler}
        />
    );
};

export default TodoInputContainer;
