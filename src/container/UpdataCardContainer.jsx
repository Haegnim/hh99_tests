import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import useInput from '../hooks/useInput';
import Button from '../components/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getCard, __updateCard } from '../redux/modules/cardSlice';
import Loading from '../components/Loading';

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

const UpdataCardContainer = () => {
    const [author, setAuthor, onChangeAuthorHandler] = useInput();
    const [title, setTitle, onChangeTitleHandler] = useInput();
    const [content, setContent, onChangeContentHandler] = useInput();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error, card } = useSelector((state) => {
        return state.card;
    });
    console.log(id);
    useEffect(() => {
        if (card) {
            setAuthor(card.author);
            setTitle(card.title);
            setContent(card.content);
        }
        // }
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const updateCard = {
            id: id,
            author,
            title,
            content,
        };
        dispatch(__updateCard(updateCard));
        setAuthor('');
        setTitle('');
        setContent('');
        navigate(-1);
    };

    return (
        <>
            JoinContainer
            <FormSt action="" onSubmit={onSubmitHandler}>
                <Input
                    label={'작성자'}
                    value={author}
                    type={'text'}
                    onChangeHandler={onChangeAuthorHandler}
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
                    <Button>수정하기</Button>
                </div>
            </FormSt>
        </>
    );
};

export default UpdataCardContainer;
