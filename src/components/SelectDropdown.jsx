import React, { useState } from 'react';
import styled from 'styled-components';
const DropDown = styled.div`
    width: 220px;
    margin: 0 auto;
`;
const DropDownBtn = styled.button`
    background-color: #fff;
    width: 100%;
    height: 30px;
`;
const Ul = styled.ul`
    border: 1px solid #000;
    /* border-radius: 25px; */
    list-style: none;
    padding: 0;
    visibility: ${(props) => props.visible};
    background-color: #fff;
    margin: 0;
`;
const Li = styled.li`
    text-align: center;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const SelectDropdown = ({ showDropdown, onClose, handleOptionSelect, selectedOption }) => {
    const options = [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2' },
        { value: 'option3', text: 'Option 3' },
    ];
    // const [selectedOption, setSelectedOption] = useState('');

    // const handleOptionSelect = (option) => {
    //     setSelectedOption(option);
    // };
    if (!showDropdown) {
        return null;
    }
    return (
        <DropDown>
            <Ul>
                {options.map((option) => (
                    <Li key={option.value} onClick={() => handleOptionSelect(option.text)}>
                        <option>{option.text}</option>
                    </Li>
                ))}
            </Ul>
        </DropDown>
    );
};

export default SelectDropdown;
