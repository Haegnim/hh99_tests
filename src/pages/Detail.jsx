import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodoByID } from '../redux/modules/todos.js';

const Detail = () => {
    const dispatch = useDispatch();
    //todo에 오타 todos로 수정
    //todos의 모든 객체가 불러와지는데 어떤 객체를 보여줄지 선택하지 않아서 화면에 안나옴
    const todo = useSelector((state) => state.todos.todos);
    const { id } = useParams();
    const navigate = useNavigate();
    //id는 주소창으로 보내진 todos의  id를 가져온 값이다.
    //todos 중에서 id와 같은 id를 가진 todo를 find로 찾아 todoDetail로 반환한다.
    const todoDetail = todo.find((todoDetail) => todoDetail.id === id);
    console.log(todoDetail);

    return (
        <StContainer>
            <StDialog>
                <div>
                    <StDialogHeader>
                        <div>ID :{todoDetail.id}</div>
                        <StButton
                            borderColor="#ddd"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            이전으로
                        </StButton>
                    </StDialogHeader>
                    <StTitle>{todoDetail.title}</StTitle>
                    <StBody>{todoDetail.body}</StBody>
                </div>
            </StDialog>
        </StContainer>
    );
};

export default Detail;

const StContainer = styled.div`
    border: 2px solid #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StDialog = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StDialogHeader = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
`;

const StTitle = styled.h1`
    padding: 0 24px;
`;

const StBody = styled.main`
    padding: 0 24px;
`;

const StButton = styled.button`
    border: 1px solid ${({ borderColor }) => borderColor};
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`;
