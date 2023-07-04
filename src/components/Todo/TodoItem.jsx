import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const TodoListItem = styled.li`
    padding: 28px 28px;
    width: 290px;
    height: 290px;
    background-color: azure;
    border: 1px solid #777;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .todo-title {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
    }
    .todo-text {
        margin: 15px 0 32px;
    }
    .todo-card-btn-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            width: calc(50% - 8px);
            padding: 12px 0;
        }
        .remove-btn {
            border: 2px solid red;
            border-radius: 8px;
        }
        .clear-btn {
            border: 2px solid green;
            border-radius: 8px;
        }
    }
`;

export const TodoItem = ({ todos, buttonText, deleteTodoitem, isdoneChangeTodoitem }) => {
    return (
        <>
            {todos.map((item) => (
                <TodoListItem isDone={item.isdone} key={item.id}>
                    {item.id}
                    <div className="content-box">
                        <Link to={`/detail/${item.id}`} className="link">
                            <p className="todo-title">{item.title}</p>
                        </Link>
                        <p className="todo-text">{item.text}</p>
                    </div>

                    <div className="todo-card-btn-box">
                        <button onClick={() => deleteTodoitem(item)} className="remove-btn">
                            삭제하기
                        </button>
                        <button onClick={() => isdoneChangeTodoitem(item)} className="clear-btn">
                            {buttonText}
                        </button>
                    </div>
                </TodoListItem>
            ))}
        </>
    );
};
