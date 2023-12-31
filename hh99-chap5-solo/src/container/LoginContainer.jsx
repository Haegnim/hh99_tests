import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import useInput from '../hooks/useInput';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthCheck } from '../redux/modules/auth';
import { authCheck } from '../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const FormSt = styled.form`
    width: 80%;
    height: 300px;
    margin: 0 auto;
    padding: 10px 10px 50px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const JoinContainer = () => {
    const [userId, setUserId, onChangeUserIdHandler] = useInput();
    const [password, setPassword, onChangePasswordHandler] = useInput();
    const dispatch = useDispatch();
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const loginUser = {
            id: userId,
            password,
        };
        await login(loginUser);
        setUserId('');
        setPassword('');
        const authResult = await authCheck();
        dispatch(isAuthCheck(authResult));
    };

    return (
        <>
            LoginContainer
            <FormSt action="" onSubmit={onSubmitHandler}>
                <Input
                    label={'UserId'}
                    value={userId}
                    type={'text'}
                    onChangeHandler={onChangeUserIdHandler}
                />
                <Input
                    label={'Password'}
                    value={password}
                    type={'password'}
                    onChangeHandler={onChangePasswordHandler}
                />
                <div
                    className="btn-box"
                    style={{
                        display: `flex`,
                        gap: `10px`,
                    }}
                >
                    <Link to="/join">
                        <Button>회원가입 이동</Button>
                    </Link>
                    <Button>로그인</Button>
                </div>
            </FormSt>
        </>
    );
};

export default JoinContainer;
