import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';

const InsertFormStyle = styled.form`
    width: 100%;
    /* padding: 12px 18px; */
    display: flex;
    background-color: azure;
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

export const InsertForm = ({ onSubmit, titleChangeHandler, title, textChangeHandler, text }) => {
    return (
        <InsertFormStyle onSubmit={onSubmit}>
            <Input changeHandler={titleChangeHandler} value={title} label={'제목'} />
            <Input changeHandler={textChangeHandler} value={text} label={'내용'} />
            <button>저장하기</button>
        </InsertFormStyle>
    );
};
