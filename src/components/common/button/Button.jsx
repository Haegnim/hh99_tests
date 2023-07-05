import React from 'react';
import styled, { css } from 'styled-components';
//[ ]버튼 태그 Button 컴포넌트로 수정
const ButtonStyle = styled.button`
    width: 160px;
    height: 50px;
    padding: 12px 0;
    border-radius: 8px;
    border: 1px solid #777;
    background-color: ${({ bc }) => bc};
    ${({ outlined, bc }) => {
        if (outlined) {
            return css`
                border: 3px solid ${bc};
                background-color: #fff;
                font-weight: 600;

                &:active {
                    background-color: #eeeeee;
                }
            `;
        }
    }}
    &:active {
        background-color: ${({ activeBc }) => activeBc};
    }
`;

const ButtonDefort = ({ children, ...restProps }) => {
    return <ButtonStyle {...restProps}>{children}</ButtonStyle>;
};

const InsertButton = (props) => {
    return <ButtonDefort {...props} bc="#55efc4" activeBc="#00b894" />;
};
const RemoveButton = (props) => {
    return <ButtonDefort {...props} bc="red" activeBc="#ffb894" outlined={true} />;
};
const ClearButton = (props) => {
    return <ButtonDefort {...props} bc="#55efc4" activeBc="#00b894" outlined={true} />;
};

const Insert = InsertButton;
const Remove = RemoveButton;
const Clear = ClearButton;

const Button = { Insert, Remove, Clear };
export default Button;
