import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { useSelector } from 'react-redux';

const DetailPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailTodo = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    h3 {
        font-size: 20px;
    }
`;

export const Detail = () => {
    const todos = useSelector(({ todos }) => todos);
    const navigate = useNavigate();
    let { pathname } = useLocation();
    pathname = parseInt(pathname.replace('/detail/', ''));
    try {
        const todoDetail = todos.filter((item) => item.id === pathname);
        console.log(todoDetail);

        return (
            <DetailPage>
                {todoDetail.map((item) => {
                    return (
                        <DetailTodo isDone={item.isdone} key={item.id}>
                            {item.id}
                            <div className="content-box">
                                <h3 className="todo-title">{item.title}</h3>

                                <p className="todo-text">{item.text}</p>
                            </div>
                            <Link to="/">
                                <button>뒤로가기</button>
                            </Link>
                        </DetailTodo>
                    );
                })}
            </DetailPage>
        );
    } catch (e) {
        navigate('/');
    }
};
