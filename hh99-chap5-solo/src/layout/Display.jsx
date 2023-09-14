import React from 'react';
import styled from 'styled-components';
const Mobile = styled.div`
    width: 390px;
    height: 844px;
    background-color: #fff;
    overflow: scroll;
    /* position: relative; */
`;
const Display = ({ children }) => {
    return <Mobile>{children}</Mobile>;
};

export default Display;
