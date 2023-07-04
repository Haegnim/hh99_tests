// import React, { useState } from 'react';
import { TodoTemplate } from '../layout/TodoTemplate';
import { styled } from 'styled-components';
import TodoInputContainer from '../container/TodoInputContainer';
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

export const Home = () => {
    // html
    return (
        <TodoTemplate>
            <Header>
                <h1>My Todo List</h1>
            </Header>
            <main style={{ width: `90%`, margin: `auto` }}>
                <TodoInputContainer />
                <TodoListContainer sectionTitle={'Working'} isDone={false} />
                <TodoListContainer sectionTitle={'Done'} isDone={true} />
            </main>
        </TodoTemplate>
    );
};
