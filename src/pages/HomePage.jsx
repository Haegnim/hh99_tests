// import React, { useState } from 'react';
import { styled } from 'styled-components';
import TodoInsertContainer from '../container/TodoInsertContainer';
import { TodoListContainer } from '../container/TodoListContainer';

const Header = styled.header`
    padding: 12px 0;
    width: 90%;
    margin: 0 auto 12px;
    background-color: azure;
    text-align: center;
    border: 1px solid #777;
    h1 {
        font-size: 20px;
        margin: 0;
    }
`;

const TodoTemplate = styled.div`
    max-width: 1200px;
    min-width: 800px;
    width: 100%;
    margin: 0 auto;
    background-color: #efefef;
    padding: 14px 0 0 0;
`;
export const Home = () => {
    // html
    return (
        <TodoTemplate>
            <Header>
                <h1>My Todo List</h1>
            </Header>
            <main style={{ width: `90%`, margin: `auto` }}>
                <TodoInsertContainer />
                <TodoListContainer sectionTitle={'Working'} isDone={false} />
                <TodoListContainer sectionTitle={'Done'} isDone={true} />
            </main>
        </TodoTemplate>
    );
};
