import React from 'react';
import { deleteTodo } from '../redux/modules/todos';
import { isdoneChange } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';
import { TodoItem } from '../components/Todo/TodoItem';

export const TodoDetailItemContainer = ({ todos }) => {
    const dispatch = useDispatch();

    const deleteTodoitem = (item) => {
        dispatch(deleteTodo(item.id));
    };
    const isdoneChangeTodoitem = (item) => {
        dispatch(isdoneChange(item.id, item.isdone));
    };

    let buttonText = '완료';
    todos[0].isdone ? (buttonText = '취소') : (buttonText = '완료');
    return (
        <TodoItem
            todos={todos}
            buttonText={buttonText}
            deleteTodoitem={deleteTodoitem}
            isdoneChangeTodoitem={isdoneChangeTodoitem}
        />
    );
};
