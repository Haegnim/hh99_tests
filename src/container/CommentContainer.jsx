import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { __getComments } from '../redux/modules/commentSlice';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const CommentSt = styled.ul`
    background-color: #777;
`;

const CommentContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, error, comments } = useSelector((state) => {
        return state.comments;
    });
    console.log(comments);
    useEffect(() => {
        dispatch(__getComments(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    return (
        <CommentSt>
            {comments
                ? comments.map((comment) => {
                      return <Comment comment={comment.body} author={comment.author} />;
                  })
                : null}
        </CommentSt>
    );
};

export default CommentContainer;
