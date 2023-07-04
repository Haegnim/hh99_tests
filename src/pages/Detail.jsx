import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { deleteTodo } from '../redux/modules/todos';
import { isdoneChange } from '../redux/modules/todos';
import { useSelector, useDispatch } from 'react-redux';
import { TodoItem } from '../components/Todo/TodoItem';
import TodoInputContainer from '../container/TodoInputContainer';

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

    const dispatch = useDispatch();

    const deleteTodoitem = (item) => {
        dispatch(deleteTodo(item.id));
    };
    const isdoneChangeTodoitem = (item) => {
        dispatch(isdoneChange(item.id, item.isdone));
    };

    const navigate = useNavigate();
    let { pathname } = useLocation();
    pathname = parseInt(pathname.replace('/detail/', ''));

    // const update = () => {};
    let buttonText = '완료';
    todos.isdone ? (buttonText = '취소') : (buttonText = '완료');

    const [updateActive, setUpdateActive] = useState(true);
    const updateBtnHandler = () => {
        setUpdateActive(!updateActive);
    };
    console.log(updateActive);
    //[ ] 수정하기 버튼 클릭이 안됨
    try {
        const todoDetail = todos.filter((item) => item.id === pathname);
        return (
            <DetailPage>
                <DetailTodoUpdate>
                    <Link to="/">
                        <Button>뒤로가기</Button>
                    </Link>
                    {updateActive ? (
                        <>
                            <Button onClick={updateBtnHandler}>수정하기</Button>
                            <TodoItem
                                todos={todoDetail}
                                buttonText={buttonText}
                                deleteTodoitem={deleteTodoitem}
                                isdoneChangeTodoitem={isdoneChangeTodoitem}
                            />
                        </>
                    ) : (
                        <TodoInputContainer
                            updateTitle={todoDetail[0].title}
                            updateText={todoDetail[0].text}
                        />
                    )}
                </DetailTodoUpdate>
            </DetailPage>
        );
    } catch (e) {
        navigate('/');
    }
};
