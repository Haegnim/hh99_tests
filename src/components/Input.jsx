import React from 'react';
// import { useState } from 'react';
import styled from 'styled-components';
const InputBox = styled.div``;

export const Input = ({ labalText, onChangHandler, input }) => {
    // const [input, setInput] = useState('');

    // const onInputChangeHandler = (e) => {
    //     console.log(e.target.value);
    //     setInput(e.target.value);
    // };
    return (
        <InputBox>
            <label htmlFor="">
                {labalText}
                <input type="text" value={input} onChange={onChangHandler} />
            </label>
        </InputBox>
    );
};
