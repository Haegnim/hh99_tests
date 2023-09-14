import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import useInput from '../hooks/useInput';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../api/auth';
const FormSt = styled.form`
    width: 90%;
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
    const navigate = useNavigate();
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            id: userId,
            password,
        };
        console.log(newUser);
        await signUp(newUser);
        setUserId('');
        setPassword('');
    };

    return (
        <>
            JoinContainer
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
                    <Link to="/login">
                        <Button>로그인 이동</Button>
                    </Link>
                    <Button>회원가입하기</Button>
                </div>
            </FormSt>
        </>
    );
};

export default JoinContainer;
