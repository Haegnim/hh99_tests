import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { useState } from 'react';
import { InsertForm } from '../components/Todo/InsertForm';

const TodoInsertContainer = ({ updateTitle, updateText, flex, idNum }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
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

export default TodoInsertContainer;
