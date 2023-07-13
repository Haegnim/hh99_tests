// import React from 'react';
import styled, { css } from 'styled-components';

const BtnSt = styled.button`
    width: 130px;
    height: 40px;
    background-color: #888;
    ${({ $position }) => {
        if ($position) {
            return css`
                position: fixed;
                right: 50%;
                bottom: 50%;
                transform: translate(50%, 600%);
                z-index: 1;
            `;
        }
    }}
`;

const Button = ({ children, ...restProps }) => {
    return <BtnSt {...restProps}>{children}</BtnSt>;
};

export default Button;
