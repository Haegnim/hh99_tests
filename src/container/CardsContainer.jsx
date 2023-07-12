import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __getCards } from '../redux/modules/cardsSlice';
import Loading from '../components/Loading';
const CardList = styled.ul`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const CardsContainer = () => {
    const dispatch = useDispatch();
    const [showLoading, setShowLoading] = useState(true);
    const { isLoading, error, cards } = useSelector((state) => {
        return state.cards;
    });
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 800);
        dispatch(__getCards());

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (isLoading || showLoading) {
        return <Loading />;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    const cardmock = [
        { title: 'title1', writer: 'writer', content: 'content' },
        { title: 'title2', writer: 'writer', content: 'content' },
        { title: 'title3', writer: 'writer', content: 'content' },
    ];

    return (
        <CardList>
            {cards &&
                cards.map((card) => {
                    return (
                        <>
                            <CardItem
                                id={card.id}
                                title={card.title}
                                author={card.author}
                                content={card.content}
                                btnhidden
                            />
                        </>
                    );
                })}
        </CardList>
    );
};

export default CardsContainer;
