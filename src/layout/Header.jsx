import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const HeaderSt = styled.header`
    width: 100%;
    height: 50px;
    padding: 0px 12px;
    background-color: #ff8866;
    display: flex;
    align-items: center;
    a {
        line-height: 0;
    }
`;

const Header = () => {
    return (
        <HeaderSt>
            <Link to="/">
                <AiOutlineHome size="24" />
            </Link>
            Header
        </HeaderSt>
    );
};

export default Header;
