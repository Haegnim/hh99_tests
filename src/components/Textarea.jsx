import React from 'react';
import styled from 'styled-components';

const TextareaBox = styled.div`
    width: 100%;
    text-align: start;
`;

const TextareaSt = styled.textarea`
    width: 100%;
    min-height: 80px;
    padding: 12px 12px;
    border: 1px solid #000;
    resize: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Textarea = ({ label, value, type, onChangeHandler }) => {
    return (
        <TextareaBox>
            <label htmlFor="">{label}</label>
            <TextareaSt value={value} type={type} onChange={onChangeHandler}></TextareaSt>
        </TextareaBox>
    );
};

export default Textarea;
