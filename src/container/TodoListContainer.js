import React from 'react';
import TodoList from '../components/Todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { isdoneChange } from '../redux/modules/todos';
export const TodoListContainer = ({ sectionTitle, isdone }) => {
    const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();
    const deleteTodoitem = (item) => {
        dispatch(deleteTodo(item.id));
    };
    const isdoneChangeTodoitem = (item) => {
        dispatch(isdoneChange(item.id, item.isdone));
    };
    return (
        <TodoList
            todos={todos}
            deleteTodoitem={deleteTodoitem}
            isdoneChangeTodoitem={isdoneChangeTodoitem}
            sectionTitle={sectionTitle}
            isdone={isdone}
        />
    );
};
