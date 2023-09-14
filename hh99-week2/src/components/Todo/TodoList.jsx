import React from 'react';
import { styled } from 'styled-components';
import { TodoItem } from './TodoItem';

const TodoListStyle = styled.ul`
    display: flex;
    gap: 17px;
    flex-wrap: wrap;
    padding-left: 0px;
    min-height: 42vh;
`;

const TodoList = ({ sectionTitle, isdone, todos, deleteTodoitem, isdoneChangeTodoitem }) => {
    const filteredTodos = todos.filter((item) => item.isdone === isdone);
    return (
        <section>
            <h2>{sectionTitle}</h2>
            <TodoListStyle>
                <TodoItem
                    todos={filteredTodos}
                    deleteTodoitem={deleteTodoitem}
                    isdoneChangeTodoitem={isdoneChangeTodoitem}
                />
            </TodoListStyle>
        </section>
    );
};

export default TodoList;
