import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from 'redux/modules/todos';
import { InsertForm } from 'components/Todo/InsertForm';
import { useNavigate } from 'react-router-dom';
import useInput from 'hooks/useInput';

const TodoInputContainer = ({ updateTitle, updateText, flex, idNum }) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const [title, setTitle, titleChangeHandler] = useInput(updateTitle);
    const [text, setText, textChangeHandler] = useInput(updateText);

    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '' || title === '') {
            alert('내용을 입력해주세요');
        } else {
            const payload = {
                id: idNum,
                title,
                text,
            };
            dispatch(updateTodo(payload));
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
