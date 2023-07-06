import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addTodo } from '../../../redux/modules/todos.js';

//[x]추가하기 버튼을 클릭해도 추한 아이템 화면에 표시되지 않음
//[x]추가하기 버튼을 클릭후 기존에 존재하던 아이템들이 사라짐
//[x]삭제 기능이 동작하지 않음.
//[x]상세 페이지에 진입하였을 때 데이터가 업데이트 되지 않음.
//[x] 완료된 카드의 상세 페이지에 진입하였을 때 올바른 데이터를 불러오지 못함.
//[x] 취소 버튼 클릭시 기능이 작동하지 않음.
//[ ] 과제를 마쳤다면 배포도 한번 해볼까요? 배포하셨다면 URL을 제출해주세요.
const Form = () => {
    const id = nextId();
    // 디스패치 기능추가
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
        id: 0,
        title: '',
        body: '',
        isDone: false,
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === '' || todo.body.trim() === '') return;
        // payload로 넣어줄 값을 설정
        const payload = {
            id: id,
            title: todo.title,
            body: todo.body,
            isDone: false,
        };
        // dispatch로 리듀서를 실행
        dispatch(addTodo(payload));
        setTodo({
            id: 0,
            title: '',
            body: '',
            isDone: false,
        });
    };

    return (
        <StAddForm onSubmit={onSubmitHandler}>
            <StInputGroup>
                <StFormLabel>제목</StFormLabel>
                <StAddInput
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={onChangeHandler}
                />
                <StFormLabel>내용</StFormLabel>
                <StAddInput type="text" name="body" value={todo.body} onChange={onChangeHandler} />
            </StInputGroup>
            <StAddButton>추가하기</StAddButton>
        </StAddForm>
    );
};

export default Form;

const StInputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const StFormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;

const StAddForm = styled.form`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`;

const StAddInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`;

const StAddButton = styled.button`
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;
`;
