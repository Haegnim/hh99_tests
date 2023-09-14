import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input/Input';
import Button from 'components/common/button/Button';

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
        margin: 0 20px 0 0;
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
            <Input
                changeHandler={titleChangeHandler}
                value={title}
                label={'제목'}
                width={flex ? '100%' : ''}
            />
            <Input
                changeHandler={textChangeHandler}
                value={text}
                label={'내용'}
                width={flex ? '100%' : ''}
            />
            <Button.Insert>저장하기</Button.Insert>
        </InsertFormStyle>
    );
};
