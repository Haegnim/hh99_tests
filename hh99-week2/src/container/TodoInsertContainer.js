import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { InsertForm } from '../components/Todo/InsertForm';
import useInput from 'hooks/useInput';
// import { addTodo } from '../api/todos';
import { useQueryClient, useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

//[ ]useMutation이 뭐지
const TodoInsertContainer = () => {
    //[ ]QueryClient가 뭐지
    // const queryClient = useQueryClient();

    // const mutation = useMutation(addTodo, {
    //     onSuccess: () => {
    //         // Invalidate and refresh
    //         // 이렇게 하면, todos라는 이름으로 만들었던 query를
    //         // invalidate 할 수 있어요.
    //         queryClient.invalidateQueries('todos');
    //     },
    // });

    const dispatch = useDispatch();

    const [title, setTitle, titleChangeHandler] = useInput();
    const [text, setText, textChangeHandler] = useInput();
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '' || title === '') {
            alert('내용을 입력해주세요');
        } else {
            const newTodo = {
                id: uuidv4(),
                title,
                text,
                isdone: false,
            };
            // mutation.mutateAsync(newTodo);
            dispatch(addTodo(newTodo));
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
