import React from 'react';
import { styled } from 'styled-components';

import { TodoDetailItemContainer } from 'container/TodoDetailItemContainer';

const DetailPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailTodoUpdate = styled.div`
    width: 600px;
    height: 600px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 20px;
    }
`;

export const Detail = () => {
    //[x] 수정하기 버튼 클릭이 된다

    return (
        <DetailPage>
            <DetailTodoUpdate>
                <TodoDetailItemContainer />
            </DetailTodoUpdate>
        </DetailPage>
    );
};
