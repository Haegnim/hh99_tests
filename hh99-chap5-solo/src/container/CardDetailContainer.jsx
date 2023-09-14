import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __getCard } from '../redux/modules/cardSlice';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
const CardList = styled.ul`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const CardsContainer = () => {
    const [showLoading, setShowLoading] = useState(true);

    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, error, card } = useSelector((state) => {
        return state.card;
    });
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 800);

        dispatch(__getCard(id));
        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (isLoading || showLoading) {
        // return <Loading />;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    const cardmock = [{ title: 'title1', writer: 'writer', content: 'content' }];
    return (
        <CardList>
            {card && (
                <>
                    <CardItem
                        id={id}
                        title={card.title}
                        author={card.author}
                        content={card.content}
                    />
                </>
            )}
        </CardList>
    );
};

export default CardsContainer;
