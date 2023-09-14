import React, { useState } from 'react';
import { styled } from 'styled-components';
const StyledDropDownBlock = styled.div`
    /* width: 194px; */
    box-sizing: border-box;
    padding: 7px 9px;
    margin: 15px 10px;
    display: flex;
    border: none;
    border-radius: 25px;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    background-color: #fefefe;

    position: relative;
    transition: all 0.3s ease-in-out;
    outline: none;
    font-size: 14px;
    font-weight: 650;
    text-align: center;
    /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; */
    &::-ms-expand {
        display: none;
    }
    label {
        /* background-color: skyblue; */
        width: 150px;
        box-sizing: border-box;
        padding: 5px;
        border-radius: 20px;
        z-index: 99;
        position: relative;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &.active {
            color: #31be86;
            .countNum {
                background-color: #fff;
            }
        }
    }
`;
const Glider = styled.span`
    position: absolute;
    height: 32px;
    width: 150px;
    z-index: 1;
    border-radius: 99px; // just a high number to create pill effect
    transition: 0.25s ease-out;
    background-color: #c9f4e9;
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
    transform: translateX(${(props) => props.translatevalue}%);
`;

const CountNum = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    background-color: #c9f4e9;
    border-radius: 10px;
    color: #31be86;
`;

const StyledDropDown = ({ onChangeHandler }) => {
    const [span, setSpan] = useState(0);
    const [active, setActive] = useState(1);
    const tabMove = (x, id, value) => {
        setSpan(x);
        setActive(id);
        onChangeHandler(value);
    };
    return (
        <StyledDropDownBlock>
            <Glider translatevalue={span}></Glider>
            <label onClick={() => tabMove(0, 1, 'all')} className={active === 1 ? 'active' : ''}>
                All
            </label>
            <label
                onClick={() => tabMove(100, 2, 'working')}
                className={active === 2 ? 'active' : ''}
            >
                🔥 Working..!
                <CountNum className="countNum">1</CountNum>
            </label>
            <label onClick={() => tabMove(200, 3, 'done')} className={active === 3 ? 'active' : ''}>
                🌈 Done...!
                <CountNum className="countNum">2</CountNum>
            </label>
        </StyledDropDownBlock>
    );
};

export default StyledDropDown;
