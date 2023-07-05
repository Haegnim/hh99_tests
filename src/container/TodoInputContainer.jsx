import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { updateTodo } from '../redux/modules/todos';
import { useState } from 'react';
import { InsertForm } from '../features/InsertForm';
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
            if (!flex) {
                dispatch(addTodo(title, text));
            } else {
                dispatch(updateTodo(idNum, title, text));
                navigateTo('/');
            }
        }
        setText('');
        setTitle('');
    };
    // const isInputEmpty = setTitle === '';
    console.log(flex);
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
