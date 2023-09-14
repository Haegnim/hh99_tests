import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    width: 100%;
    text-align: start;
    margin-bottom: 14px;
`;

const InputSt = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    border: 1px solid #000;
`;

const Input = ({ label, value, type, onChangeHandler }) => {
    return (
        <InputBox>
            <label>{label}</label>
            <InputSt value={value} type={type} onChange={onChangeHandler} />
        </InputBox>
    );
};

export default Input;
