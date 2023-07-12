import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import useInput from '../hooks/useInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __AddCards } from '../redux/modules/cardsSlice';
import { v4 as uuidv4 } from 'uuid';
const FormSt = styled.form`
    width: 90%;
    margin: 0 auto;
    padding: 10px 10px 50px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const AddCardContainer = () => {
    const [writer, setWriter, onChangeWriterHandler] = useInput();
    const [title, setTitle, onChangeTitleHandler] = useInput();
    const [content, setContent, onChangeContentHandler] = useInput();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newCard = {
            id: uuidv4(),
            writer,
            title,
            content,
        };
        dispatch(__AddCards(newCard));
        setWriter('');
        setTitle('');
        setContent('');
    };

    return (
        <>
            JoinContainer
            <FormSt action="" onSubmit={onSubmitHandler}>
                <Input
                    label={'작성자'}
                    value={writer}
                    type={'text'}
                    onChangeHandler={onChangeWriterHandler}
                />
                <Input
                    label={'제목'}
                    value={title}
                    type={'text'}
                    onChangeHandler={onChangeTitleHandler}
                />
                <Textarea
                    label={'Content'}
                    value={content}
                    type={'text'}
                    onChangeHandler={onChangeContentHandler}
                />
                <div
                    className="btn-box"
                    style={{
                        display: `flex`,
                        gap: `10px`,
                    }}
                >
                    <Button onClick={() => navigate(-1)}>저장하기</Button>
                </div>
            </FormSt>
        </>
    );
};

export default AddCardContainer;
