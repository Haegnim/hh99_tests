import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import TodoUpdateContainer from '../container/TodoUpdateContainer';
import { TodoDetailItemContainer } from 'container/TodoDetailItemContainer';

const DetailPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailTodoUpdate = styled.div`
    width: 600px;
    height: 600px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 20px;
    }
`;

const Button = styled.button`
    margin: 10 0px;
    width: 300px;
    height: 60px;
`;
export const Detail = () => {
    const todos = useSelector(({ todos }) => todos);

    const navigate = useNavigate();
    let { pathname } = useLocation();
    pathname = parseInt(pathname.replace('/', ''));
    const todoDetail = todos.filter((item) => item.id === pathname);

    const [updateActive, setUpdateActive] = useState(true);
    const updateBtnHandler = () => {
        setUpdateActive(!updateActive);
    };

    //[x] 수정하기 버튼 클릭이 된다
    try {
        return (
            <DetailPage>
                <DetailTodoUpdate>
                    <Link to="/">
                        <Button>뒤로가기</Button>
                    </Link>
                    {updateActive ? (
                        <>
                            <Button onClick={updateBtnHandler}>수정하기</Button>
                            <TodoDetailItemContainer todos={todoDetail} />
                        </>
                    ) : (
                        <TodoUpdateContainer
                            updateTitle={todoDetail[0].title}
                            updateText={todoDetail[0].text}
                            flex={'column'}
                            idNum={todoDetail[0].id}
                        />
                    )}
                </DetailTodoUpdate>
            </DetailPage>
        );
    } catch (e) {
        navigate('/');
    }
};
