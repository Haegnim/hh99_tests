import React from 'react';
import { styled } from 'styled-components';
import { TodoItem } from '../components/Todo/TodoItem';

const TodoListStyle = styled.ul`
    display: flex;
    gap: 17px;
    flex-wrap: wrap;
    padding-left: 0px;
    min-height: 42vh;
`;

const TodoList = ({ sectionTitle, isDone, todos, deleteTodoitem, isdoneChangeTodoitem }) => {
    let buttonText = '완료';
    isDone ? (buttonText = '취소') : (buttonText = '완료');
    const filteredTodos = todos.filter((item) => item.isdone === isDone);
    return (
        <section>
            <h2>{sectionTitle}</h2>
            <TodoListStyle>
                <TodoItem
                    todos={filteredTodos}
                    buttonText={buttonText}
                    deleteTodoitem={deleteTodoitem}
                    isdoneChangeTodoitem={isdoneChangeTodoitem}
                />
            </TodoListStyle>
        </section>
    );
};

export default TodoList;
