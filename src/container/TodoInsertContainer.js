import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { InsertForm } from '../components/Todo/InsertForm';
import useInput from 'hooks/useInput';

const TodoInsertContainer = () => {
    const dispatch = useDispatch();

    const [title, setTitle, titleChangeHandler] = useInput();
    const [text, setText, textChangeHandler] = useInput();
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '' || title === '') {
            alert('내용을 입력해주세요');
        } else {
            const payload = {
                title,
                text,
            };
            dispatch(addTodo(payload));
        }
        setText('');
        setTitle('');
    };

    return (
        <InsertForm
            onSubmit={onSubmit}
            title={title}
            titleChangeHandler={titleChangeHandler}
            text={text}
            textChangeHandler={textChangeHandler}
        />
    );
};

export default TodoInsertContainer;
