import React from 'react';
import styled from 'styled-components';

const LoadingBox = styled.div`
    width: 390px;
    height: 794px;
    background-color: antiquewhite;
    position: fixed;
    z-index: 10;
`;

const Loading = () => {
    return <LoadingBox>Loading</LoadingBox>;
};

export default Loading;
