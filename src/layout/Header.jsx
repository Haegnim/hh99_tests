import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthCheck } from '../redux/modules/auth';
import { authCheck } from '../api/auth';

const HeaderSt = styled.header`
    width: 100%;
    height: 50px;
    padding: 0px 12px;
    background-color: #ff8866;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        line-height: 0;
    }
    & > button {
    }
`;

const Header = () => {
    const auth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const logoutOnClick = async () => {
        await localStorage.removeItem('accessToken');
        const authResult = await authCheck();
        dispatch(isAuthCheck(authResult));
    };
    return (
        <HeaderSt>
            <Link to="/">
                <AiOutlineHome size="24" />
            </Link>
            {auth ? <button onClick={logoutOnClick}>로그아웃</button> : null}
        </HeaderSt>
    );
};

export default Header;
