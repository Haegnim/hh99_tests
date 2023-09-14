import React from 'react';
import styled from 'styled-components';

const CommentItem = styled.li`
    /* padding: 20px 0; */
    background-color: #fff;
    text-align: start;
    border-bottom: 3px solid #333;

    .comment {
        padding: 16px 20px;
        border-bottom: 1px solid #333;
    }
    .author {
        padding: 8px 20px;
        font-size: 0.9rem;
        text-align: right;
    }
`;

const Comment = ({ comment, author }) => {
    console.log(comment);
    return (
        <CommentItem>
            <p className="comment">{comment}</p>
            <p className="author">작성자 : {author}</p>
        </CommentItem>
    );
};

export default Comment;
