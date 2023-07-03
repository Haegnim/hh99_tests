import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const BtnStyle = styled.button`
    width: 200px;
    height: 60px;
    padding: 10px 20px;
    background-color: antiquewhite;
    border: none;
    border-radius: 8px;
    background-color: aqua;
`;
const TextBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 7px;
`;
const IconBox = styled.div`
    /* background-color: #fff; */
`;
function Button() {
    return (
        <BtnStyle>
            <TextBox>
                버튼
                <IconBox>
                    <FontAwesomeIcon icon={faChevronRight} />
                </IconBox>
            </TextBox>
        </BtnStyle>
    );
}

export default Button;
