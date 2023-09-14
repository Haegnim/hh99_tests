import React from 'react';
import CardDetailContainer from '../container/CardDetailContainer';
import CommentContainer from '../container/CommentContainer';
import AddComment from '../container/AddComment';
const Card = () => {
    return (
        <div>
            <CardDetailContainer />
            <AddComment />
            <CommentContainer />
        </div>
    );
};

export default Card;
