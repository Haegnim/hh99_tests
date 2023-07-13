// import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { __deleteCard } from '../redux/modules/cardsSlice';
const CardItemSt = styled.li`
    width: 100%;
    padding: 20px;
    background-color: beige;
    border-radius: 12px;
    text-align: start;
    position: relative;
    .title {
        border-bottom: 1px solid #333;
        margin-bottom: 16px;
        position: relative;
        .author {
            font-size: 1rem;
            font-weight: normal;
            color: brown;
            text-align: end;
            position: absolute;
            right: 0;
            bottom: 2px;
        }
    }
    .content {
        padding: 8px 0;
    }
`;
const BtnBox = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 12px;
    justify-content: center;
`;
const CardItem = ({ id, title, author, content, btnhidden }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteBtnHandler = () => {
        dispatch(__deleteCard(id));
        navigate(-1);
    };
    return (
        <CardItemSt key={id}>
            <h2 className="title" onClick={() => navigate(`/card/${id}`)}>
                {title} <span className="author">{author}</span>
            </h2>

            <p className="content">{content}</p>
            {!btnhidden && (
                <BtnBox>
                    <Button onClick={deleteBtnHandler}>삭제하기</Button>
                    <Button onClick={() => navigate(`/card/${id}/update`)}>수정하기</Button>
                </BtnBox>
            )}
        </CardItemSt>
    );
};

export default CardItem;
