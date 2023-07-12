import React from 'react';
import CardsContainer from '../container/CardsContainer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div>
            <CardsContainer />
            <Link to="/card/add">
                <Button $position={'fixed'}>글쓰기</Button>
            </Link>
        </div>
    );
};

export default Cards;
