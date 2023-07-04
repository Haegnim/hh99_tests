import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';

//[ ]props가 없을 때 row 적용안됨
const InsertFormStyle = styled.form`
    width: 100%;
    /* padding: 12px 18px; */
    background-color: azure;
    display: flex;
    flex-direction: ${(props) => props.flex || `row`};
    align-items: center;
    justify-content: space-between;
    border: 1px solid #777;
    button {
        width: 160px;
        height: 50px;
        margin: 0 20px 0 0;
        border-radius: 8px;
        border: 1px solid #777;
        background-color: green;
    }
`;

export const InsertForm = ({
    onSubmit,
    titleChangeHandler,
    title,
    textChangeHandler,
    text,
    flex,
}) => {
    return (
        <InsertFormStyle onSubmit={onSubmit} flex={flex}>
            <Input changeHandler={titleChangeHandler} value={title} label={'제목'} />
            <Input changeHandler={textChangeHandler} value={text} label={'내용'} />
            <button>저장하기</button>
        </InsertFormStyle>
    );
};
