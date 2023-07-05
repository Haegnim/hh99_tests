import React, { useState, useEffect } from 'react';
import TodoList from '../components/Todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { isdoneChange } from '../redux/modules/todos';

import { getTodos } from '../api/todos';
import { useQuery } from 'react-query';

export const TodoListContainer = ({ sectionTitle, isdone }) => {
    // const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();
    // [ ]서버에서 재조회 하지 않음
    const { isLoading, isError, data } = useQuery('todos', getTodos);

    if (isLoading) {
        return <p>로딩중입니다....!</p>;
    }

    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }

    const deleteTodoitem = (item) => {
        dispatch(deleteTodo(item.id));
    };
    const isdoneChangeTodoitem = (item) => {
        dispatch(isdoneChange(item.id, item.isdone));
    };
    return (
        <TodoList
            todos={data}
            deleteTodoitem={deleteTodoitem}
            isdoneChangeTodoitem={isdoneChangeTodoitem}
            sectionTitle={sectionTitle}
            isdone={isdone}
        />
    );
};
